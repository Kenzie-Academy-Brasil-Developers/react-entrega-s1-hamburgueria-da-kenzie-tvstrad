import React from "react";
import "./style.css";

const Cart = ({ product, handleCart }) => {
  return (
    <div className="cartContainer" key={product.id + 10}>
      <img
        className="cart__img"
        src={product.img}
        alt={`Imagem de um ${product.name}`}
      />
      <div className="cartContainer__info">
        <h3 className="cartContainer__info">{product.name}</h3>
        <p className="cartContainer__info">{product.category}</p>
      </div>
      <button className="removeBtn" onClick={() => handleCart(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default Cart;
