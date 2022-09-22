import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Navbar/Header";
import Dasboard from "./Components/Dashboard/Dasboard";
import Card from "./Components/Card/Card";
import TotalSale from "./Components/Graph/TotalSale";
import Inventory from "./Components/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Dasboard />
        <div className="sub-body">
          <Card />
          <TotalSale />
          <Inventory />
        </div>
      </div>
    </div>
  );
}

export default App;
