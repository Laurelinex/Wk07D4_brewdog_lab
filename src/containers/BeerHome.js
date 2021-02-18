import React, { useEffect, useState} from 'react';
import BeerDetails from '../components/BeerDetails';
import BeerList from '../components/BeerList'

const BeerHome = () => {

    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    const getBeers = () => {
        console.log("Fetching beers....")
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(data => setBeers(data))
    }

    useEffect(() => {
        getBeers()
    }, [])

    const handleSelectedBeer = (beer) => {
        setSelectedBeer(beer)
    }

    return(
        <div>
            <h1>Brewdog Beers</h1>
            <BeerList beers={beers} onBeerSelected={handleSelectedBeer}/>
            <BeerDetails beer={selectedBeer} />
        </div>
    )
}

export default BeerHome;