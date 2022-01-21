import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {

    return (
        <ul className="d-flex flex-wrap">
                {items?.map((b) => (
                    <Item key={b.id} item={b} />
                    ))}
        </ul>
    );

}

export default ItemList;
