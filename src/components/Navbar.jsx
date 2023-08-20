import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar(){
    return <div className="Header">
        <div className="appName">
            <img src="https://img.freepik.com/free-vector/hamburger-with-meat-cheese_1308-30898.jpg?size=626&ext=jpg&ga=GA1.2.644625255.1692086703&semt=sph" alt="ham" className="recipeImg" />
            <NavLink to="/" className="navComponents" style={({ isActive }) => ({
              color: isActive ? 'rgb(192 211 243)' : '#fff',
            })}>Home</NavLink>
            <NavLink to="/recipes" className="navComponents" style={({ isActive }) => ({
              color: isActive ? 'rgb(192 211 243)' : '#fff',
            })}>Recipes</NavLink>
        </div>
        
    </div>;
}

export default Navbar;