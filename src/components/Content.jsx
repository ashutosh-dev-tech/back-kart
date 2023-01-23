import react, { useState } from "react";
import { products } from "../constants";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const getDefaultPayload = (products) => {
  const payload = {};
  products.forEach((curProduct) => {
    payload[curProduct.label] = 0;
  });

  return payload;
};

const Content = () => {
  const [payload, setPayload] = useState(getDefaultPayload(products));

  const updateCart = (itemLabel, type) => {
    const newPayload = { ...payload };

    if (type === -1) {
      newPayload[itemLabel] = Math.max(0, newPayload[itemLabel] - 1);
    } else {
      newPayload[itemLabel] = newPayload[itemLabel] + 1;
    }
    console.log({ newPayload });
    setPayload(newPayload);
  };

  return (
    <div className="content">
      <h2>New Products</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            product={product}
            updateCart={updateCart}
            count={payload[product.label]}
          />
        ))}
      </div>
      <Link className="cart-btn" to="/myCart" state={{ payload }}>
        Go to Cart
      </Link>
    </div>
  );
};

export default Content;
