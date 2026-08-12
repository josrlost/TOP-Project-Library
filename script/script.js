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
addToMyLibrary("2666", "Roberto Bolaño", "1136 pages", "ES", "Yes");
addToMyLibrary("Paradiso", "Jose Lezama Lima", "466 pages", "ES", "Yes");

function displayFromMyLibrary(arr) {
    for(const ele of arr) {
        let bookRow = document.createElement("tr");
        let bookTitle = document.createElement("td")
        let bookAuthor = document.createElement("td");
        let bookLang = document.createElement("td");
        let bookPages = document.createElement("td");
        let bookHasRead = document.createElement("td");
        let removeBookBtn = document.createElement('button')
        removeBookBtn.classList.add("removeBookBtn")
        removeBookBtn.textContent = "Remove";
        bookTitle.textContent = ele.title;
        bookAuthor.textContent = ele.author;
        bookLang.textContent = ele.language;
        bookPages.textContent = ele.pages;
        bookHasRead.textContent = ele.hasRead;
        bookRow.appendChild(bookTitle);
        bookRow.appendChild(bookAuthor);
        bookRow.appendChild(bookLang);
        bookRow.appendChild(bookPages);
        bookRow.appendChild(bookHasRead);
        bookRow.appendChild(removeBookBtn);
        bookRow.dataset.indexNumber = ele.uid;
        bookTable.appendChild(bookRow);
    } myLibrary = [];
}

displayFromMyLibrary(myLibrary);


addBookBtn.addEventListener("click",() => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
submitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    addToMyLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputLanguage.value, inputHasRead.value);
    displayFromMyLibrary(myLibrary);
})