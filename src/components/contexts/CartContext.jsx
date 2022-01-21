import React, { useEffect, useState } from 'react'

const CartContext = React.createContext()

const buyCart = JSON.parse(localStorage.getItem(`buy-cart`))

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(buyCart || [])

    useEffect(() => {
        localStorage.setItem(`buy-cart`, JSON.stringify(carrito))
    }, [carrito])



    // Funciones para el carrito
    const addItemToCart = (beer) => {
        
        const newItem = {...beer}
        // Si ya está en el carrito cambio la cantidad (no la sumo)
        if(isInCart(beer.id)){
            const changedCarrito = carrito?.filter(item => item.id !== beer.id)
            setCarrito([newItem,...changedCarrito])
        }
        else
            setCarrito([newItem, ...carrito])
    }
    
    const removeItemFromCart = (itemId) => {

        const changedCarrito = carrito?.filter(item => item.id !== itemId)
        setCarrito([...changedCarrito])
    }

    const isInCart = (id) =>  carrito?.some(item => item.id === id)

    const clearCart = () => { setCarrito([]) }



    // data que paso al provider
    const data = {carrito, addItemToCart, clearCart, removeItemFromCart}

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext