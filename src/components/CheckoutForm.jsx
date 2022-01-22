import React from 'react';

const CheckoutForm = ({inputNameRef, inputPhoneRef, inputEmailRef, submitHandler}) => {
    return (
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

            <div className="my-5 d-grid">
                <button className="btn btn-primary btn-block" onClick={submitHandler}>Submit</button>
            </div>

        </form>
    )
}

export default CheckoutForm;
