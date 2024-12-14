function ProductTable({ products }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Product</th>
          <th>Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product, index) => (
            <tr key={index}>
              <td>{product.product}</td>
              <td>{product.date}</td>
              <td>${product.price}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center">
              No products added
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
