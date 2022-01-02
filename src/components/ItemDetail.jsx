import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ info, price }) => {
    return (
        <div className="card m-4" style={{width: 300}}>
            <img src={info.image_url ?? "..."} className="card-img-top w-50 m-auto"/>
                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <p className="card-text">{info.description}</p>
                    <h6 className="card-text">${price}</h6>
                    <ItemCount stock="5" initial="1" />
                    <button type="button" className="btn btn-outline-primary mt-3 w-100">Agregar al carrito</button>
                </div>
        </div>
    )
}

export default ItemDetail
