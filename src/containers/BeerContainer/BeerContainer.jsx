import "./BeerContainer.scss";
import BeerTile from "../../components/BeerTile/BeerTile";

const BeerContainer = (props) => {
  const { beers } = props;
  //   const [searchTerm, setSearchTerm] = useState("");

  //   const filteredBeers = beers.filter((beer) => {
  //     const lowerCaseBeer = beer.name.toLowerCase();
  //     return lowerCaseBeer.includes(searchTerm);
  //   });

  //   const handleInput = (event) => {
  //     const userInput = event.target.value;
  //     // console.log(userInput);
  //     setSearchTerm(userInput);
  //   };

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
