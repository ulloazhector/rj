import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"

import CartContext from "./contexts/CartContext";
import ItemCount from "./ItemCount";



const ItemDetail = ({ beer }) => {
    const { name, price, imageUrl, about, stock, id } = beer;
    const [listo, setListo] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const [quantityInCart, setQuantityInCart] = useState(0)

    const { carrito, addItemToCart } = useContext(CartContext)

    useEffect(() => {
        // Busco el item de los que están en el carrito y guardo en el estado quantityInCart
        const item = carrito?.find(beer => beer.id === id)
        setQuantityInCart(item?.quantity)
    }, [carrito, id])
    
    
    const onAdd = () => {
        setListo(true)
    }
    // Boton de volver
    const onBack = () => {
        setListo(false)
    }
    
   
    return (
        <div className="card m-4 shadow d-flex flex-row overflow-hidden rounded" style={{ width: 800, border: 'none' }}>
            <div className="row flex-sm-row flex-column px-3 align-items-center">
                <div className="col p-0">
                    <img src={imageUrl} className="card-img-top m-auto" alt={name} />
                </div>

                <div className="col p-0">
                    <div className="card-body">
                        <h4 className="card-title display-6">{name}</h4>
                        <p className="card-text">{about}</p>
                        <h5 className="card-text">${price}</h5>

                        {
                            !listo &&
                            <ItemCount 
                                stock={ stock }
                                initial={ 1 }
                                onAdd={ onAdd }
                                setQuantity={ setQuantity }
                                quantityInCart={quantityInCart}
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
            </div>
        </div>
    );
};

export default ItemDetail;
