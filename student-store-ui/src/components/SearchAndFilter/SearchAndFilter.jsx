import "./SearchAndFilter.css"

export function SearchAndFilter(props) {
    return (
      <div className="searchAndFilter">
        <div className="content">
            <div className="row1">
                <div className="searchBar">
                    <input type="text" name="search" placeholder="Search"/>
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
                    <li className="is-active">
                        <button>All Categories</button>
                    </li>
                    <li className="clothing"> 
                        <button>Clothing</button>
                    </li>
                    <li className="food">
                        <button>Food</button>
                    </li>
                    <li className="accessories">
                        <button>Accessories</button>
                    </li>
                    <li className="tech">
                        <button>Tech</button>
                    </li>
                </ul>
            </div>
        </div>
      </div>
        
      
    )
  }
  
  export default SearchAndFilter