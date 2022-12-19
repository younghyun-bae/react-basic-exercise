import React, { useEffect, useState } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥 received a data from the network');
        setProducts(data);
      })
      .catch(e=> setError('error!'))
      .finally(() => setLoading(false));
    return () => {
      console.log('🧹 cleaned up')
    }
  }, [checked]) // 한 번만 useEffect 실행시키기 위해 텅 빈 배열 두 번째 인자에 전달

  if(loading) return <p>Loading...</p>;
  if(error) return  <p>{error}</p>;
  return (
    <>
      <input 
        id='checkbox'
        type='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li> // map으로 자식요소 반환해줄 때 고유 key가 필요
        ))}
      </ul>
    </>
  );
}

