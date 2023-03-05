import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Favorites.css';

const Favorites = (props) => {

    console.log('favorites', props)

    const allFavorites = props.favorites.map(favorite => {

        const found = props.beers.find(beer => beer.name === favorite)

        if (found) {
            return (
                <section>
                    <img src={found['image_url']} />
                    <div>
                        <Link to={`/beers/${found.id}`}>{found.name}</Link>
                        <p>Click the title to see more info!</p>
                    </div>
                </section>
            )
        }
    })

    return (
        <div className='favorites-container'>
            <h2>Your Favorites</h2>
            {allFavorites}
        </div>
    )
}

export default Favorites