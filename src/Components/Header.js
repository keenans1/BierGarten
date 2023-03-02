import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to='/'>Home</Link>
            <Link to='/allbeers'>All Beers</Link>
            <Link to='/favorites'>Favorites</Link>
        </header>
    )
}

export default Header