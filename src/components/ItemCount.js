import React, {useState, useEffect} from 'react'

const ItemCount = ({stock, initial}) => {

    const [cant, setCant] = useState()

    useEffect(() => {
        setCant(parseInt(initial))
    }, [])

    const increase = () => {if(cant < parseInt(stock)) setCant(cant + 1)};
    const decrease = () => {if(cant > 1) setCant(cant - 1)};
    
    return (
        <>
            <p className="card-text">Stock: {stock}</p>
            <div className="d-flex justify-content-between align-items-center">
                <button onClick={decrease} type="button" className="btn btn-primary">-</button>
                <h6>{cant}</h6>
                <button onClick={increase} type="button" className="btn btn-primary">+</button>
            </div>
        </>
    )
}

export default ItemCount
