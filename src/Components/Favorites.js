import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Favorites.css';
import PropTypes from 'prop-types';

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

Favorites.propTypes = {
    favorites: PropTypes.arrayOf(
        PropTypes.string
    ),
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
    )
}