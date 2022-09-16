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

let book1 = myLibrary.push(
  new Book(
    "The Little Prince",
    "Antoine de Saint-Exupery",
    96,
    crypto.randomUUID(),
    false,
    `A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. "Please," asks the stranger, "draw me a sheep." And the pilot realizes that when life's events are too difficult to understand, there is no choice but to succumb to their mysteries. He pulls out pencil and paper... And thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life, has changed forever the world for its readers.
    
    Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince, presented here in a stunning new translation with carefully restored artwork. The definitive edition of a worldwide classic, it will capture the hearts of readers of all ages.`
  )
);

let book2 = myLibrary.push(
  new Book(
    "Memoirs of a Geisha",
    "Arthur Golden",
    503,
    crypto.randomUUID(),
    false,
    `A literary sensation and runaway bestseller, this brilliant novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.\n \nIn "Memoirs of a Geisha," we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.`
  )
);

let book4 = myLibrary.push(
  new Book(
    "the last book",
    "last writer",
    114,
    crypto.randomUUID(),
    false,
    "some test text"
  )
);

let book5 = myLibrary.push(
  new Book(
    "the last book",
    "last writer",
    114,
    crypto.randomUUID(),
    false,
    "some test text"
  )
);

let book6 = myLibrary.push(
  new Book(
    "the last book",
    "last writer",
    114,
    crypto.randomUUID(),
    false,
    "some test text"
  )
);

let book7 = myLibrary.push(
  new Book(
    "the last book",
    "last writer",
    114,
    crypto.randomUUID(),
    false,
    "some test text"
  )
);

let book8 = myLibrary.push(
  new Book(
    "the last book",
    "last writer",
    114,
    crypto.randomUUID(),
    false,
    "some test text"
  )
);

let book9 = myLibrary.push(
  new Book(
    "the last book",
    "last writer",
    114,
    crypto.randomUUID(),
    false,
    "some test text"
  )
);

let book10 = myLibrary.push(
  new Book(
    "the last book",
    "last writer",
    114,
    crypto.randomUUID(),
    false,
    "some test text"
  )
);

let book11 = myLibrary.push(
  new Book(
    "the last book",
    "last writer",
    114,
    crypto.randomUUID(),
    false,
    "some test text"
  )
);

let book12 = myLibrary.push(
  new Book(
    "the last book",
    "last writer",
    114,
    crypto.randomUUID(),
    false,
    "some test text"
  )
);

function displayBooks(library) {
  clearDisplayedBooks();
  let cardContainer = document.querySelector(".cardContainer");

  for (let i = 0; i < library.length; i++) {
    let card = document.createElement("div");
    card.classList.add("bookWrapper");
    card.setAttribute("id", `card00${i}`);
    cardContainer.appendChild(card);
    const currentBook = document.querySelector(`[id=card00${i}]`);
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("imgContainer");
    imageContainer.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
    currentBook.appendChild(imageContainer);

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
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("cardButttons");
    currentBook.appendChild(buttonContainer);

    let delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("id", `delBtn00${i}`);
    delBtn.setAttribute("data-del-id", `${myLibrary[i]["uniqueID"]}`);
    delBtn.textContent = "Delete";
    buttonContainer.appendChild(delBtn);

    let readBtn = document.createElement("button");
    readBtn.classList.add("readBtn");
    readBtn.setAttribute("type", "button");
    readBtn.setAttribute("id", `readBtn00${i}`);
    readBtn.setAttribute("data-read-id", `${myLibrary[i]["uniqueID"]}`);
    readBtn.textContent = "Read";
    buttonContainer.appendChild(readBtn);

    myLibrary[i]["read"] === true
      ? (document.querySelector(`#card00${i}`).style.borderColor = "green")
      : (document.querySelector(`#card00${i}`).style.borderColor = "black");
  }
  listenForAddBtn();
  listenForDelBook();
  listenForReadStatus();
}

function addToLibrary(book) {
  const title = document.querySelector("#titleInput").value;
  const author = document.querySelector("#authorInput").value;
  const pages = Number(document.querySelector("#pagesInput").value);
  const uniqueID = crypto.randomUUID();
  const read = false;
  const notes = document.querySelector("#notesInput").value;
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
  document.querySelector(".formWrapper").style.display = "grid";
  listenForSubmit();
}

const cancelInput = () => {
  formContainer.style.display = "none";
  document.querySelector(".formWrapper").style.display = "none";
  listenForAddBtn();
};

const submitBook = () => {
  addToLibrary();
  listenForAddBtn();
  displayBooks(myLibrary);
  document.querySelector("form").reset();
  formContainer.style.display = "none";
  document.querySelector(".formWrapper").style.display = "none";
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
