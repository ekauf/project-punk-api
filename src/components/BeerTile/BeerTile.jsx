import "./BeerTile.scss";

const BeerTile = ({ image, name, tagline }) => {
  return (
    <div className="tile">
      <img className="tile__image" src={image} alt={name} />
      <div className="tile__content">
        <h3 className="tile__title">{name}</h3>
        <p className="tile__text">{tagline}</p>
      </div>
    </div>
  );
};

export default BeerTile;
