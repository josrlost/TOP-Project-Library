const bookTable = document.querySelector(".bookTable");


const myLibrary = [];

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

addToMyLibrary("The Silmarillion", "J. R. R. Tolkien", "480 pages", "EN", true);
addToMyLibrary("2666", "Roberto Bolaño", "1136 pages", "ES", false);
addToMyLibrary("Paradiso", "Jose Lezama Lima", "466 pages", "ES", true);

function displayFromMyLibrary(arr) {
    for(const ele of arr) {
        let bookRow = document.createElement("tr");
        let bookTitle = document.createElement("td")
        let bookAuthor = document.createElement("td");
        let bookLang = document.createElement("td");
        let bookPages = document.createElement("td");
        bookTitle.textContent = ele.title;
        bookAuthor.textContent = ele.author;
        bookLang.textContent = ele.language;
        bookPages.textContent = ele.pages;
        bookRow.appendChild(bookTitle);
        bookRow.appendChild(bookAuthor);
        bookRow.appendChild(bookLang);
        bookRow.appendChild(bookPages);
        bookTable.appendChild(bookRow);
    } 
}

displayFromMyLibrary(myLibrary);