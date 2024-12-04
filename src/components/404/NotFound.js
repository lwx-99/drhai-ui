import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => (
  <div className="not-found">
    <h2>404</h2>
    <p>Page Not Found</p>
    <Link to="/" className="link-home">
      Go Home
    </Link>
  </div>
);

export default NotFound;