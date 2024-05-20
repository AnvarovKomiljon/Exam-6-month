import { useEffect, useState } from 'react';

function Client() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='p-10'>
      <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-end">Back to Admin</button>
      <h1 className="text-3xl font-bold underline">Products</h1>

      <div className="grid grid-cols-3  gap-3 mt-10">
        {products.map(product => (
          <div className="bg-white p-6 rounded-lg shadow-lg border-[1px] border-blue-500 flex flex-col items-center space-y-4 shadow-blue-400" key={product.id}>
            <img src={product.image} alt={product.title} width={300} height={300} />
            <p className="text-2xl font-bold">Title: {product.title}</p>
            <p className="text-xl font-bold">Subtitle: {product.subtitle}</p>
            <p className="text-xl font-bold">Price: {product.price}</p>
            <p className="text-xl font-bold">Description: {product.description}</p>
            <p className="text-xl font-bold">Size: {product.size}</p>
            <p className="text-xl font-bold">Rate: {product.rate}</p>
            <p className="text-xl font-bold">Color: {product.color}</p>  
          </div>
        ))}
      </div>
    </div>
  );
}

export default Client;
