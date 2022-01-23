import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {

    return (
        <ul className="item-list my-3 px-3" style={{padding: 0}}>
        {/* <ul className="d-flex flex-wrap justify-content-center item-list" style={{padding: 0}}> */}
                {items?.map((b) => (
                    <Item key={b.id} item={b} />
                    ))}
        </ul>
    );

}

export default ItemList;
