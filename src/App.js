import { useState } from "react";
import "./App.css";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [userInput, setUserInput] = useState([]);

  const showProducts = (input) => {
    setFilteredProducts(products.filter((element) => element.name === input));
  };

  const handleClick = (productId) => {
    const found = products.find((element) => element.id === productId);

    setCurrentSale([...currentSale, found]);
  };

  const handleCart = (productId) => {
    setCurrentSale(
      currentSale.filter((element) => {
        return element.id !== productId;
      })
    );
  };
  return (
    <div className="App">
      <MenuContainer
        products={products}
        handleClick={handleClick}
        showProducts={showProducts}
        currentSale={currentSale}
        handleCart={handleCart}
        userInput={userInput}
        setUserInput={setUserInput}
        filteredProducts={filteredProducts}
      />
      <p className="App__subTotal">
        Subtotal : &nbsp;
        {currentSale
          .reduce((acc, crr) => {
            return acc + crr.price;
          }, 0)
          .toFixed(2)}{" "}
        R$
      </p>
    </div>
  );
}

export default App;
