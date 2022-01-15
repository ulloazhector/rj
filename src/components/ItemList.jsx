import React from "react";
import Item from "./Item";

const ItemList = ({ items, category }) => {
  // Filtro según el tipo, si no se especifica el tipo se muestran todas (home)

  const filteredBeers =
    category === undefined
      ? items
      : items.filter((b) => b.tipo.toLowerCase() === category.toLowerCase());

  return (
    <ul className="d-flex flex-wrap">
      {filteredBeers.map((b) => (
        <Item key={b.id} item={b} />
      ))}
    </ul>
  );
};

export default ItemList;
