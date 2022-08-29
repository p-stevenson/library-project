"use strict";
let myLibrary = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    pages: 295,
    hasRead: true,
  },
  { title: "1984", author: "George Orwell", pages: 250, hasRead: true },
  {
    title: "The Metamorphosis",
    author: "Franz Kafka",
    pages: 201,
    hasRead: true,
  },
  {
    title: "The Doors of Perception",
    author: "Aldous Huxley",
    pages: 208,
    hasRead: false,
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    pages: 671,
    hasRead: true,
  },
];

class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }
}

function addBookToLibrary(book) {
  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#numOfPages").value;
  return myLibrary.push(
    (book = new Book(`${title}`, `${author}`, `${pages}`, true))
  );
}

function displayBooks(library) {
  const cardContainer = document.querySelector(".cardContainer");
  for (let i = 0; i < library.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", `card000${i}`);
    cardContainer.appendChild(card);
    const currentBook = document.querySelector(`[data-id=card000${i}]`);
    for (let key in library[i]) {
      const info = document.createElement("p");
      info.classList.add("info");
      info.setAttribute("id", `${key}`);
      currentBook.appendChild(info);
      info.textContent = library[i][key];
    }
  }
}

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

const addBtn = document.querySelector("#addBook");
const formContainer = document.querySelector(".formContainer");
const displayForm = () => {
  formContainer.style.display = "flex";
  console.log("active");
  listenForSubmit();
};

const cancelBtn = document.querySelector("#cancel");
const cancelInput = () => {
  formContainer.style.display = "none";
  listenForAddBtn();
};

const submitBtn = document.querySelector("#submit");
const submitBook = () => {
  addBookToLibrary();
  formContainer.style.display = "none";
  listenForAddBtn();
};

listenForAddBtn();

displayBooks(myLibrary);
