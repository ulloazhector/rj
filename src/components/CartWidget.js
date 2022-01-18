import { FaShoppingCart } from 'react-icons/fa';
import CartContext from './contexts/CartContext'

import React, {useContext} from 'react'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {carrito} = useContext(CartContext)

    return (
        <>
            {
                carrito?.length > 0 &&
                <Link 
                    to={`/cart`} 
                    style={{textDecoration: `none`}}
                    className='nav-link'
                >
                    <FaShoppingCart/>
                    <span> {
                        carrito?.length > 0 && 
                        carrito?.reduce((prev, next) => prev + next.quantity,0)
                    }</span>
                </Link>
            }
        </>
    )
}

export default CartWidget
