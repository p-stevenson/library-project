"use strict";
let myLibrary = [
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    pages: 671,
    uniqueID: crypto.randomUUID(),
  },
];

class Book {
  constructor(title, author, pages, uniqueID) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.uniqueID = uniqueID;
  }
}

function displayBooks(library) {
  clearDisplayedBooks();
  let cardContainer = document.querySelector(".cardContainer");

  for (let i = 0; i < library.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.setAttribute("id", `bookCard0${i}`);
    cardContainer.appendChild(bookCard);

    const currentBook = document.querySelector(`[id=bookCard0${i}]`);
    for (let key in library[i]) {
      if (key === "uniqueID") {
        continue;
      }
      const bookInfo = document.createElement("p");
      bookInfo.classList.add("info");
      bookInfo.setAttribute("id", `${key}`);
      currentBook.appendChild(bookInfo);
      if (key === "pages") {
        bookInfo.textContent = `Pages: ${library[i][key]}`;
      } else {
        bookInfo.textContent = library[i][key];
      }
    }

    let delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("id", `${myLibrary[i]["uniqueID"]}`);
    delBtn.textContent = "Delete";
    currentBook.appendChild(delBtn);
  }
  listenForAddBtn();
  listenForDelBook();
}

function addToLibrary(book) {
  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#author").value;
  const pages = Number(document.querySelector("#numOfPages").value);
  const uniqueID = crypto.randomUUID();
  return myLibrary.push((book = new Book(title, author, pages, uniqueID)));
}

const addBtn = document.querySelector("#addBook");
const formContainer = document.querySelector(".formContainer");
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
        return book.uniqueID === `${delBtn["id"]}`;
      });
      myLibrary.splice(index, 1);
      displayBooks(myLibrary);
    })
  );
}

function clearDisplayedBooks() {
  document.querySelectorAll(".bookCard").forEach((book) => {
    book.remove();
  });
}

function displayForm() {
  formContainer.style.display = "flex";
  listenForSubmit();
}

const cancelInput = () => {
  listenForAddBtn();
  formContainer.style.display = "none";
};

const submitBook = () => {
  addToLibrary();
  listenForAddBtn();
  displayBooks(myLibrary);
  document.querySelector("form").reset();
  formContainer.style.display = "none";
};

displayBooks(myLibrary);
