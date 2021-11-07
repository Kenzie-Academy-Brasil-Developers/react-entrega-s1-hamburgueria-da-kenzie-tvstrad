import Product from "../Product";

const MenuContainer = ({
  products,
  handleClick,
  currentSale,
  handleCart,
  showProducts,
  userInput,
  setUserInput,
  filteredProducts,
}) => {
  const mapProducts = products.map((product) => {
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
      <div className="Cart__products" key={product.id + 10}>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <button className="btn" onClick={() => handleCart(product.id)}>
          {" "}
          Remove
        </button>
      </div>
    );
  });
  const searched = filteredProducts.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
        handleClick={handleClick}
        currentSale={currentSale}
      />
    );
  });
  return (
    <div className="MenuContainer">
      <h1>Menu</h1>

      <div className="Menu">{mapProducts}</div>
      <div className="Search">
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button className="btn" onClick={() => showProducts(userInput)}>
          Filter
        </button>
      </div>
      <div>{searched}</div>
      <div className="CartContainer">
        <h3>Shopping Cart</h3>
        <div className="Cart">{cartProducts}</div>
      </div>
    </div>
  );
};

export default MenuContainer;
