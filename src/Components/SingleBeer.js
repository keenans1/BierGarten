import React, { Component } from 'react'

class SingleBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: {

            }
        }
    }

    componentDidMount = () => {
        fetch(`https://api.punkapi.com/v2/beers/${this.props.id}`)
            .then(response => response.json())
            .then(data => this.setState({ beer: data[0] }))
    }

    render() {
        if (this.state.beer.name) {

            const { name, description, ph, ingredients } = this.state.beer
            const hopsList = ingredients.hops.map(hop => <li>{hop.name}</li>)
            const maltList = ingredients.malt.map(malt => <li>{malt.name}</li>)

            return (
                <section className='info-container'>
                    <h2>Description: {name}</h2>
                    <p>{description}</p>
                    <p>{ph}</p>
                    <ul>
                        hops {hopsList}
                    </ul>
                    <ul>
                        malt {maltList}
                    </ul>
                    <p>yeast {ingredients.yeast}</p>
                </section>
            )
        }
    }
}

export default SingleBeer