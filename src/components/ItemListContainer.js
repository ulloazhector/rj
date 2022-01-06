import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const {category} = useParams()

    const [beers, setBeers] = useState()

    const getItem = () => {
        const URL = `https://my-json-server.typicode.com/cuter97/React-Api/productos`
        fetch(URL)
        .then( res => res.json() )
        .then( data => {
            // Agrego delay
            setTimeout(() => {
                setBeers(data)
            }, 0*1000)
        })
    }
    
    useEffect(() => {
        getItem()
    }, [])


    return (
        <div>
            <ItemList items={beers} category={category} />
        </div>
    )
}

export default ItemListContainer