const Product = ({ product, handleClick, currentSale }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <button
        className="btn"
        onClick={() =>
          currentSale.includes(product)
            ? alert("This item has alredy been added to cart.")
            : handleClick(product.id)
        }
      >
        {" "}
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
