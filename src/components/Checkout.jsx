import React, { useRef, useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore} from "firebase/firestore"
import CartContext from './contexts/CartContext'
import CheckoutForm from './CheckoutForm';
import Spinner from './Spinner';


const Checkout = () => {
    const {carrito, clearCart}  = useContext(CartContext)
    const [isDone, setIsDone]   = useState(false)
    const [order, setOrder]     = useState(``)
    const [loading, setLoading] = useState(false);

    const inputNameRef  = useRef()
    const inputPhoneRef = useRef()
    const inputEmailRef = useRef()

    const generateOrder = async() => {

        const inputName     = inputNameRef.current
        const inputPhone    = inputPhoneRef.current
        const inputEmail    = inputEmailRef.current

        const date = new Date()

        const buyObject = {
            buyer: {
                name:   inputName.value,
                phone:  inputPhone.value,
                email:  inputEmail.value,
            },
            items: carrito.map(item => ({
                id:         item.beerId,
                title:      item.name,
                quantity:   item.quantity,
                price:      item.price
            })),
            date: date.toUTCString(),
            total: carrito?.reduce((prev, next) => prev + next.quantity * next.price, 0)
        }

        const db = getFirestore()
        const colRef = collection(db, `orders`)
        const docRef = await addDoc(colRef, buyObject)

        setOrder(docRef.id)
        setLoading(false)
        setIsDone(true)
        clearCart()

    }


    const submitHandler = e => {
        e.preventDefault()

        const inputName     = inputNameRef.current
        const inputPhone    = inputPhoneRef.current
        const inputEmail    = inputEmailRef.current

        // Si los campos están vacíos hago el focus en el mismo
        if(!inputName.value)
            inputName.focus()
        else if(!inputPhone.value)
            inputPhone.focus()
        else if(!inputEmail.value)
            inputEmail.focus()
        // Genero la orden
        else{
            setLoading(true)
            generateOrder()
        }
    }


    return (
        <div className='container-fluid'>
            <div className="row justify-content-center mt-4">
                <div className="col-lg-5 col-md-6 col-sm-8 col-10">
                    {
                        isDone 
                        ? 
                            <>
                                <h2 className='text-success mb-3'>Compra exitosa</h2>
                                <p>ID de Orden: <b>{order}</b></p>
                                <Link to={`/`} className='btn btn-primary'>Ir al home</Link>
                            </> 
                        : 
                            loading 
                            ?
                                <Spinner/>
                            :
                                <>
                                    <h2 className='display-5 mb-4'>Checkout</h2>
                                    <CheckoutForm 
                                        inputNameRef={inputNameRef} 
                                        inputPhoneRef={inputPhoneRef} 
                                        inputEmailRef={inputEmailRef} 
                                        submitHandler={submitHandler}
                                        />
                                </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout;

