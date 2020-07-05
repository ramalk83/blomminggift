import React from 'react';
import Hero from './components/Hero'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen1';
import CakeScreen from './screens/HomeScreen3';
import FlowerScreen from './screens/HomeScreen2';
import ProductScreen from './screens/ProductScreen1';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
//import ProductScreen1 from './screens/ProductsScreen1';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import Navbar from "./components/Navbar";

function App() {



  
  return (
    <BrowserRouter>
    
      
       
       <Navbar/>
        <main className="main">
          <div className="content">
          
            <Route path="/flowers" component={FlowerScreen} />
            <Route path="/cakes" component={CakeScreen} />
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />


          </div>

        </main>
        <footer className="footer">
          All right reserved @ Blooming Gift.
    </footer>
      
    </BrowserRouter>
  );
}

export default App;
