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

            const { name, description, ph, ingredients } = this.state.beer
            const hopsList = ingredients.hops.map((hop, index) => <li key={index}>{hop.name}</li>)
            const maltList = ingredients.malt.map((malt, index) => <li key={index}>{malt.name}</li>)

            return (
                <section className='beer-info-container'>
                    <h2>{name}</h2>
                    <p>Description: {description}</p>
                    <p>ph: {ph}</p>
                    <ul>hops: {hopsList}</ul>
                    <ul>malt: {maltList}</ul>
                    <p>yeast: {ingredients.yeast}</p>
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