document.addEventListener('DOMContentLoaded', () => {
  const bookList = document.getElementById('book-list');
  const searchBar = document.getElementById('search-bar');
  const addBookForm = document.getElementById('add-book-form');
  
  let books = JSON.parse(localStorage.getItem('books')) || [];

  const displayBooks = (booksToDisplay) => {
      bookList.innerHTML = '';
      booksToDisplay.forEach((book, index) => {
          const bookItem = document.createElement('li');
          bookItem.innerHTML = `
              <strong>${book.title}</strong> by ${book.author} <br>
              Category: ${book.category} <br>
              <button onclick="deleteBook(${index})">Delete</button>
          `;
          bookList.appendChild(bookItem);
      });
  };

  const addBook = (title, author, category) => {
      books.push({ title, author, category });
      localStorage.setItem('books', JSON.stringify(books));
      displayBooks(books);
  };

  const deleteBook = (index) => {
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
      displayBooks(books);
  };

  window.deleteBook = deleteBook;

  addBookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('book-title').value;
      const author = document.getElementById('book-author').value;
      const category = document.getElementById('book-category').value;
      addBook(title, author, category);
      addBookForm.reset();
  });

  searchBar.addEventListener('keyup', (e) => {
      const searchString = e.target.value.toLowerCase();
      const filteredBooks = books.filter(book => 
          book.title.toLowerCase().includes(searchString) || 
          book.author.toLowerCase().includes(searchString) || 
          book.category.toLowerCase().includes(searchString)
      );
      displayBooks(filteredBooks);
  });

  displayBooks(books);
});

