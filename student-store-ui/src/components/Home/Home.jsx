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
                    <HomePage/>
                </div>
            </div>
        </div>
      
    )
  }

  const HomePage = () => {
    const [products, setProducts] = useState([]);
  
    
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://codepath-store-api.herokuapp.com/store'); 
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div className="grid-container">
        {products.map((product) => (
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