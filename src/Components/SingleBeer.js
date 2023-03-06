import React, { Component } from 'react';
import fetchBeerData from '../APIFetchCall';
import Error from './Error';
import '../CSS/SingleBeer.css';

class SingleBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: {},
            errorMessage: ''
        }
    }

    componentDidMount = () => {
        fetchBeerData(this.props.id)
            .then(data => this.setState({ beer: data[0] }))
            .catch(err => this.setState({ errorMessage: err.message }))
    }

    render() {
        if (this.state.beer.name) {

            const { name, description, ph, abv, ibu, attenuation_level, ingredients, brewers_tips } = this.state.beer
            const hopsList = ingredients.hops.map((hop, index) => <li key={index}>{hop.name}</li>)
            const maltList = ingredients.malt.map((malt, index) => <li key={index}>{malt.name}</li>)

            return (
                <section className='beer-info-container'>
                    <h2>{name}</h2>
                    <p id='description'>Description: {description}</p>
                    <p>Brewers Tips: {brewers_tips}</p>
                    <p>Ingredients</p>
                    <div className='ingredients-container'>
                        <ul>Hops: {hopsList}</ul>
                        <ul>Malt: {maltList}</ul>
                    </div>
                    <p>Brewer Facts</p>
                    <div className='brewer-facts-container'>
                        <p>ph: {ph}</p>
                        <p>abv: {abv}</p>
                        <p>ibu: {ibu}</p>
                        <p>attenuation level: {attenuation_level}</p>
                        <p>yeast: {ingredients.yeast}</p>
                    </div>
                </section>
            )
        } else if (this.state.errorMessage) {
            return (
                <div>{this.state.errorMessage}</div>
            )
        } else {
            return (
                <Error />
            )
        }
    }
}

export default SingleBeer