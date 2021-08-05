import "./App.css";
import Cards from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Cards food="Pizza" calory="266" />
        <Cards food="Ice Cream" calory="207" />
        <Cards food="Burger" calory="295" />
        <Cards food="Pasta" calory="131" />
      </div>
    </div>
  );
}

export default App;