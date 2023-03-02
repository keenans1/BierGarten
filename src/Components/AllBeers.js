import React from "react";
import { Link } from "react-router-dom";

const AllBeers = (props) => {
    const beers = props.beers.map(beer => {
        return (
            <section>
                <Link to={`/${beer.name}`}>{beer.name}</Link>
                <p>{beer.description}</p>
                <img src={beer['image_url']} alt={beer.name} />
                <button onClick={() => props.addFavorite(beer.name)}>Add to Favorites</button>
            </section>
        )
    })

    return (
        <div >{beers}</div>
    )
}

export default AllBeers