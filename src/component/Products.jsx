import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥 received a data from the network');
        setProducts(data);
      });
    return () => {
      console.log('🧹 clean up')
    }
  }, []) // 한 번만 useEffect 실행시키기 위해 텅 빈 배열 두 번째 인자에 전달

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

