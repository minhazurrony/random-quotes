import React from 'react';

const SocialButton = () => {
  return (
    <div className='btn-group'>
      <button type='button' className='btn btn-info'>
        <i className='fa fa-facebook' />
      </button>

      <button type='button' className='btn btn-info'>
        <i className='fa fa-twitter' />
      </button>
    </div>
  );
};

export default SocialButton;
