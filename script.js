"use strict";
let myLibrary = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    pages: 295,
    hasRead: true,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    pages: 512,
    hasRead: false,
  },
  { title: "1984", author: "George Orwell", pages: 250, hasRead: true },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 336,
    hasRead: false,
  },
  {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    pages: 180,
    hasRead: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
    hasRead: false,
  },
  { title: "Jane Eyre", author: "Charlotte Brontë", pages: 532, hasRead: true },
  {
    title: "The Picture of Dorian Grey",
    author: "Oscar Wilde",
    pages: 272,
    hasRead: false,
  },
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
  const title = prompt("title?");
  const author = prompt("author");
  const pages = prompt("Number of Pages?");
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
      console.log(library[i][key]);
    }
  }
}

document.querySelector("#add").addEventListener("click", () => {
  const showForm = document.querySelector(".formContainer");
  showForm.style.display = "flex";
}),
  { once: true };

displayBooks(myLibrary);
