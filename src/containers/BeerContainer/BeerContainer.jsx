import "./BeerContainer.scss";
import BeerTile from "../../components/BeerTile/BeerTile";

const BeerContainer = (props) => {
  const { beers } = props;

  const beerTileJsx = beers.map((element) => {
    return (
      <BeerTile
        key={element.id}
        name={element.name}
        tagline={element.tagline}
        image={element.image_url}
      />
    );
  });
  return <div className="beer-container">{beerTileJsx}</div>;
};

export default BeerContainer;
