import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <nav>
      <ul style={styles.navbar}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" style={styles.link}>
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: '20px',
    backgroundColor: '#333',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  },
};

export default AppBar;
