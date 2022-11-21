import React from 'react';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className='profile'>
      <img 
        className='photo'
        src={image} 
        alt='avatar' 
      />
      { // isNew가 true인 경우에만 이 UI 요소를 보여줘
        isNew && <span className='new'>New</span>
      }
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

