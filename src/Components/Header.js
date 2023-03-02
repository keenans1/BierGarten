import React from "react";
import { NavLink } from 'react-router-dom';
import '../CSS/Header.css'

const Header = () => {
    const linkStyle = {
        textDecoration: "none",
        color: 'white'
    }

    return (
        <header>
            <div>
                <NavLink to='/' style={linkStyle}>Home</NavLink>
            </div>
            <div>
                <NavLink to='/allbeers' style={linkStyle}>All Beers</NavLink>
                <NavLink to='/favorites' style={linkStyle}>Favorites</NavLink>
            </div>
        </header>
    )
}

export default Header