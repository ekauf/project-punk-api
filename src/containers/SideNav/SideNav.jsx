import "./SideNav.scss";
import { useState } from "react";

const SideNav = (props) => {
  const { beers } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBeers = beers.filter((beer) => {
    const lowerCaseBeer = beer.name.toLowerCase();
    return lowerCaseBeer.includes(searchTerm);
  });

  const handleInput = (event) => {
    const userInput = event.target.value;
    // console.log(userInput);
    setSearchTerm(userInput);
  };

  return (
    <div className="side-nav">
      <div className="side-nav__content">
        <label htmlFor="beers">Search Beer: </label>
        <input onInput={handleInput} id="beers" type="text" />
        <p>{searchTerm}</p>
      </div>
    </div>
  );
};

export default SideNav;
