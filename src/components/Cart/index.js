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
      <div>
        <p>{product.name}</p>
        <p>{product.category}</p>
      </div>
      <button className="removeBtn" onClick={() => handleCart(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default Cart;
