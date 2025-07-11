let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Bitte füllen Sie alle Felder korrekt aus.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => 
        `
            <h1>Buchnummer: ${index + 1}</h1>
            <p><strong>Buchtitel: </strong>${book.name}</p>
            <p><strong>Autor: </strong>${book.authorName}</p>
            <p><strong>Beschreibung: </strong>${book.bookDescription}</p>
            <p><strong>Anzahl der Seiten:</strong> ${book.pagesNumber} Seite(n)</p>
            <button onclick="editbook(${index})">Bearbeiten</button>
            <button onclick="deleteBook(${index})">löschen</button>
        `
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1);
    showbooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function deleteBook(index){
    books.splice(index,1);
    showbooks();
}