import React from 'react'
import { Link } from 'react-router-dom';

function NavBar({ setUser, user }) {
  
  function handleLogoutClick() {
    fetch('/api/logout', { method: "DELETE" })
      .then(r => {
        if (r.ok) {
          setUser(null);
        }
      });
  }

  return (
    <div className="header">
      <h1>
        <Link to="/">Bookshelf</Link>
      </h1>
      <h5>Welcome, {user.username}</h5>
      <nav className="nav">
        <Link to="/new">
          Add New Book
        </Link>
        <button onClick={handleLogoutClick}>
          Logout
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
