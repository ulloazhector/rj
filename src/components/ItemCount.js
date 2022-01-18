import React, {useState, useEffect} from 'react'

const ItemCount = ({stock, initial, onAdd, setQuantity}) => {

    const [cant, setCant] = useState()

    useEffect(() => {
        setCant(parseInt(initial))
    }, [initial])

    const increase = () => {if(cant < parseInt(stock)) setCant(cant + 1)};
    const decrease = () => {if(cant > 1) setCant(cant - 1)};
    
    return (
        <>
            <p className={`card-text fw-bold text-${stock < 9 ? `danger` : `success`}`}>Stock: {stock}</p>
            <div className="d-flex justify-content-between align-items-center">
                <button onClick={decrease} type="button" className="btn btn-primary">-</button>
                <h6>{cant}</h6>
                <button onClick={increase} type="button" className="btn btn-primary">+</button>
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
    )
}

export default ItemCount
