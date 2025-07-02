"use strict";

const Book = function (title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.booksArr = [];

const booksArr = Book.prototype.booksArr;

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

const body = document.querySelector('body');

for (const element of booksArr) {
    const div = document.createElement('div');
    div.setAttribute('style', 'border: 1px solid blue; margin: 10px; padding: 10px; width: fit-content;')
    body.appendChild(div);
    for (const property in element) {
        if (booksArr[0].hasOwnProperty(property) && property !== 'id') {
            const paragraph = document.createElement('p');
            paragraph.textContent = `${property}: ${element[property]}`;
            div.appendChild(paragraph)
        }
    }
}