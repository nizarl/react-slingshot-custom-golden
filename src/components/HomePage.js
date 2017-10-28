import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page-top">
  
      <ol>
        <li>Review the <Link to="/fuel-savings">404 page</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
