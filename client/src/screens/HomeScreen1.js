import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Cardlayout from '../components/Cardlayout'
import Service from '../components/Service'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts3} from '../actions/productActions';
import Title from '../components/Title';
import About from '../components/About';
import Carousel from 'react-bootstrap/Carousel'

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts3(category));
  

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts3(category, searchKeyword, sortOrder))
  }
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts3(category, searchKeyword, sortOrder))
   
  }

  return <>
      <Hero>
          <Banner title="Blooming Gift" subtitle="Beautiful flowers">
              <Link to="/" class="btn-primary">Flowers</Link>
          </Banner>
      </Hero>
      <Service/>
      <Title title="Featured flower package"/>
    {category &&
      <h2>{category}</h2>}

      
    {loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
      
        <ul className="products1">
          {
           products.map(product =>
              <li key={product._id}>
                <div className="product">
                  <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="product" />

                  </Link>
                  <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">${product.price}</div>
                
                </div>
              </li>)
          }
        </ul>
         
        
    }
 <About/>

  </>

}
export default HomeScreen;