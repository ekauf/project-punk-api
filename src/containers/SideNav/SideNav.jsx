import "./SideNav.scss";
import Searchbar from "../../components/Searchbar/Searchbar";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav__content">
        <Searchbar label="Beers" />
      </div>
    </div>
  );
};

export default SideNav;
