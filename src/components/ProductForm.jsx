import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [product, setProduct] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product && date && price) {
      onAddProduct({ product, date, price });
      setProduct("");
      setDate("");
      setPrice("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Product</label>
        <input
          type="text"
          className="form-control"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
