import React from "react";
import Product from "../Product";
import Cart from "../Cart";
import "./style.css";

const MenuContainer = ({
  products,
  handleClick,
  currentSale,
  setCurrentSale,
  handleCart,
  showProducts,
  userInput,
  setUserInput,
  filteredProducts,
}) => {
  const mapProducts = filteredProducts.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
        handleClick={handleClick}
        currentSale={currentSale}
      />
    );
  });
  const cartProducts = currentSale.map((product) => {
    return (
      <Cart key={product.id + 10} product={product} handleCart={handleCart} />
    );
  });
  return (
    <div className="container">
      <header className="header">
        <img className="header__img" src="../images/logo.png" alt="logo" />
        <div className="header__search">
          <input
            type="text"
            placeholder="Search our menu"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <button className="FindBtn" onClick={() => showProducts(userInput)}>
            Search
          </button>
        </div>
      </header>
      <div className="main">
        <div className="productMenu">{mapProducts}</div>
      </div>
      <div className="aside">
        <div className="cart">
          <div className="cart__header">
            <p>Shopping Cart</p>
          </div>

          <div>{cartProducts}</div>

          <div className="cart__footer">
            <p>Total</p>
            <p>
              R$
              {currentSale
                .reduce((acc, crr) => {
                  return acc + crr.price;
                }, 0)
                .toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
