import { useState } from 'react';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Product List</h1>
      <ProductForm onAddProduct={addProduct} />
      <ProductTable products={products} />
    </div>
  );
}

export default App;
