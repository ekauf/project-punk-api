import "./Searchbar.scss";

const Searchbar = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        onInput={handleInput}
        name={label}
        value={searchTerm}
        type="text"
      />
    </div>
  );
};

export default Searchbar;
