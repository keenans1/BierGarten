fetchBeerData = (beerID) => {

    const endpoint = `/${beerID}` || ''

    return fetch(`https://api.punkapi.com/v2/beers${endpoint}`)
        .then(response => response.json())
}

export default fetchBeerData