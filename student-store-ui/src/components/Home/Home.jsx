import "./Home.css"
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'

export function Home(props) {
    return (
        <div className="home">
            <div className="product-grid" id="Buy">
                <div className="content">
                    <h2>Best Selling Products</h2>
                    <HomePage searchText={props.searchText} filterText={props.filterText}/>
                </div>
            </div>
        </div>
      
    )
  }

  const HomePage = (props) => {
    const [products, setProducts] = useState([]);
    const [searchDisplay, setSearchDisplay] = useState([]);
    const [filterDisplay, setFilterDisplay] = useState([]);
    
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://codepath-store-api.herokuapp.com/store'); 
        console.log(response)
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    
    useEffect(() => {
      if (props.filterText === "all") {
        setFilterDisplay(products);
      } else {
        const newDisplay = products.filter((item) => {          
          return item.category === props.filterText;
        })
        setFilterDisplay(newDisplay);
      }
    }, [props.filterText, products])
    
    useEffect(() => {
      if (props.searchText === "") {
        setSearchDisplay(filterDisplay);
      } else {
        const newDisplay = filterDisplay.filter((item) => {          
          return item.name.toLowerCase().includes(props.searchText);
        })
        setSearchDisplay(newDisplay);
      }
    }, [props.searchText, filterDisplay])

    useEffect(() => {
        console.log(filterDisplay)
    }, [filterDisplay])
  
    return (
      <div className="grid-container">
        {searchDisplay.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  
  
  export default Home