import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1> 404 - 아무것도 없네요! </h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
