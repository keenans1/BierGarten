const fetchBeerData = (beerID = '') => {
    return fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            return response.json()
        })
}

export default fetchBeerData 