import "./App.scss";
import SideNav from "./containers/SideNav/SideNav";
import BeerTile from "./components/BeerTile/BeerTile";
import { useEffect, useState } from "react";
import BeerContainer from "./containers/BeerContainer/BeerContainer";

const App = (props) => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const url1 = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    const url2 = "https://api.punkapi.com/v2/beers?page=2&per_page=80";
    const url3 = "https://api.punkapi.com/v2/beers?page=3&per_page=80";
    const url4 = "https://api.punkapi.com/v2/beers?page=4&per_page=80";
    const url5 = "https://api.punkapi.com/v2/beers?page=5&per_page=80";

    const responses = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
      fetch(url4),
      fetch(url5),
    ]);
    const data1 = await responses[0].json();
    const data2 = await responses[1].json();
    const data3 = await responses[2].json();
    const data4 = await responses[3].json();
    const data5 = await responses[4].json();

    const allData = { data1, data2, data3, data4, data5 };

    setBeers([...data1, ...data2, ...data3, ...data4, ...data5]);
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
