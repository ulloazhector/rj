import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    const getItem = () => {
      const URL = `https://my-json-server.typicode.com/cuter97/React-Api/productos/${id}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          // Agrego delay
          setTimeout(() => {
            setBeer(data);
          }, 0 * 1000);
        });
    };

    getItem();
  }, [id]);

  return(
        <div className="d-flex justify-content-center">
            <ItemDetail beer={beer} />
        </div>
  ) 
};

export default ItemDetailContainer;
