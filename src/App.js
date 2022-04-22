import "./App.css";
import { useState } from "react";
import CardList from "./components/CardList";

function Stupid(props) {
  return <a href="/">{props.title}</a>;
}
function App() {
  const [products, setProducts] = useState([
    {
      name: "Shoes",
      price: 45,
      id: 2345,
    },
  ]);
  function addProduct() {
    setProducts((oldProducts) => {
      return [...oldProducts, { name: "Shirt", price: 34, id: Math.random() }];
    });
  }

  return (
    <div className="App">
      <button onClick={addProduct}>Add products</button>
      <section>
        <CardList cards={products}></CardList>
      </section>
      <footer>test</footer>
    </div>
  );
}

export default App;
