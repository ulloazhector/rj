import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({item}) => {
    return (
        <li style={{listStyle: `none`, margin: 16, border: `none`}}>
            <div className="card" style={{width: 288, marginBottom: 16}}>
                <div className="card-body">
                    <img src={item.imagen} alt="" className='w-100'/>
                    <h5 className="card-title">{item.producto}</h5>
                    <h6 className="card-text">${item.precio}</h6>
                    <p className="card-text">Tipo: {item.tipo}</p>
                    <p className="card-text">Alcohol: {item.alc}</p>
                    <Link to={`/item/${item.id}`} className='btn btn-primary'>Más info</Link>
                    {/* <p className="card-text">{item.info}</p> */}
                </div>
            </div>
        </li>
    )
}

export default Item
