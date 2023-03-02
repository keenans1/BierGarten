import React from "react";
import '../CSS/Favorites.css';

const Favorites = (props) => {

    const allFavorites = props.favorites.map(favorite => {
        return (
            <div>{favorite}</div>
        )
    })

    return (
        <div className='favorites-container'>
            {allFavorites}
        </div>
    )
}

export default Favorites