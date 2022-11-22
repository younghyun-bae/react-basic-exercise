import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <span className='number'>{count}</span>
      <button
        className='button'
        onClick={() => {
          // 여러 번 혹은 이전 상태값 토대로 업데이트해야할 때 외부값 의존X
          // prevState콜백함수 형태로 하는 것이 안전
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Add +
      </button>
    </div>
  );
}

