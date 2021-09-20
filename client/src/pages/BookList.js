import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then(r => r.json())
      .then(booksArr => {
        console.log(booksArr);
        setBooks(booksArr);
      });
  }, []);

  const displayBooks = books.map(book => (
    <article key={book.id}>
      {book.title}, by {book.author}
      <ul>
        {book.users.map(user => (
          <li key={user.id}>
            {user.username}
          </li>
        ))}
      </ul>
    </article>
  ))

  return (
    <div>
      {displayBooks}
      <Link to="/new"><button>Add another book</button></Link>
    </div>
  );
}

export default BookList;
