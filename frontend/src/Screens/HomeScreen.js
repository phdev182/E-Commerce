import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function HomeScreen (props) {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      const {data} = await axios.get("/api/products");
      setProduct(data);
      }
      fetchData();
    return () => {
      //
    };
  }, [])

  return <ul className="products">
  {
    products.map(product =>
      <li key={product._id}>
      <div className="product">
      <Link to={'/product/' + product._id}>
        <img className="product-image" src={product.image} alt="product 1"></img></Link>
        
          <div className="product-name">
            <Link to={'/product/' + product._id}>{product.name}</Link>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">{product.price}</div>
          <div className="product-rating">{product.reting} Stars ({product.numReviews})</div>
      </div>
    </li>)
  }
</ul>
}
export default HomeScreen;