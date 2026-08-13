const bookTable = document.querySelector(".bookTable");
const addBookBtn = document.querySelector("#addNewBookBtn")
const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector("#closeBtn");
const submitBtn = document.querySelector("#submitInfoBtn");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputLanguage = document.querySelector("#language");
const inputHasRead = document.querySelector("#hasRead");
let myLibrary = [];
let nodesOfRemoveBtns = [];

function Book(title, author, pages, language, hasRead, uid) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.language = language,
    this.hasRead = hasRead;
    this.uid = crypto.randomUUID();
}

function addToMyLibrary(title, author, pages, language, hasRead) {
    let book = new Book(title, author, pages, language, hasRead);
    myLibrary.push(book);
}

addToMyLibrary("The Silmarillion", "J. R. R. Tolkien", "480 pages", "EN", "Yes");


function displayFromMyLibrary(arr) {
    if(arr.length <= 1) {
        let bookRow = document.createElement("tr");
        let bookTitle = document.createElement("td")
        let bookAuthor = document.createElement("td");
        let bookLang = document.createElement("td");
        let bookPages = document.createElement("td");
        let bookHasRead = document.createElement("td");
        let removeBookBtn = document.createElement('button')
        removeBookBtn.classList.add("removeBookBtn")
        removeBookBtn.textContent = "Remove";
        bookTitle.textContent = arr[0].title;
        bookAuthor.textContent = arr[0].author;
        bookLang.textContent = arr[0].language;
        bookPages.textContent = arr[0].pages;
        bookHasRead.textContent = arr[0].hasRead;
        bookRow.appendChild(bookTitle);
        bookRow.appendChild(bookAuthor);
        bookRow.appendChild(bookLang);
        bookRow.appendChild(bookPages);
        bookRow.appendChild(bookHasRead);
        bookRow.appendChild(removeBookBtn);
        bookRow.dataset.indexNumber = arr[0].uid;
        bookTable.appendChild(bookRow);
    } else {
        let bookRow = document.createElement("tr");
        let bookTitle = document.createElement("td")
        let bookAuthor = document.createElement("td");
        let bookLang = document.createElement("td");
        let bookPages = document.createElement("td");
        let bookHasRead = document.createElement("td");
        let removeBookBtn = document.createElement('button')
        removeBookBtn.classList.add("removeBookBtn")
        removeBookBtn.textContent = "Remove";
        bookTitle.textContent = arr.at(-1).title;
        bookAuthor.textContent = arr.at(-1).author;
        bookLang.textContent = arr.at(-1).language;
        bookPages.textContent = arr.at(-1).pages;
        bookHasRead.textContent = arr.at(-1).hasRead;
        bookRow.appendChild(bookTitle);
        bookRow.appendChild(bookAuthor);
        bookRow.appendChild(bookLang);
        bookRow.appendChild(bookPages);
        bookRow.appendChild(bookHasRead);
        bookRow.appendChild(removeBookBtn);
        bookRow.dataset.indexNumber = arr.at(-1).uid;
        bookTable.appendChild(bookRow);
    }   nodesOfRemoveBtns = document.querySelectorAll(".removeBookBtn");
}

displayFromMyLibrary(myLibrary);
addToMyLibrary("2666", "Roberto Bolaño", "1136 pages", "ES", "Yes");
displayFromMyLibrary(myLibrary);
addToMyLibrary("Paradiso", "Jose Lezama Lima", "466 pages", "ES", "Yes");
displayFromMyLibrary(myLibrary);

addBookBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
submitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    addToMyLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputLanguage.value, inputHasRead.value);
    displayFromMyLibrary(myLibrary);
    nodesOfRemoveBtns.forEach(button => {
    button.addEventListener("click", (evt) => removeRow(evt))
})
})


function removeRow(evt) {
    evt.target.parentElement.remove();
    }


nodesOfRemoveBtns.forEach(button => {
    button.addEventListener("click", (evt) => removeRow(evt))
})