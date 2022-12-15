import React from 'react';
import { useState } from 'react';
import './AppXY.css';

export default function AppXY() {

  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 })

  return (
    <div 
      className='container' 
      onPointerMove={(e)=>{
        // 1. mouse pointer
        // setPosition({ x: e.clientX, y: e.clientY });
        // 2. 수평으로만 이동 가능하게?
        // setPosition((prev) => ({ x: e.clientX, y: prev.y }));
        // 3. 여러 객체 값을 압축해서 쓰기? spread syntax
        setPosition((prev) => ({ ...prev, x: e.clientX }));
        // prev: 이전 좌표 값을 의미
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)`}}
      />
    </div>
  );
}

