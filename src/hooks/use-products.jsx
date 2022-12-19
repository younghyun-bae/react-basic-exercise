import { useEffect, useState } from 'react';

export default function useProducts({salesOnly}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
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
  }, [salesOnly])

  return [loading, error, products];
}