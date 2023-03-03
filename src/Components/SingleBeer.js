import React from 'react'

const SingleBeer = (props) => {
    const foundBeer = props.beers.find(beer => beer.name === props.name)

    if (foundBeer) {
        const { name, description, ingredients, ph } = foundBeer

        console.log(ingredients)

        const hopsList = ingredients.hops.map(hop => <li>{hop.name}</li>)
        const maltList = ingredients.malt.map(malt => <li>{malt.name}</li>)

        return (
            <section>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{ph}</p>
                <ul>
                    {hopsList}
                </ul>
                <ul>
                    {maltList}
                </ul>
                <p>yeast {ingredients.yeast}</p>
            </section>
        )
    }
}

export default SingleBeer

// hops array
// malt array
// yeast string