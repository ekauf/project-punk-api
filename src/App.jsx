import "./App.scss";
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
      <h1>Beers</h1>
      <main>{beerTileJsx}</main>
    </div>
  );
};

export default App;
