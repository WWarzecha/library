let books = []

function Book(title = "title unknown", author = "author unknown", pages = "unknown number of ", isRead = false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.bookDiv = null;
};

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${(this.isRead) ? "already read" : "not read yet"}`;
}

Book.prototype.createBookDiv = function(){
    const book = document.createElement('div');
    book.classList.add("book");

    const title = document.createElement('div');
    title.classList.add("title");
    title.textContent = this.title;

    const divider1 = document.createElement('div');
    divider1.classList.add("divider");

    const divider2 = document.createElement('div');
    divider2.classList.add("divider");

    const author = document.createElement('div');
    author.classList.add("author");
    author.textContent = this.author;

    book.appendChild(title);
    book.appendChild(divider1);
    book.appendChild(divider2);
    book.appendChild(author);

    this.bookDiv = book;
};

function renderBooks(books){
    books.forEach(book => {
        if(!(book.bookDiv)) book.createBookDiv();
        shelf.appendChild(book.bookDiv);
    });
}
let shelf = document.querySelector(".shelf")

books = [...Array(5)].map(() => new Book());
// console.log(new Book());
console.log(books);
renderBooks(books);
books[4].bookDiv.remove();