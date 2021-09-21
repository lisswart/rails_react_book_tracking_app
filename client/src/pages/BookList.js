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

  if (user.books) {
    const displayBooks = books.map(book => (
      <article key={book.id} className="book">
        <h3>{book.title}</h3>
        <h4> by {book.author}</h4>
        <p>{book.description}</p>
        <button style={{backgroundColor: "green", color: "cornsilk", marginRight: 10}}>edit</button>
        <button style={{backgroundColor: "red", color: "cornsilk"}}>delete</button>
      </article>
    ));
    return (
      <div className="booklist-wrapper">
        <div className="booklist">
          {
            user.books
            ? displayBooks
            : <></>
          }
        </div>
        <Link to="/new">Add New Book</Link>
      </div>
    );
  }
  return (
    <></>
  );
}

export default BookList;
