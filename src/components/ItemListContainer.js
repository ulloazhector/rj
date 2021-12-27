import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    return (
        <div>
            <ul>
                <li style={{listStyle: `none`, margin: 16}}>
                    <div className="card" style={{width: 288}}>
                        <ItemCount stock="4" initial="1" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer
