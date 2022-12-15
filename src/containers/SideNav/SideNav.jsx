// import "./SideNav.scss";
// import { useState } from "react";
// import Searchbar from "../../components/Searchbar/Searchbar";

// const SideNav = (props) => {
//   const { beers, label } = props;
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredBeers = beers.filter((beer) => {
//     const lowerCaseBeer = beer.name.toLowerCase();
//     return lowerCaseBeer.includes(searchTerm);
//   });

//   const handleInput = (event) => {
//     const userInput = event.target.value;
//     setSearchTerm(userInput);
//   };

//   return (
//     <div className="side-nav">
//       <Searchbar
//         label={"Search Beer: "}
//         searchTerm={searchTerm}
//         handleInput={handleInput}
//       />
//     </div>
//   );
// };

// export default SideNav;
