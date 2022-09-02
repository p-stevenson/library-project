"use strict";
let myLibrary = [
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    pages: 671,
    uniqueID: crypto.randomUUID(),
  },
];

class BookCard {
  constructor() {}
}

class Book {
  constructor(title, author, pages, uniqueID) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.uniqueID = uniqueID;
  }
}

function addToLibrary(book) {
  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#author").value;
  const pages = Number(document.querySelector("#numOfPages").value);
  const uniqueID = crypto.randomUUID();
  return myLibrary.push((book = new Book(title, author, pages, uniqueID)));
}

function displayBooks(library) {
  let cardContainer = document.querySelector(".cardContainer");

  for (let i = 0; i < library.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", `card0${i}`);
    cardContainer.appendChild(card);

    const currentBook = document.querySelector(`[id=card0${i}]`);
    for (let key in library[i]) {
      if (key === "uniqueID") {
        continue;
      }
      const info = document.createElement("p");
      info.classList.add("info");
      info.setAttribute("id", `${key}`);
      currentBook.appendChild(info);
      if (key === "pages") {
        info.textContent = `Pages: ${library[i][key]}`;
      } else {
        info.textContent = library[i][key];
      }
    }

    let delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("id", `${myLibrary[i]["uniqueID"]}`);
    delBtn.textContent = "Delete";
    currentBook.appendChild(delBtn);

    /*     const hideUUID = document.querySelectorAll("#uuid").forEach((item) => {
      item.style.display = "none";
    }); */
  }
  const delBook = document.querySelectorAll(".delBtn").forEach((delBtn) =>
    delBtn.addEventListener("click", () => {
      const index = library.findIndex((book) => {
        return book.uniqueID === `${delBtn["id"]}`;
      });
      myLibrary.splice(index, 1);
      clearLibrary();
      displayBooks(myLibrary);
    })
  );
}

// const delBtn = document.querySelector(".delBtn");
const addBtn = document.querySelector("#addBook");
const formContainer = document.querySelector(".formContainer");
const submitBtn = document.querySelector("#submit");

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

function clearLibrary() {
  document.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });
}

const displayForm = () => {
  formContainer.style.display = "flex";
  listenForSubmit();
};

const cancelBtn = document.querySelector("#cancel");
const cancelInput = () => {
  listenForAddBtn();
  formContainer.style.display = "none";
};

const submitBook = () => {
  addToLibrary();
  listenForAddBtn();
  clearLibrary();
  displayBooks(myLibrary);
  const resetForm = document.querySelector("form").reset();
  formContainer.style.display = "none";
};

listenForAddBtn();
displayBooks(myLibrary);
