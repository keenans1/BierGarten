const fetchBeerData = (beerID = '') => {
    return fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
        .then(response => response.json())
}

export default fetchBeerData 