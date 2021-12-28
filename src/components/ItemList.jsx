import React, {useState, useEffect} from 'react'
import Item from './Item'

const ItemList = ({items}) => {

    const [beers, setBeers] = useState([])


    useEffect(() => {
        const getProducts = new Promise ( (res, rej) => {
    
            setTimeout(() => {

                if (items.length > 0)
                    res(items)
                else
                    rej(`No hay productos`)

            }, 2000)
    
        })
    
        getProducts
            .then(res => {setBeers(res)})
            .catch(err => {console.log(err)})
    
    }, [items])
    
    

    return (
        <ul>
            { beers.map(beer => <Item key={beer.id} item={beer}/> ) }
        </ul>
    )
}

export default ItemList
