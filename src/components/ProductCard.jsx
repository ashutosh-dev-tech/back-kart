import react from "react";

const ProductCard = ({ product, updateCart, count }) => {
  return (
    <div className="product">
      <img src={product.imageUrl} width={150} height={120} alt="product" />
      <p className="product-name">{product.desc}</p>
      <div className="price">{product.price}</div>
      <div className="card-controls">
        <div
          className="add"
          onClick={() => {
            updateCart(product.label, 1);
          }}
        >
          +
        </div>
        <div>{count || 0}</div>
        <div
          className="remove"
          onClick={() => {
            updateCart(product.label, -1);
          }}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
