import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';


const ItemCount = ({stock, initial, onAdd, setQuantity, quantityInCart }) => {

    const [cant, setCant] = useState()

    useEffect(() => {
        setCant(parseInt(initial))
    }, [initial])

    // La cantidad de items que puedo agregar al carrito es el STOCK - CANTIDAD YA AGREGADA
    const increase = () => { 
        if(cant < parseInt(stock) - (quantityInCart ?? 0)) 
            setCant(cant + 1) 
    }

    const decrease = () => { 
        if(cant > 1) setCant(cant - 1)
    }
    
    return (
        <>
            <span className={`card-text mb-0 fw-bold text-${stock < 9 ? `danger` : `success`}`}>Stock: {stock}</span>
            {
                quantityInCart &&
                    <span className={`card-text text-primary ms-2`}>( <FaShoppingCart/> {quantityInCart} )</span>
            }
            {
                // Si agregué el stock completo ya no puedo agregar más items de ese producto
                stock === quantityInCart 
                ?
                    <div className='mt-3'>
                        <h6 className='alert alert-warning'>Ya no hay más items de este producto</h6> 
                        <Link 
                                    to={`/`}
                                    type="button"
                                    className="btn btn-warning mt-1 w-100"
                                >Volver
                        </Link>
                    </div>
                :
                <>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <button onClick={decrease} type="button" className={`btn btn-${cant === 1 ? `secondary` : `primary`}`} disabled={cant === 1}>-</button>
                        <h6>{cant}</h6>
                        <button onClick={increase} type="button" className={`btn btn-${cant === (stock - (quantityInCart ?? 0)) ? `secondary` : `primary`}`} disabled={cant === (stock - (quantityInCart ?? 0)) }>+</button>
                    </div>

                    <button onClick={
                            () => {
                                onAdd()
                                setQuantity(cant)
                            }
                        } type="button" className="btn btn-outline-primary mt-3 w-100">
                        Listo
                    </button>
                </>
            }

        </>
    )
}

export default ItemCount
