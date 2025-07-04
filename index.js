"use strict";


function representBooks() {
    for (const element of booksArr) {
        const div = document.createElement('div');
        div.setAttribute('style', 'border: 1px solid blue; margin: 10px; padding: 10px;');
        const booksGrid = document.querySelector('#books');
        booksGrid.appendChild(div);

        for (const property in element) {
            if (booksArr[0].hasOwnProperty(property) && property !== 'id') {
                const paragraph = document.createElement('p');
                paragraph.textContent = `${property}: ${element[property]}`;
                div.appendChild(paragraph)
            }
        }

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        div.appendChild(delBtn);

        delBtn.addEventListener('click', () => {
            booksGrid.removeChild(div);
            element.removeBook();
        })
       
        const readBtn = document.createElement('button');
        readBtn.style.marginLeft= '5px';
        readBtn.textContent = 'Not Read';
        div.appendChild(readBtn);

        readBtn.addEventListener('click', (e) => {
            if (e.target.textContent == 'Read') {
                e.target.textContent = 'Not Read';
            } else {
                e.target.textContent = 'Read';
                e.target.parentNode.read= 'Not Read';
            }
        })
    }
}

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

representBooks();

// add book
const addBook = document.querySelector('#addButton');
const booksGrid = document.querySelector('#books');
const form = document.querySelector('form');

addBook.addEventListener('click', () => {
    booksGrid.insertBefore(form, booksGrid.firstChild);
    form.style.display = 'block';
    form.setAttribute('style', 'display: grid; place-items: center; padding: 20px;')
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');

    const titleValue = titleInput.value;
    const authorValue = authorInput.value;
    const pagesValue = pagesInput.value;

    const newBook = new Book(titleValue, authorValue, pagesValue);
    newBook.addBook();

    e.target.style.display = 'none';


    // create new book card
    const div = document.createElement('div');
    div.setAttribute('style', 'border: 1px solid blue; margin: 10px; padding: 10px;');
    const booksGrid = document.querySelector('#books');
    booksGrid.appendChild(div);

    for (const property in booksArr[booksArr.length - 1]) {
        if (booksArr[0].hasOwnProperty(property) && property !== 'id') {
            const paragraph = document.createElement('p');
            paragraph.textContent = `${property}: ${booksArr[booksArr.length - 1][property]}`;
            div.appendChild(paragraph)
        }
    }

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    div.appendChild(delBtn);

    delBtn.addEventListener('click', () => {
        booksGrid.removeChild(div);
        element.removeBook();
    })
})