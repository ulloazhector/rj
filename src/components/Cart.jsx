import React, {useContext} from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import CartContext from './contexts/CartContext'

const Cart = () => {

    const {carrito, clearCart} = useContext(CartContext)

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-10 col-sm-8 col-md-8 col-lg-6 mb-3'>
                    <h2 className='my-4 display-6'>Carrito</h2>
                    {
                        carrito?.length > 0 
                            ? <hr />
                            : <>
                                <p className='alert alert-primary'>El carrito está vacío.</p>
                                <Link 
                                    to={`/`}
                                    className='btn btn-primary'
                                >
                                    <FaLongArrowAltLeft/> Ir a comprar
                                </Link>
                            </>
                    }
                    <ul className='p-0'>
                        {
                            // lista
                            carrito?.map( item => <CartItem key={item.id} item={item} /> )
                        }
                    </ul>

                    {
                        carrito?.length > 0 &&
                        <>
                            <hr />
                            <h3 className='text-end'>Total: $ 
                                {
                                    carrito?.reduce((prev, next) => prev + next.quantity * next.price, 0)
                                }
                            </h3>

                            <div className='text-end'>
                                <Link 
                                    to={`/checkout`}
                                    className='btn btn-success'
                                    style={{margin: `1rem 0 0 2rem`}}
                                    >
                                    Terminar compra
                                </Link>
                                <button 
                                    onClick={clearCart}
                                    className='btn btn-danger'
                                    style={{margin: `1rem 0 0 1rem`}}
                                    >
                                    Limpiar carrito
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>

        </div>
    )
}

export default Cart
