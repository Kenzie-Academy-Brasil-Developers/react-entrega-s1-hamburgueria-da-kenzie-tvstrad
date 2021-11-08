import React from "react";
import "./style.css";
const Product = ({ product, handleClick, currentSale }) => {
  return (
    <div className="productContainer">
      <div className="product__img">
        <img src={product.img} alt={`Imagem de um ${product.name}`} />
      </div>

      <div className="product__info">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>R$ {product.price.toFixed(2)}</p>
        <button
          className="btn"
          onClick={() =>
            currentSale.includes(product)
              ? alert("This item has alredy been added to cart.")
              : handleClick(product.id)
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
