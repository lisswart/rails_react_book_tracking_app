import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';
import NavBar from './NavBar';
import BookList from '../pages/BookList';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/me')
      .then(r => {
        if (r.ok) {
          r.json().then(userObj => setUser(userObj));
        }
      });
  }, []);

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('/api/users')
  //     .then(r => r.json())
  //     .then(usersArr => {
  //       console.log(usersArr);
  //       setUsers(usersArr);
  //     })
  // }, []);

  // const displayUsers = users.map(user => (
  //   <article key={user.id}>
  //     {user.firstname} {user.lastname}
  //     <ul>
  //       {user.books.map(book => (
  //         <li key={book.id}>
  //           {book.title},  {book.author}
  //           <p>{book.description}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </article>
  // ));

  // if (!user) return <Login onLogin={setUser} />;
  
  return (
    <div className="App">
      {/* {displayUsers} */}
      <NavBar setUser={setUser} />
      <Switch>
        <Route path="/">
          <BookList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
