"use strict";
let myLibrary = [];

class Book {
  constructor(title, author, pages, uniqueID, read, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.uniqueID = uniqueID;
    this.read = read;
    this.notes = notes;
  }
  readStatus() {
    if (this.read === false) {
      this.read = true;
    } else if (this.read === true) {
      this.read = false;
    }
  }
}
function displayBooks(library) {
  clearDisplayedBooks();
  let cardContainer = document.querySelector(".cardContainer");

  for (let i = 0; i < library.length; i++) {
    let card = document.createElement("div");
    card.classList.add("bookWrapper");
    card.setAttribute("id", `card00${i}`);
    cardContainer.appendChild(card);

    const currentBook = document.querySelector(`[id=card00${i}]`);
    for (let key in library[i]) {
      const bookInfo = document.createElement("p");
      bookInfo.classList.add("info");
      bookInfo.setAttribute("id", `${key}`);
      switch (key) {
        case "uniqueID":
        case "read":
          continue;
        case "pages":
          bookInfo.textContent = `Pages: ${library[i][key]}`;
          break;
        default:
          bookInfo.textContent = library[i][key];
          break;
      }
      currentBook.appendChild(bookInfo);
    }

    let delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("id", `delBtn00${i}`);
    delBtn.setAttribute("data-del-id", `${myLibrary[i]["uniqueID"]}`);
    delBtn.textContent = "Delete";
    currentBook.appendChild(delBtn);

    let readBtn = document.createElement("button");
    readBtn.classList.add("readBtn");
    readBtn.setAttribute("type", "button");
    readBtn.setAttribute("id", `readBtn00${i}`);
    readBtn.setAttribute("data-read-id", `${myLibrary[i]["uniqueID"]}`);
    readBtn.textContent = "Read";
    currentBook.appendChild(readBtn);

    myLibrary[i]["read"] === true
      ? (document.querySelector(`#card00${i}`).style.borderColor = "green")
      : (document.querySelector(`#card00${i}`).style.borderColor = "red");
  }
  listenForAddBtn();
  listenForDelBook();
  listenForReadStatus();
}

function addToLibrary(book) {
  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#author").value;
  const pages = Number(document.querySelector("#numOfPages").value);
  const uniqueID = crypto.randomUUID();
  const read = false;
  const notes = document.querySelector("#notes").value;
  return myLibrary.push(
    (book = new Book(title, author, pages, uniqueID, read, notes))
  );
}

const addBtn = document.querySelector("#addBook");
const formContainer = document.querySelector("form");
const submitBtn = document.querySelector("#submit");
const cancelBtn = document.querySelector("#cancel");

function listenForAddBtn() {
  addBtn.addEventListener("click", displayForm), { once: true };
  cancelBtn.removeEventListener("click", cancelInput);
  submitBtn.removeEventListener("click", submitBook);
}

function listenForSubmit() {
  addBtn.removeEventListener("click", displayForm);
  cancelBtn.addEventListener("click", cancelInput), { once: true };
  submitBtn.addEventListener("click", submitBook), { once: true };
}

function listenForDelBook() {
  document.querySelectorAll(".delBtn").forEach((delBtn) =>
    delBtn.addEventListener("click", () => {
      const index = myLibrary.findIndex((book) => {
        return book.uniqueID === delBtn.dataset.delId;
      });
      myLibrary.splice(index, 1);
      displayBooks(myLibrary);
    })
  );
}

function clearDisplayedBooks() {
  document.querySelectorAll(".bookWrapper").forEach((book) => {
    book.remove();
  });
}

function displayForm() {
  formContainer.style.display = "flex";
  listenForSubmit();
}

const cancelInput = () => {
  formContainer.style.display = "none";
  listenForAddBtn();
};

const submitBook = () => {
  addToLibrary();
  listenForAddBtn();
  displayBooks(myLibrary);
  document.querySelector("form").reset();
  formContainer.style.display = "none";
};

displayBooks(myLibrary);

function listenForReadStatus() {
  document.querySelectorAll(".readBtn").forEach((button) =>
    button.addEventListener("click", () => {
      const index = myLibrary.findIndex((book) => {
        return book.uniqueID === button.dataset.readId;
      });
      myLibrary[index].readStatus();
      displayBooks(myLibrary);
    })
  );
}
