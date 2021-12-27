import React, {useState} from 'react'

const ItemCount = ({stock, initial}) => {

    const [cant, setCant] = useState(parseInt(initial))

    const increase = () => {if(cant < parseInt(stock)) setCant(cant + 1)};
    const decrease = () => {if(cant > 1) setCant(cant - 1)};
    
    return (
        <div className="card-body">
            <h5 className="card-title">Producto</h5>
            <p className="card-text">$200</p>
            <p className="card-text">Stock: {stock}</p>
            <div className="d-flex justify-content-between align-items-center">
                <button onClick={decrease} type="button" className="btn btn-primary">-</button>
                <h6>{cant}</h6>
                <button onClick={increase} type="button" className="btn btn-primary">+</button>
            </div>
            <button type="button" className="btn btn-outline-primary mt-3 w-100">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
