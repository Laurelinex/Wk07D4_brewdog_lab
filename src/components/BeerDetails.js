import React from 'react';

const BeerDetails = ({beer}) => {

    if(!beer) {
        return(null)
    }

    return(
        <>
            <p>Name: {beer.name}</p>
            <p>Tagline: {beer.tagline}</p>
            <p>ABV: {beer.abv}</p>
        </>
        
    )
}

export default BeerDetails;