import "./FilterList.scss";

const FilterList = ({ label, handleClick, beerFilter }) => {
  return (
    <div>
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          type="checkbox"
          id={label}
          onClick={handleClick}
          value={beerFilter}
        />
      </div>
    </div>
  );
};

export default FilterList;

// High ABV (&gt;6.0%)
// Classic Range
// Acidic (ph &lt;4 )
