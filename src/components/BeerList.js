import React from 'react';

const BeerList = ({beers, onBeerSelected}) => {

    const beerNodes = beers.map((beer, index) => {
        return (
            <li onClick={() => {onBeerSelected(beer)}} key={index}>{beer.name}</li>
        )
    })

    return(
        <>
            <ul>
                {beerNodes}
            </ul>
        </>
    )
}

export default BeerList;