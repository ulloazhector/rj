import React from 'react';

const OrderBy = ({ setOrder }) => {

    const selectHandler = (event) => {
        setOrder(event.target.value);
    }


    return (
        <div className="order-by-bar mt-3">
            <div className="order-by-option m-0 d-flex align-items-center">
                <p className='m-0 me-2'>
                    Ordenar por
                </p>
                <select className="form-select form-select-sm" aria-label="Default select example" defaultValue={`DEFAULT`} onChange={selectHandler} onClick={selectHandler}>
                    <option value="DEFAULT" disabled style={{display: `none`}}>Elige una opción</option>
                    <option value="masVendido">Más vendido</option>
                    <option value="masBarato">Menor precio</option>
                    <option value="masCaro">Mayor precio</option>
                </select>
            </div>
        </div>
    )
}

export default OrderBy;
