import "./App.scss";
import SideNav from "./containers/SideNav/SideNav";
import BeerTiles from "./components/BeerTiles/BeerTiles";
import beersArr from "./data/beers";

const App = (props) => {
  const beerTileJsx = beersArr.map(({ id, image_url, name, description }) => {
    return (
      <BeerTiles
        key={id}
        image={image_url}
        name={name}
        description={description}
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
