"use strict";
let myLibrary = [
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    pages: 671,
    uuid: crypto.randomUUID(),
  },
];

class Book {
  constructor(title, author, pages, notes, hasRead) {
    this.title = document.querySelector("#bookTitle").value;
    this.author = document.querySelector("#author").value;
    this.pages = Number(document.querySelector("#numOfPages").value);
    this.uuid = crypto.randomUUID();
  }
}

function addToLibrary(book) {
  return myLibrary.push(
    (book = new Book(title, author, pages, notes /* hasRead */))
  );
}

function displayBooks(library) {
  let cardContainer = document.querySelector(".cardContainer");

  for (let i = 0; i < library.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", `card0${i}`);
    cardContainer.appendChild(card);
    const currentBook = document.querySelector(`[data-id=card0${i}]`);

    for (let key in library[i]) {
      const info = document.createElement("p");
      info.classList.add("info");
      info.setAttribute("id", `${key}`);
      currentBook.appendChild(info);
      info.textContent = library[i][key];
    }

    const hideUUID = document.querySelectorAll("#uuid").forEach((item) => {
      item.style.display = "none";
    });
  }
}

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
  const clearLibrary = document.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });
  displayBooks(myLibrary);
  const resetForm = document.querySelector("form").reset();
  formContainer.style.display = "none";
};

listenForAddBtn();

displayBooks(myLibrary);
