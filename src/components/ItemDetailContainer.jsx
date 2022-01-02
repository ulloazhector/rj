import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [beer, setBeer] = useState()

    const getItem = () => {
        const URL = `https://api.punkapi.com/v2/beers/random`
        fetch(URL)
        .then( res => res.json() )
        .then( data => {
            // Agrego delay
            setTimeout(() => {
                setBeer(data[0])
            }, 2*1000)
        })
    }
    
    useEffect(() => {
        getItem()
    }, [])

    return (
        <div>
            <ItemDetail info={beer} price="200"/>
        </div>
    )
}

export default ItemDetailContainer
