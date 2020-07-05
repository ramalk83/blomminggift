import React, { useState } from 'react';
//import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function Navbar(){
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const [isOpen, setisOpen] = useState(false);
    const [isOpen1, setisOpen1] = useState(false);

        return (
        <nav className="navbar">
            <div className ="nav-center">
               <div className ="nav-header">
              <h2 style={{color: "purple"}}>Blomming Gift</h2>
                <button type="button" className="nav-btn" onClick={() => setisOpen(!isOpen)}>
                    <FaAlignRight className="nav-icon"></FaAlignRight>
                </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"} >
                    <li>
                        <Link to="/" onClick={() => setisOpen(!isOpen)}>Home</Link>                        
                    </li>
                    <li>
                        <Link to="/flowers" onClick={() => setisOpen(!isOpen)}>Flowers</Link>                        
                    </li>
                    <li>
                        <Link to="/cakes" onClick={() => setisOpen(!isOpen)}>Cakes</Link>                        
                  </li>
                  <li>        
                  <Link to="/cart" onClick={() => setisOpen(!isOpen)}>Cart</Link>
                  </li>
            <li>
            {
              userInfo ? <Link to="/profile" onClick={() => setisOpen(!isOpen)}>{userInfo.name}</Link> : <Link to="/signin" onClick={() => setisOpen(!isOpen)}>Sign In</Link>
            }</li>
            <li >
            {userInfo && userInfo.isAdmin && (
              <>
                <Link href="#" onClick={() => setisOpen1(!isOpen1)} >Admin</Link>
            
                <ul  className={isOpen1 ? "show-nav1" : "hide-nav"}>
                  <li>
                    <Link to="/orders" onClick={() => setisOpen1(!isOpen1) && setisOpen(!isOpen)}>Orders</Link>
                    <Link to="/products" onClick={() => setisOpen1(!isOpen1) && setisOpen(!isOpen)}>Products</Link>
                  </li>
                </ul>
              </>
            )}
          
            
                    </li>
                   
                </ul>
                </div>
           
        </nav>
          
        )
    }

