import React from 'react'
import { Link } from 'react-router-dom';
import "./style/style.scss"


const Item = ({item}) => {

    const imageStyles = {
        height: `250px`,
        objectFit: `cover`
    }

    return (
        <li style={{listStyle: `none`, border: `none`}}>
            <div className="card shadow-sm border-0 beer-card-container" style={{width: 288, borderRadius: 6}}>
                <div className="card-body beer-card">
                    <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className='w-100'
                        style={imageStyles}
                    />
                    <h4 className="card-text fs-5 fw-normal mt-2">${item.price}</h4>
                    <p className="card-title mt-2 text-secondary">{item.name}</p>
                    
                    <Link to={`/item/${item.id}`} className='btn btn-outline-primary rounded-pill'>Más info</Link>
                </div>
            </div>
        </li>
    )
}

export default Item
