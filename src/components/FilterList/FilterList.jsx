import "./FilterList.scss";

const FilterList = ({ label, handleClick, beerFilter }) => {
  return (
    <div className="filter-list">
      <label htmlFor={label}>{label}</label>
      <input
        className="filter-list__input"
        type="checkbox"
        id={label}
        onClick={handleClick}
        value={beerFilter}
      />
    </div>
  );
};

export default FilterList;

// High ABV (&gt;6.0%)
// Classic Range
// Acidic (ph &lt;4 )
