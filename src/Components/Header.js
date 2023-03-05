import React from "react";
import { NavLink } from 'react-router-dom';
import '../CSS/Header.css'

const Header = () => {
    const linkStyle = {
        textDecoration: "none",
        color: 'white',
        margin: '0% 30% 0% -15%'
    }

    return (
        <header>
            <div className="home-container">
                <NavLink to='/' style={linkStyle}>
                    <div className="icon-container"></div>
                    <p>Home</p>
                </NavLink>
            </div>
            <div className="menu-container">
                <NavLink to='/allbeers' style={linkStyle}>Beers</NavLink>
                <NavLink to='/favorites' style={linkStyle}>Favorites</NavLink>
            </div>
        </header>
    )
}

export default Header