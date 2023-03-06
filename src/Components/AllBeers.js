import React from "react";
import { Link } from "react-router-dom";
import '../CSS/AllBeers.css';
import PropTypes from 'prop-types';

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

AllBeers.propTypes = {
    beers: PropTypes.arrayOf(
        PropTypes.shape(
            {
                abv: PropTypes.number,
                attenuation_level: PropTypes.number,
                boil_volume: PropTypes.shape(
                    {
                        value: PropTypes.number,
                        unit: PropTypes.string
                    }
                ),
                brewers_tips: PropTypes.string,
                contributed_by: PropTypes.string,
                description: PropTypes.string,
                ebc: PropTypes.number,
                first_brewed: PropTypes.string,
                food_pairing: PropTypes.arrayOf(PropTypes.string),
                ibu: PropTypes.number,
                id: PropTypes.number,
                image_url: PropTypes.string,
                ingredients: PropTypes.shape(
                    {
                        malt: PropTypes.arrayOf(
                            PropTypes.shape(
                                {
                                    amount: PropTypes.shape(
                                        {
                                            value: PropTypes.number,
                                            unit: PropTypes.string
                                        }
                                    ),
                                    name: PropTypes.string
                                }
                            )
                        ),
                        hops: PropTypes.arrayOf(
                            PropTypes.shape(
                                {
                                    add: PropTypes.string,
                                    amount: PropTypes.shape(
                                        {
                                            value: PropTypes.number,
                                            unit: PropTypes.string
                                        }
                                    ),
                                    attribute: PropTypes.string,
                                    name: PropTypes.string
                                }
                            )
                        ),
                        yeast: PropTypes.string
                    }
                ),
                method: PropTypes.shape(
                    {
                        fermentation: PropTypes.shape(
                            {
                                temp: PropTypes.shape(
                                    {
                                        value: PropTypes.number,
                                        unit: PropTypes.string
                                    }
                                )
                            }
                        ),
                        mash_temp: PropTypes.arrayOf(
                            PropTypes.shape(
                                {
                                    duration: PropTypes.number,
                                    temp: PropTypes.shape(
                                        {
                                            value: PropTypes.number,
                                            unit: PropTypes.string
                                        }
                                    )
                                }
                            )
                        ),
                        twist: PropTypes.any
                    }
                ),
                name: PropTypes.string,
                ph: PropTypes.number,
                srm: PropTypes.number,
                tagline: PropTypes.string,
                target_fg: PropTypes.number,
                target_og: PropTypes.number,
                volume: PropTypes.shape(
                    {
                        value: PropTypes.number,
                        unit: PropTypes.string
                    }
                )
            }
        )
    ),
    addFavorite: PropTypes.func
}

// have a sort feature?
// abv, aplphabetical