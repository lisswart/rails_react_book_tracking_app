import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BookList({ user }) {
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
    <article key={book.id} className="book">
      <h3>{book.title}</h3>
      <h4> by {book.author}</h4>
      <p>{book.description}</p>
      {/* <ul>
        {book.users.map(user => (
          <li key={user.id}>
            {user.username}
          </li>
        ))}
      </ul> */}
    </article>
  ))

  return (
    <div className="booklist-wrapper">
      <div className="booklist">
        {displayBooks}
      </div>
      <Link to="/new">Add New Book</Link>
    </div>
  );
}

export default BookList;
