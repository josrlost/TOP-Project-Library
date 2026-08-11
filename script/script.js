const myLibrary = [];

function Book(title, author, pages, language, uid) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.language = language,
    this.uid = crypto.randomUUID();
}

function addToMyLibrary(title, author, pages, language) {
    let book = new Book(title, author, pages, language);
    myLibrary.push(book);
}

addToMyLibrary("The Silmarillion", "J. R. R. Tolkien", "480 pages", "EN`");
addToMyLibrary("2666", "Roberto Bolaño", "1136 pages", "ES");
addToMyLibrary("Paradiso", "Jose Lezama Lima", "466 pages", "ES")
console.log(myLibrary);