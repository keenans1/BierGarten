import React from "react";
import { Link } from "react-router-dom";
import '../CSS/AllBeers.css';

const AllBeers = (props) => {

    const beers = props.beers.map((beer, index) => {

        const foods = beer['food_pairing'].map((food, index) => {
            return (
                <li key={index}>{food}</li>
            )
        })

        return (
            <section className="single-beer-container" key={index}>
                <div>
                    <Link to={`/beers/${beer.id}`} className='title'>
                        <h2>{beer.name}</h2>
                        <img src={beer['image_url']} alt={beer.name} />
                    </Link>
                </div>
                <div className="text-container">
                    <h3>Food Pairings</h3>
                    <ul>{foods}</ul>
                    <button onClick={() => props.addFavorite(beer.name)}>Add to Favorites</button>
                    <p className="assert-text">Click the title or image to see more info about {beer.name}</p>
                </div>
            </section>
        )
    })

    return (
        <div className='beers-container'>{beers}</div>
    )
}

export default AllBeers

// have a sort feature?
// abv, aplphabetical