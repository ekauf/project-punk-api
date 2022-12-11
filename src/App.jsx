import "./App.scss";
import SideNav from "./components/SideNav/SideNav";
import BeerTiles from "./components/BeerTiles/BeerTiles";
import beersArr from "./data/beers";

const App = (props) => {
  const beerTileJsx = beersArr.map((props) => {
    return (
      <BeerTiles
        key={props.id}
        image={props.image_url}
        name={props.name}
        description={props.description}
      />
    );
  });

  return (
    <div>
      <SideNav />
      <h1 className="page-heading">Beers</h1>
      <main className="tile-container">{beerTileJsx}</main>
    </div>
  );
};

export default App;
