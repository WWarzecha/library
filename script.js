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
};

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

function renderBooks(){
    books.forEach(book => {
        if(!(book.bookDiv)) book.createBookDiv();
        shelf.appendChild(book.bookDiv);
    });
};

function showBookModal(){
    bookModal.style.display = "flex";
}

function hideBookModal(){
    bookModal.style.display = "none";
}


// create book
// open form

// if submit : change new book info
//           : rerender books

// if cancel : remove book

// clear form

function addBook(){
    let book = new Book();
    books.push(book);
    showBookModal();

    // renderBooks();
    console.log("book added");
};



let shelf = document.querySelector(".shelf")

books = [...Array(5)].map(() => new Book());
renderBooks(books);

let addButton = document.querySelector(".add-button")
addButton.addEventListener("click", addBook);

let bookModal = document.querySelector(".book-modal");

window.onclick = function(event) {
    if (event.target == bookModal) {
      hideBookModal();
    };
};