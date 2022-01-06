import React, {useState, useEffect} from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    const [state, setState] = useState([])
    // Filtro según el tipo, si no se especifica el tipo se muestran todas (home)
    
    // const filteredBeers = category === undefined ? beers : 
    //                     beers.filter( b => b.tipo.toLowerCase() === category.toLowerCase() )
    useEffect(() => {
        setState(items)
        
        console.log(state);
    }, [items])


    return (
        <ul className='d-flex flex-wrap'>
            {/* { .map((b,i) => (<h5 key={i}>xd</h5>) ) } */}
            {/* { items.map(b => <Item key={b.id} item={b}/> ) } */}
        </ul>
    )
}

export default ItemList
