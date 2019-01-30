import React from 'react';

const Quotes = ({ quote, author }) => {
  return (
    <div>
      <blockquote>
        <p>{quote}</p>
        <footer>- {author}</footer>
      </blockquote>
    </div>
  );
};

export default Quotes;
