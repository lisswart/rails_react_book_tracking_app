import { useEffect, useState } from 'react';
import '../styles/App.css';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch('/api/me')
  //     .then(r => {
  //       if (r.ok) {
  //         r.json().then(userObj => setUser(userObj));
  //       }
  //     });
  // }, []);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(usersArr => {
        console.log(usersArr);
        setUsers(usersArr);
      })
  }, []);

  const displayUsers = users.map(user => (
    <article key={user.id}>
      {user.firstname} {user.lastname}
      <ul>
        {user.books.map(book => (
          <li key={book.id}>
            {book.title},  {book.author}
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </article>
  ))
  
  return (
    <div className="App">
      {displayUsers}
    </div>
  );
}

export default App;
