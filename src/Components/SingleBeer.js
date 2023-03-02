import React from 'react'

const SingleBeer = (props) => {
    const foundBeer = props.beers.find(beer => beer.name === props.name)

    let foundName

    if (foundBeer) {
        foundName = foundBeer.name
    }

    return (
        <section>
            <h2>using find {foundName}</h2>
        </section>
    )
}

export default SingleBeer