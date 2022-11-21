import React from 'react';

export default function Avatar({image, isNew}) {
  return (
    <div className='avatar'>
      <img 
        className='photo'
        src={image} 
        alt='avatar' 
      />
      { // isNew가 true인 경우에만 이 UI 요소를 보여줘
        isNew && <span className='new'>New</span>
      }    
    </div>
  );
}

