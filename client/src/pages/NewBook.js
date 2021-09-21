import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch('/api/books', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        author,
        description
      })
    }).then(r => {
      setIsLoading(false);
      if (r.ok) {
        // history.push("/");
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <div className="new-book">
        <h2 style={{color: "cornsilk"}}>Add Book</h2>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            rows="10"
            onChange={e => setDescription(e.target.value)}
          />
          <button type="submit">
            {
              isLoading
              ? "Loading..."
              : "Add Book"
            }
          </button>
          {/* {
            errors.map(err => (
              <p key={err}>{err}</p>
            ))
          } */}
        </form>
      </div>
      <div>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewBook;
