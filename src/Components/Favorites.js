import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Favorites.css';

const Favorites = (props) => {
    const allFavorites = props.favorites.map((favorite, index) => {
        const foundBeer = props.beers.find(beer => beer.name === favorite)
        return (
            <section key={index} className='favorite-container'>
                <img src={foundBeer['image_url']} alt={foundBeer.name} />
                <div>
                    <Link to={`/beers/${foundBeer.id}`}>{foundBeer.name}</Link>
                    <p>Click the title to see more info!</p>
                </div>
            </section>
        )
    })

    const titleStyle = {
        paddingLeft: "5%",
        fontSize: 'xxx-large'
    }

    return (
        <div>
            <h2 style={titleStyle}>Your Favorites</h2>
            {allFavorites}
        </div>
    )
}

export default Favorites