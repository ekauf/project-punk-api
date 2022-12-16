import "./App.scss";
import { useEffect, useState } from "react";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import Searchbar from "./components/Searchbar/Searchbar";
import FilterList from "./components/FilterList/FilterList";
import brewdog from "./assets/images/brewdog2.png";

const App = (props) => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abvFilter, setAbvFilter] = useState(false);
  const [acidicFilter, setAcidicFilter] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);

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

  const highAbv = beers.filter((beer) => {
    const highAbvBeer = beer.abv > 6;
    return highAbvBeer === abvFilter;
  });

  const acidic = beers.filter((beer) => {
    const acidicBeer = beer.ph < 4;
    return acidicBeer === acidicFilter;
  });

  const classic = beers.filter((beer) => {
    const classicBeer = beer.first_brewed.slice(-4) > 2009;
    return classicBeer === classicFilter;
  });

  const handleClickAbv = (event) => {
    const userClick = event.target.checked;
    setAbvFilter(userClick);
    console.log(userClick);
  };

  const handleClickAcidic = (event) => {
    const userClick = event.target.checked;
    setAcidicFilter(userClick);
    console.log(userClick);
  };
  const handleClickClassic = (event) => {
    const userClick = event.target.checked;
    setClassicFilter(userClick);
    console.log(userClick);
  };

  const beerFilter = beers.filter((beer) => {
    if (abvFilter === true) {
      return beer.abv > 6;
    } else if (classicFilter === true) {
      return beer.first_brewed.slice(-4) < 2010;
    } else if (acidicFilter === true) {
      return beer.ph < 4;
    } else return beer;
  });

  // new function filter beers -

  // const filterBeers = (beers) => {
  //   let tempArray = [...beerArray];
  // };

  //... if filterOne === true
  // replace tempArray with only the filteredBeers

  // ... if filterTwo === true
  // replace tempArray with only the filteredBeers

  // third time

  // return tempArray
  // }

  const handleInput = (event) => {
    const userInput = event.target.value;
    setSearchTerm(userInput);
  };

  const searchBeers = beerFilter.filter((beer) => {
    const lowerCaseBeer = beer.name.toLowerCase();
    return lowerCaseBeer.includes(searchTerm);
  });

  return (
    <div className="page">
      <div className="side-nav">
        <img className="side-nav__image" src={brewdog} alt="brewdog" />
        <Searchbar searchTerm={searchTerm} handleInput={handleInput} />
        <h3>Filters</h3>
        <FilterList
          label={"High ABV (>6.0%)"}
          handleClick={handleClickAbv}
          beerFilter={abvFilter}
        />
        <FilterList
          label={"Classic Range"}
          handleClick={handleClickClassic}
          beerFilter={classicFilter}
        />
        <FilterList
          label={"Acidic (ph < 4)"}
          handleClick={handleClickAcidic}
          beerFilter={acidicFilter}
        />
      </div>

      <BeerContainer beers={searchBeers} />
    </div>
  );
};

export default App;
