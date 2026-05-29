let bookContainer = document.querySelector(".book-container");
let addBook = document.querySelector(".add-book");
let form = document.querySelector(".form");
let modal = document.querySelector(".modal");
let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

function addBookstoLibrary(title, author, pages) {
    let book = new Book(title, author, pages);
    library.push(book);
}



function showTable() {
    bookContainer.innerHTML = '';
    library.forEach(book => bookContainer.appendChild(createBook(book)));
}

addBook.addEventListener("click", () => {
    modal.classList.toggle("visible");
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let book = e.target;
    addBookstoLibrary(book.title.value, book.author.value, book.pages.value);
    modal.classList.toggle("visible");
    showTable();
    form.reset();
})

function removeBtn(id) {
    library = library.filter(item => item.id !== id);
    showTable();
}

function createBook(book) {
    const div = document.createElement("div");
    div.classList.add("library-card");
    div.dataset.id = book.id;
    div.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
        <button class="btn remove">X</button>
        <button class="btn2 read">${book.isRead ? "Read" : "Unread"}</button>
    `;
    div.querySelector(".remove").addEventListener("click", () => removeBtn(book.id));
    div.querySelector(".read").addEventListener("click", () => {
        book.toggleRead();
        showTable();
    });
    return div;
}


addBookstoLibrary("lord of the rings", "juan", 1673);
addBookstoLibrary("lord of the flies", "carlos", 345);
addBookstoLibrary("Harry Potter", "david", 328);

showTable();

