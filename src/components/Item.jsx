import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({item}) => {

    const imageStyles = {
        height: `300px`,
        objectFit: `cover`
    }

    return (
        <li style={{listStyle: `none`, margin: 16, border: `none`}}>
            <div className="card shadow-sm" style={{width: 288, marginBottom: 16}}>
                <div className="card-body">
                    <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className='w-100'
                        style={imageStyles}
                    />
                    <h5 className="card-title mt-2">{item.name}</h5>
                    <h6 className="card-text">${item.price}</h6>
                    <p className="card-text">Tipo: {item.type}</p>
                    <p className="card-text">Alcohol: {item.alcohol}%</p>
                    <Link to={`/item/${item.id}`} className='btn btn-primary'>Más info</Link>
                </div>
            </div>
        </li>
    )
}

export default Item
