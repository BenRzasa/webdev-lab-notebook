const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

document.addEventListener("DOMContentLoaded", () => {
    fetchData(url);
});

function fetchData(url) {
    fetch(url)
    .then(resp => resp.json())
    .then(json => { renderBooks(json); })

    .catch(error => {
        console.error("Error fetching books:", error);
        app.innerHTML = "<p>Failed to load books</p>";
    });
}

function renderBooks(bookData) {
    const booksArea = document.getElementById("books");

    bookData.map(book => {
        const p = document.createElement("p");
        p.setAttribute("id", "book-item");
        
        p.innerHTML = `
            <strong>${book.name}</strong><br>
            by ${book.authors[0]} <br>
            ${book.released.substring(0, 4)} <br>
            ${book.numberOfPages} pages
        `;
        
        booksArea.appendChild(p);
    });
    
    booksArea.style.textAlign = "center";
}

