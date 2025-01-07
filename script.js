let books = [];
const formFields = {
    titleField: document.querySelector(".form-title"),
    authorField: document.querySelector(".form-author"),
    pagesField: document.querySelector(".form-pages"),
    isRead: document.querySelector(".form-is-read-yes"),
};


class Book{
    title;
    author;
    pages;
    isRead;
    bookContainer = null;
    constructor(title = "title unknown", author = "author unknown", pages = "<3", isRead = false){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.bookContainer = null;
    };
    info(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(this.isRead) ? "already read" : "not read yet"}`;
    }
    createbookContainer = function(){
        const bookContainer = document.createElement('div');
        bookContainer.classList.add("book-container");
    
        // Remove button
        const removeBookButton = document.createElement('button');
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.onclick = () => {
            books.splice(books.indexOf(this));
            bookContainer.remove();
        };
        removeBookButton.type = "button";
        removeBookButton.textContent = "Remove";
    
        bookContainer.appendChild(removeBookButton);
    
        // isRead checkbox
        const isReadSpan = document.createElement("span");
        isReadSpan.classList.add("is-read-span");
    
        const isReadCheckbox = document.createElement("input");
        isReadCheckbox.type = "checkbox";
        isReadSpan.textContent = "Was it read?";
    
        isReadCheckbox.onclick = () => {
            console.log("zmieniaj sie")
            this.isRead = isReadCheckbox.checked;
        };
    
        isReadSpan.appendChild(isReadCheckbox);
    
        
        bookContainer.appendChild(isReadSpan);
        // bookDiv
        const book = document.createElement('div');
        book.classList.add("book");
    
        const title = document.createElement('div');
        title.classList.add("title");
        title.textContent = this.title;
        book.appendChild(title);
    
        const divider = document.createElement('div')
        divider.classList.add("divider");
    
        const dividerLine1 = document.createElement('div');
        dividerLine1.classList.add("divider-line");
        const dividerLine2 = document.createElement('div');
        dividerLine2.classList.add("divider-line");
    
        divider.appendChild(dividerLine1);
        divider.appendChild(dividerLine2);
        book.appendChild(divider);
    
    
        const author = document.createElement('div');
        author.classList.add("author");
        author.textContent = this.author;
        book.appendChild(author);
        
        const pages = document.createElement('div');
        pages.classList.add("pages");
        pages.textContent = this.pages;
        book.appendChild(pages);
    
        bookContainer.appendChild(book);
    
        this.bookContainer = bookContainer;
    };
};

class Modal{
    DOMModal;
    closeModalButton;
    saveButton;
    constructor(){
        this.DOMModal = document.querySelector(".book-modal");
        this.closeModalButton = document.querySelector(".close-modal");
        this.saveButton = document.querySelector(".save-book-button");
        this.saveButton.onclick = addBook;
        window.onclick = (event) => {
            if (event.target == this.DOMModal || event.target == this.closeModalButton || event.target == this.saveButton) {
              this.hideBookModal();
            };
        };
        
    };
    showBookModal = () => {
        this.DOMModal.style.display = "flex";
    };
    hideBookModal = () => {
        this.DOMModal.style.display = "none";
    };
    get DOMModal(){
        return this.DOMModal;
    };
}

modal = new Modal();

function renderBooks(){
    books.forEach(book => {
        if(!(book.bookContainer)) book.createbookContainer();
        shelfBooks.appendChild(book.bookContainer);
    });
};

function addBook(){
    let title = formFields.titleField.value;
    let author = formFields.authorField.value;
    let pages = formFields.pagesField.value;
    let isRead = formFields.isRead.checked;
    books.push(new Book(title, author, pages, isRead));
    renderBooks();
}

const shelfBooks = document.querySelector(".shelf-books")

const addButton = document.querySelector(".add-button")
addButton.addEventListener("click", modal.showBookModal);

books = [...Array(5)].map(() => new Book());
renderBooks(books);