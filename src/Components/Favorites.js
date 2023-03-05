import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Favorites.css';

const Favorites = (props) => {
    const allFavorites = props.favorites.map((favorite, index) => {
        const foundBeer = props.beers.find(beer => beer.name === favorite)
        return (
            <section key={index}>
                <img src={foundBeer['image_url']} alt={foundBeer.name} />
                <div>
                    <Link to={`/beers/${foundBeer.id}`}>{foundBeer.name}</Link>
                    <p>Click the title to see more info!</p>
                </div>
            </section>
        )
    })

    return (
        <div className='favorites-container'>
            <h2>Your Favorites</h2>
            {allFavorites}
        </div>
    )
}

export default Favorites