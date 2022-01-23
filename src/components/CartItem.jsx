import React, { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import CartContext from './contexts/CartContext'
import './style/style.scss'

const CartItem = ({ item }) => {
    const { removeItemFromCart } = useContext(CartContext)

    const imageStyles = {
        objectFit: `cover`,
        width : `100%`,
        height : `100%`,
        
    }

    return (
        <li className='card mb-3 rounded-3 shadow border-0 media' style={{ overflow: `hidden`}}>
            <div className='row g-0 media'>
                <div className='col-md-3 media' style={{ height: `100%`}}>
                    <img src={item.imageUrl} alt={item.name} className='img-fluid rounded-start' style={imageStyles} />
                </div>
                <div className='col-md-9 h-100'>
                    <div className='card-body'>
                        <h5 className='card-title'>{item.name} </h5>
                        <p className='card-text'>{item.quantity} {item.quantity > 1 ? `unidades` : `unidad`}</p>
                        <div className='d-flex justify-content-between'>
                            <h4 className='card-text'>${item.quantity * item.price}</h4>
                            <button 
                                onClick={() => removeItemFromCart(item.id)}
                                className='btn text-danger'
                            ><FaTrashAlt/></button>

                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem
