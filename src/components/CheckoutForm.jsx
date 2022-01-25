import React from 'react';

const CheckoutForm = ({ carrito, inputNameRef, inputPhoneRef, inputEmailRef, inputEmailRepRef, submitHandler, areEmailsEqual,setAreEmailsEqual }) => {
    
    return (
        <>
            {
                carrito.length &&
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Compra</h5>
                        <ul className='m-0'>
                            {
                                carrito?.map( item => <li key={item.id} className='card-text'>{item.quantity}x {item.name}</li> )
                            }
                        </ul>
                    </div>
                    <div className="card-footer">
                        Total: ${carrito?.reduce((prev, next) => prev + next.quantity * next.price, 0)}
                    </div>
                </div>
            }
            <form>

                <div className="mb-3">
                    <label htmlFor="inputName">Name</label>
                    <input
                        ref={inputNameRef}
                        type="text"
                        id='inputName'
                        placeholder="Nombre Apellido"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="inputPhone">Phone</label>
                    <input
                        ref={inputPhoneRef}
                        type="tel"
                        id='inputPhone'
                        placeholder="123456789"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        ref={inputEmailRef}
                        type="email"
                        id='inputEmail'
                        placeholder="example@email.com"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="inputEmailRep">Confirm email address</label>
                    <input
                        ref={inputEmailRepRef}
                        type="email"
                        id='inputEmailRep'
                        placeholder="example@email.com"
                        className="form-control"
                        onClick={() => setAreEmailsEqual(true)}
                    />
                </div>

                {
                    !areEmailsEqual &&
                    <div className='alert alert-danger'>
                        Los emails no coinciden
                    </div>
                }

                <div className="my-5 d-grid">
                    <button className="btn btn-primary btn-block" onClick={submitHandler}>
                        Submit
                    </button>
                </div>

            </form>
        </>

    )
}

export default CheckoutForm;
