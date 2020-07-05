import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Hero from '../components/Hero'
import Banner from '../components/Banner'

import { useSelector, useDispatch } from 'react-redux';
import { listProducts4} from '../actions/productActions';


function HomeScreen5() {
  
  const productList1 = useSelector(state => state.productList1);
  const { products1, loading1, error1 } = productList1;
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts4()); 

    return () => {
      //
    };
  }, []);



  return <>
    
      <Title title="Featured Cake package"/>
    

      
    {loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
      
        <ul className="products1">
          {
           products1.map(product1 =>
              <li key={product1._id}>
                <div className="product">
                  <Link to={'/product/' + product1._id}>
                    <img className="product-image" src={product1.image} alt="product" />

                  </Link>
                  <div className="product-name">
                    <Link to={'/product/' + product1._id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product1.brand}</div>
                  <div className="product-price">${product1.price}</div>
                
                </div>
              </li>)
          }
        </ul>
         
        
    }
  </>

}
export default HomeScreen5;