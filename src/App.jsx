import "./App.scss";
// import SideNav from "./containers/SideNav/SideNav";
import { useEffect, useState } from "react";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import Searchbar from "./components/Searchbar/Searchbar";
// import getBeers from "./data/beersApi";

const App = (props) => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getBeers = async () => {
    const fetchArray = [];

    for (let index = 1; index <= 5; index++) {
      const url = `https://api.punkapi.com/v2/beers?page=${index}&per_page=80`;
      fetchArray.push(fetch(url));
    }
    const responses = await Promise.all(fetchArray);

    const data = await Promise.all(
      responses.map(async (element) => {
        return await element.json();
      })
    );
    setBeers(data.flat());
  };

  useEffect(() => {
    getBeers();
  }, []);

  const filteredBeers = beers.filter((beer) => {
    const lowerCaseBeer = beer.name.toLowerCase();
    return lowerCaseBeer.includes(searchTerm);
  });

  const handleInput = (event) => {
    const userInput = event.target.value;
    setSearchTerm(userInput);
  };

  return (
    <div className="page">
      {/* <h1 className="page-heading">Beers</h1> */}
      {/* <SideNav beers={beers} /> */}

      <Searchbar
        label={"Search Beer: "}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />

      <BeerContainer beers={filteredBeers} />
    </div>
  );
};

export default App;
