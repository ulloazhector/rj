import React, { useContext, useState } from "react";
import {Link} from "react-router-dom"

import CartContext from "./contexts/CartContext";
import ItemCount from "./ItemCount";



const ItemDetail = ({ beer }) => {
    const { producto, precio, imagen, info, stock } = beer;
    const [listo, setListo] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const {addItemToCart} = useContext(CartContext)



    const onAdd = () => {
        setListo(true)
    }
    // Boton de volver
    const onBack = () => {
        setListo(false)
    }

    return (
        <div className="card m-4 shadow d-flex flex-row overflow-hidden rounded" style={{ width: 800, border: 'none' }}>
            <img src={imagen} className="card-img-top w-50 m-auto" alt={producto} />
            <div className="card-body">
                <h4 className="card-title">{producto}</h4>
                <h5 className="card-text">${precio}</h5>
                <p className="card-text">{info}</p>

                {
                    !listo &&
                    <ItemCount 
                        stock={stock}
                        initial={quantity}
                        onAdd={onAdd}
                        setQuantity={setQuantity}
                    />
                }
                {    
                    listo && <>
                        <Link 
                            to={`/cart`}
                            type="button"
                            className="btn btn-success mt-3 w-100"
                            onClick={() => addItemToCart({...beer, quantity})}
                        >Agregar al carrito ({quantity})
                        </Link>

                        <button onClick={onBack} type="button" className="btn btn-outline-danger mt-3 w-100">
                            Volver
                        </button>
                    </>
                }

            </div>
        </div>
    );
};

export default ItemDetail;
