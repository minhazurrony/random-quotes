import React from 'react';

const Quotes = ({ quote, author }) => {
  return (
    <div className='card-body'>
      <blockquote className='blockquote mb-0'>
        <p>{quote}</p>
        <footer className='blockquote-footer'>{author}</footer>
      </blockquote>
    </div>
  );
};

export default Quotes;
