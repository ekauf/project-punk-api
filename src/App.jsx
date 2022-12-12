import "./App.scss";
import SideNav from "./containers/SideNav/SideNav";
import BeerTile from "./components/BeerTile/BeerTile";
import { useEffect, useState } from "react";
import BeerContainer from "./containers/BeerContainer/BeerContainer";

const App = (props) => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="page">
      {/* <h1 className="page-heading">Beers</h1> */}
      <SideNav />

      <BeerContainer beers={beers} />
    </div>
  );
};

export default App;
