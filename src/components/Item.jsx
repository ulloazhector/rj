import React from 'react'

const Item = ({item}) => {
    return (
        <li style={{listStyle: `none`, margin: 16, border: `none`}}>
            <div className="card" style={{width: 288, marginBottom: 16}}>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.precio}</p>
                    <p className="card-text">{item.info}</p>
                    <p className="card-text">Alcohol: {item.alcohol}</p>
                </div>
            </div>
        </li>
    )
}

export default Item
