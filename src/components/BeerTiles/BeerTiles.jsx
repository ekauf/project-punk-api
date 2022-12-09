import "./BeerTiles.scss";

const BeerTiles = ({ key, image, name, description }) => {
  return (
    <div className="tile">
      <img className="tile__image" src={image} alt={name} />
      <div className="tile__content">
        <h3 className="tile__title">{name}</h3>
        <p className="tile__text">{description}</p>
      </div>
    </div>
  );
};

export default BeerTiles;
