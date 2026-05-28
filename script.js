let bookContainer = document.querySelector(".book-container");
let addBook = document.querySelector(".add-book");
let form = document.querySelector(".form");
let modal = document.querySelector(".modal");
let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookstoLibrary(title, author, pages) {
    let book = new Book(title, author, pages);
    library.push(book);
}

function showTable() {
    bookContainer.innerHTML = '';
    library.forEach(book => {

         const div = document.createElement("div");
         const title = document.createElement("h2");
         const author = document.createElement("p");
         const pages = document.createElement("p");
         const id = document.createElement("p");

         div.classList.add("library-card");
         title.classList.add("title");
         author.classList.add("author");
         pages.classList.add("pages");
         id.classList.add("id");

         title.textContent = `Title : ${book.title}`;
         author.textContent = `Author : ${book.author}`;
         pages.textContent = `Number of Pages : ${book.pages}`;
         id.textContent = `Book ID : ${book.id}`;

         div.appendChild(title);
         div.appendChild(author);
         div.appendChild(pages);
         div.appendChild(id);
         bookContainer.appendChild(div);

    });
}

addBook.addEventListener("click", () => {
    modal.classList.toggle("visible");
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let book = e.target;
    addBookstoLibrary(book.title.value, book.author.value, book.pages.value);
    showTable();
    modal.classList.toggle("visible");
})


addBookstoLibrary("lord of the rings", "juan", 1673);
addBookstoLibrary("lord of the flies", "carlos", 345);
addBookstoLibrary("Harry Potter", "david", 328);

showTable();

