import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditBookForm from '../components/EditBookForm';

function BookList({ user }) {
  const [books, setBooks] = useState([]);
  const [isOnEdit, setIsOnEdit] = useState(false);

  useEffect(() => {
    fetch('/api/books')
      .then(r => r.json())
      .then(booksArr => {
        console.log(booksArr);
        setBooks(booksArr);
      });
  }, []);

  function handleEditClick() {
    setIsOnEdit(!isOnEdit);
  }

  function handleDelete(id) {
    fetch(`/api/books/${id}`, { method: "DELETE" })
      .then(r => r.json())
  }

  if (user.books) {
    const displayBooks = books.map(book => (
      <article key={book.id} className="book">
        {
          isOnEdit
          ? <EditBookForm isOnEdit={isOnEdit} 
              setIsOnEdit={setIsOnEdit} book={book} />
          : <>
              <h3>{book.title}</h3>
              <h4> by {book.author}</h4>
              <p>{book.description}</p>
              <button style={{backgroundColor: "green", 
                color: "cornsilk", marginRight: 10}}
                onClick={handleEditClick}
              >
                edit
              </button>
              <button style={{backgroundColor: "red", 
                color: "cornsilk"}}
                onClick={handleDelete(book.id)}
              >
                delete
              </button>
            </>
        }
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
        <Link to="/new">Add Book</Link>
      </div>
    );
  }

  return (
    <></>
  );
}

export default BookList;
