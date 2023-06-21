import "./SearchAndFilter.css"

export function SearchAndFilter(props) {
    return (
      <div className="searchAndFilter">
        <div className="content">
            <div className="row">
                <div className="searchBar">
                    <input type="text" name="search" placeholder="Search"/>
                    <i className="material-icons">search</i>
                </div>
                <div className="links">
                    <span className="help">
                        <i className="material-icons">help</i>
                        "Help"
                    </span>
                </div>
            </div>
        </div>
      </div>
        
      
    )
  }
  
  export default SearchAndFilter