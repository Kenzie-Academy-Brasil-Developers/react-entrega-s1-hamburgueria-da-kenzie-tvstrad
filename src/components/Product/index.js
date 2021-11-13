import React from "react";
import "./style.css";
const Product = ({ product, handleClick, currentSale }) => {
  return (
    <div className="productContainer">
      <div className="product__img">
        <img src={product.img} alt={`Imagem de um ${product.name}`} />
      </div>

      <div className="product__info">
        <h3 className="product__info">{product.name}</h3>
        <p className="product__info">{product.category}</p>
        <p className="product_price">R$ {product.price.toFixed(2)}</p>
        <button className="btn" onClick={() => handleClick(product.id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
