import "./App.scss";
// import SideNav from "./containers/SideNav/SideNav";
import { useEffect, useState } from "react";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
// import SideNav from "./containers/SideNav/SideNav";
import Searchbar from "./components/Searchbar/Searchbar";
import FilterList from "./components/FilterList/FilterList";
// import getBeers from "./data/beersApi";

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
  // console.log(beers);

  // abvFilter, acidicFilter, classicFilter, searchBeers

  // const highAbv = beers.filter((beer) => {
  //   const highAbvBeer = beer.abv > 6;
  //   return highAbvBeer === abvFilter;
  //   // if (lowerCaseBeer.abv > 6) {
  //   //   return lowerCaseBeer === abvFilter;
  //   // }

  // if (beer.abv < 6) {
  //   return beer === abvFilter;
  // }
  // setAbvFilter(beer);
  // console.log(beer);
  // });
  // console.log(highAbv);
  // console.log(beers);

  // const acidic = beers.filter((beer) => {
  //   const acidicBeer = beer.ph < 4;
  //   return acidicBeer === acidicFilter;
  //   // if (beer.ph > 4) {
  //   //   return beer;

  //   // setAcidicFilter(beer);
  //   // console.log(beer);
  // });
  // // console.log(highAbv);

  // const classic = beers.filter((beer) => {
  //   const classicBeer = beer.first_brewed.slice(-4) > 2009;
  //   return classicBeer === classicFilter;

  //   // if (beer.first_brewed.slice(-4) > 2009) {
  //   //   return beer;
  //   // }
  //   //   // setClassicFilter(beer);
  //   //   // console.log(beer);
  // });
  // console.log(classic);

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
    if (acidicFilter === true) {
      return beer.ph < 4;
    } else if (abvFilter === true) {
      return beer.abv > 6;
    } else if (classicFilter === true) {
      return beer.first_brewed.slice(-4) < 2010;
    } else if (acidicFilter === true && abvFilter === true) {
      return beer.ph < 4 && beer.abv > 6;
    } else return beer;
  });

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
      {/* <h1 className="page-heading">Beers</h1> */}
      {/* <SideNav/> */}
      <div className="side-nav">
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
