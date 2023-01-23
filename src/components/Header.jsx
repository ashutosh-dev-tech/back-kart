import react from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="option">
        <img
          src="https://iambaker.net/wp-content/uploads/2018/04/flowers-7.jpg"
          width={100}
          height={100}
          alt="cupcake-product"
        />
        <div className="options-info">
          <div className="options-heading">Products</div>
          <p>Checkout our wide range of products</p>
        </div>
      </div>

      <div className="option">
        <img
          src="https://www.gearfuse.com/wp-content/uploads/2013/06/Cookie-Monster-Cupcake.jpg"
          width={100}
          height={100}
          alt="cupcake-calsses"
        />
        <div className="options-info">
          <div className="options-heading">Cake classes</div>
          <p>chef's cake making classes</p>
        </div>
      </div>

      <div className="option">
        <img
          src="https://cdn.shopify.com/s/files/1/0769/7473/products/b9_1400x.jpg?v=1464281818"
          width={100}
          height={100}
          alt="cupcake-calsses"
        />
        <div className="options-info">
          <div className="options-heading">Recepies</div>
          <p>Checkout our wide range of products</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
