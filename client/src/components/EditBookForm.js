import { useState } from 'react';

function EditBookForm() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch('api/books/:id', {
      method: "PATCH",
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
        r.json().then(book => console.log(book));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form edit">
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
        id="title"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        rows="10"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default EditBookForm
