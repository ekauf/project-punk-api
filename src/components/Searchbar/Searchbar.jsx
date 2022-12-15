import "./Searchbar.scss";

const Searchbar = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <div>
      <label htmlFor="search-beer"></label>
      <input
        onInput={handleInput}
        id="search-beer"
        value={searchTerm}
        type="text"
        placeholder="Search Beer..."
      />
    </div>
  );
};

export default Searchbar;
