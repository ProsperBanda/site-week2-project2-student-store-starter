import "./SearchAndFilter.css";

export function SearchAndFilter({
  text,
  updateText,
  filterText,
  handleFilterChange,
}) {
  return (
    <div className="searchAndFilter">
      <div className="content">
        <div className="row1">
          <div className="searchBar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={text}
              onChange={(e) => updateText(e.target.value)}
            />
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>
              Help
            </span>
            <div className="cart">
              My Cart
              <i className="material-icons">shopping_cart</i>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu">
            <li className="is-active" onClick={() => handleFilterChange("all")}>
              <button>All Categories</button>
            </li>
            <li
              className="clothing"
              onClick={() => handleFilterChange("clothing")}
            >
              <button>Clothing</button>
            </li>
            <li className="food" onClick={() => handleFilterChange("food")}>
              <button>Food</button>
            </li>
            <li
              className="accessories"
              onClick={() => handleFilterChange("accessories")}
            >
              <button>Accessories</button>
            </li>
            <li className="tech" onClick={() => handleFilterChange("tech")}>
              <button>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilter;
