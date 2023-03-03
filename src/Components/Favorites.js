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
                    <Link to={`/${found.name}`}>{found.name}</Link>
                </section>
            )
        }


        // return (
        //     <div>{favorite}</div>
        // )
    })

    return (
        <div className='favorites-container'>
            {allFavorites}
        </div>
    )
}

export default Favorites