import React from 'react';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src="https://media.tenor.com/WqGTNFmFqjkAAAAM/saquontroll-saquonjudge26.gif" // Replace with your desired image URL
        alt=""
        className="center animated bounceIn" // Added animation classes
      />
      <div className='text-center fs-1 fw-bold'>Error 404</div>
      <div className='text-center fs-4 fw-bold text-muted'>Please Refresh The Page !</div>
      
    </div>
  );
};

export default NotFound;
