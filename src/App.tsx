import "./App.css";
import ItemCard from "./Components/ItemCard";
import { products } from "./data/data";

function App() {
  return (
    <>
      <ItemCard {...products[0]} />
    </>
  );
}

export default App;
