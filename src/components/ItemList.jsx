import React, {useState, useEffect} from 'react'
import Item from './Item'

const ItemList = ({items, category}) => {

    const [beers, setBeers] = useState([])


    useEffect(() => {
        const getProducts = new Promise ( (res, rej) => {
    
            setTimeout(() => {

                if (items.length > 0)
                    res(items)
                else
                    rej(`No hay productos`)

            }, 0*1000)
    
        })
    
        getProducts
            .then(res => {setBeers(res)})
            .catch(err => {console.log(err)})
    
        }, [items])

        // Filtro según el tipo, si no se especifica el tipo se muestran todas (home)
        const filteredBeers = category === undefined ? beers : 
                            beers.filter( b => b.tipo.toLowerCase() === category.toLowerCase() )



    return (
        <ul className='d-flex flex-wrap'>
            { filteredBeers.map(b => <Item key={b.id} item={b}/> ) }
        </ul>
    )
}

export default ItemList
