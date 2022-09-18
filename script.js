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
    "High Fidelity",
    "Nick Hornby",
    340,
    crypto.randomUUID(),
    false,
    "Rob does. He keeps a list, in fact. But Laura isn't on it - even though she's just become his latest ex. He's got his life back, you see. He can just do what he wants when he wants: like listen to whatever music he likes, look up the girls that are on his list, and generally behaves as if Laura never mattered. But Rob finds he can't move on. He's stuck in a really deep groove - and it's called Laura. Soon, Rob's asking himself some big questions: about love, about life - and about why we choose to share ours with the people we do."
  )
);

let book5 = myLibrary.push(
  new Book(
    "The Ocean at the End of the Lane",
    "Neil Gaiman",
    181,
    crypto.randomUUID(),
    false,
    `"Sussex, England. A middle-aged man returns to his childhood home to attend a funeral. Although the house he lived in is long gone, he is drawn to the farm at the end of the road, where, when he was seven, he encountered a most remarkable girl, Lettie Hempstock, and her mother and grandmother. He hasn't thought of Lettie in decades, and yet as he sits by the pond (a pond that she'd claimed was an ocean) behind the ramshackle old farmhouse, the unremembered past comes flooding back. And it is a past too strange, too frightening, too dangerous to have happened to anyone, let alone a small boy.

Forty years earlier, a man committed suicide in a stolen car at this farm at the end of the road. Like a fuse on a firework, his death lit a touchpaper and resonated in unimaginable ways. The darkness was unleashed, something scary and thoroughly incomprehensible to a little boy. And Lettie—magical, comforting, wise beyond her years—promised to protect him, no matter what.
    
A groundbreaking work from a master, The Ocean at the End of the Lane is told with a rare understanding of all that makes us human, and shows the power of stories to reveal and shelter us from the darkness inside and out. It is a stirring, terrifying, and elegiac fable as delicate as a butterfly's wing and as menacing as a knife in the dark."`
  )
);

let book6 = myLibrary.push(
  new Book(
    "The Martian",
    "Andy Weir",
    384,
    crypto.randomUUID(),
    false,
    `"Six days ago, astronaut Mark Watney became one of the first people to walk on Mars.

Now, he’s sure he’ll be the first person to die there.
    
After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive.
    
Chances are, though, he won’t have time to starve to death. The damaged machinery, unforgiving environment, or plain-old “human error” are much more likely to kill him first.
    
But Mark isn’t ready to give up yet. Drawing on his ingenuity, his engineering skills — and a relentless, dogged refusal to quit — he steadfastly confronts one seemingly insurmountable obstacle after the next. Will his resourcefulness be enough to overcome the impossible odds against him?"`
  )
);

let book7 = myLibrary.push(
  new Book(
    "Crime and Punishment",
    "Fyodor Dostoevsky",
    671,
    crypto.randomUUID(),
    false,
    `Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden sex worker, can offer the chance of redemption.`
  )
);

let book8 = myLibrary.push(
  new Book(
    "The Doors of Perception",
    "Aldous Huxley",
    187,
    crypto.randomUUID(),
    false,
    `As only he can, Aldous Huxley explores the mind's remote frontiers and the unmapped areas of human consciousness. These two astounding essays are among the most profound studies of the effects of mind-expanding drugs written in this century. Contains the complete texts of The Doors of Perception and Heaven and Hell , both of which became essential for the counterculture during the 1960s and influenced a generation's perception of life.`
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
    buttonContainer.classList.add("cardButtons");
    currentBook.appendChild(buttonContainer);

    let delBtn = document.createElement("input");
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("type", "image");
    delBtn.setAttribute("id", `delBtn00${i}`);
    delBtn.setAttribute("data-del-id", `${myLibrary[i]["uniqueID"]}`);
    delBtn.setAttribute("src", "icons/trash-alt-grey.svg");
    buttonContainer.appendChild(delBtn);

    let readBtn = document.createElement("input");
    readBtn.classList.add("readBtn");
    readBtn.setAttribute("type", "image");
    readBtn.setAttribute("id", `readBtn00${i}`);
    readBtn.setAttribute("data-read-id", `${myLibrary[i]["uniqueID"]}`);
    readBtn.setAttribute("src", "icons/check-circle-unread.svg");
    buttonContainer.appendChild(readBtn);

    myLibrary[i]["read"] === true
      ? readBtn.setAttribute("src", "icons/check-circle-read.svg")
      : false;
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
