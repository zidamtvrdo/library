"use strict";

const Book = function (title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.booksArr = [];

Book.prototype.addBook = function () {
    this.booksArr.push(this);
}

Book.prototype.removeBook = function () {
    this.booksArr.splice(this.booksArr.indexOf(this), 1);
}

const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 323);
const book2 = new Book('The Hunger Games', 'Suzzane Collins', 374);

book1.addBook();
book2.addBook();

// const body = document.querySelector('body');

// for (const element of Book.prototype.booksArr) {
//     const paragraph = document.createElement('p');
//     paragraph.style.backgroundColor = 'blue';
//     paragraph.textContent += JSON.stringify(element);
//     body.appendChild(paragraph);
// }
