import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {

    return (
        <>
            {
                items.length > 0 
                ? 
                <ul className="d-flex flex-wrap">
                        {items.map((b) => (
                            <Item key={b.id} item={b} />
                            ))}
                    </ul>
                :
                <h2 className="m-2">Categoría vacía</h2>
            }
        </>
    );

}

export default ItemList;
