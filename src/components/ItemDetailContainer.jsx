import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [beer, setBeer] = useState()

    const getItem = () => {
        const URL = `https://my-json-server.typicode.com/cuter97/React-Api/productos`
        fetch(URL)
        .then( res => res.json() )
        .then( data => {
            // Agrego delay
            console.log(data)
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
            item detail container
        </div>
    )
}

export default ItemDetailContainer
