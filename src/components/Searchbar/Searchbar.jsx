import beersArr from "../../data/beers";
import "./Searchbar.scss";

const Searchbar = (props) => {
  const { label, searchTerm, handleInput } = props;

  const capitalisedLabel = label[0].toUpperCase() + label.slice(1);

  console.log(beersArr);
  return (
    <div className="side-nav">
      <div className="side-nav__content">
        <label className="side-nav__label" htmlFor={label}>
          {capitalisedLabel}
        </label>
        <input
          className="side-nav__input"
          type="text"
          name={label}
          value={searchTerm}
          onInput={handleInput}
        />
      </div>
    </div>
  );
};

export default Searchbar;
