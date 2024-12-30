let books = [];
const formFields = {
    titleField: document.querySelector(".form-title"),
    authorField: document.querySelector(".form-author"),
    pagesField: document.querySelector(".form-pages"),
    isRead: document.querySelector(".form-is-read-yes"),
};

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

    const divider = document.createElement('div')
    divider.classList.add("divider");

    const dividerLine1 = document.createElement('div');
    dividerLine1.classList.add("divider-line");
    const dividerLine2 = document.createElement('div');
    dividerLine2.classList.add("divider-line");

    divider.appendChild(dividerLine1);
    divider.appendChild(dividerLine2);

    const author = document.createElement('div');
    author.classList.add("author");
    author.textContent = this.author;

    book.appendChild(title);
    book.appendChild(divider);
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
// get data from form
// if submit : change new book info
//           : rerender books

// if cancel : remove book

// clear form

function addBook(){
    let title = formFields.titleField.value;
    let author = formFields.authorField.value;
    let pages = formFields.pagesField.value;
    let isRead = formFields.isRead.checked;
    books.push(new Book(title, author, pages, isRead));
    resetModal();
    renderBooks();
}

function resetModal(){
    formFields.titleField.value;
    formFields.authorField.value;
    formFields.pagesField.value;
    formFields.isRead.checked;
}

const shelf = document.querySelector(".shelf")


const addButton = document.querySelector(".add-button")
addButton.addEventListener("click", showBookModal);

const saveButton = document.querySelector(".save-book-button");
saveButton.onclick = addBook;

const bookModal = document.querySelector(".book-modal");
const closeModalButton = document.querySelector(".close-modal");

window.onclick = function(event) {
    if (event.target == bookModal || event.target == closeModalButton || event.target == saveButton) {
      hideBookModal();
      resetModal();
    };
};



books = [...Array(5)].map(() => new Book());
renderBooks(books);
console.log(formFields)