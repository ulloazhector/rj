import React, { useRef, useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore} from "firebase/firestore"
import CartContext from './contexts/CartContext'
import CheckoutForm from './CheckoutForm';
import Spinner from './Spinner';
import { FaCheck } from 'react-icons/fa';


const Checkout = () => {

    const {carrito, clearCart}  = useContext(CartContext)
    const [isDone, setIsDone]   = useState(false)
    const [order, setOrder]     = useState(``)
    const [loading, setLoading] = useState(false);
    const [areEmailsEqual, setAreEmailsEqual] = useState(true)

    // Referencias a los imputs para realizar las verificaciones
    const inputNameRef      = useRef()
    const inputPhoneRef     = useRef()
    const inputEmailRef     = useRef()
    const inputEmailRepRef  = useRef()

    useEffect(() => {
        setAreEmailsEqual(true)
    }, []);
    
    

    const generateOrder = async() => {

        const inputName         = inputNameRef.current
        const inputPhone        = inputPhoneRef.current
        const inputEmail        = inputEmailRef.current

        const date = new Date()

        // Genero el objeto de la orden
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

        // Subo la orden a la base de datos
        const db = getFirestore()
        const colRef = collection(db, `orders`)
        const docRef = await addDoc(colRef, buyObject)

        // Terminó la compra y limpio el carrito
        setOrder(docRef.id)
        setLoading(false)
        setIsDone(true)
        clearCart()

    }


    const submitHandler = e => {
        e.preventDefault()

        const inputName         = inputNameRef.current
        const inputPhone        = inputPhoneRef.current
        const inputEmail        = inputEmailRef.current
        const inputEmailRep     = inputEmailRepRef.current

        // Si los campos están vacíos hago el focus en el mismo
        if(!inputName.value)
            inputName.focus()
        else if(!inputPhone.value)
            inputPhone.focus()
        else if(!inputEmail.value)
            inputEmail.focus()
        else if(!inputEmailRep.value)
            inputEmailRep.focus()
        else if(inputEmail.value !== inputEmailRep.value ){
            console.log(`distintos`)
            setAreEmailsEqual(false)
        }

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
                                <h2 className='text-success mb-3'><FaCheck/> Compra exitosa </h2>
                                <p>Orden de compra: <b>{order}</b></p>
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
                                        carrito={carrito}
                                        inputNameRef={inputNameRef} 
                                        inputPhoneRef={inputPhoneRef} 
                                        inputEmailRef={inputEmailRef} 
                                        inputEmailRepRef={inputEmailRepRef} 

                                        areEmailsEqual={areEmailsEqual}
                                        setAreEmailsEqual={setAreEmailsEqual}
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

