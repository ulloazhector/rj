import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const { category } = useParams();

    const [beers, setBeers] = useState([]);

    
    useEffect(() => {

        const db = getFirestore();
        const colRef = collection(db, `beers-collection`)

        // Filtro según el tipo, si no se especifica el tipo se muestran todas (home)
        const getting = async () => {
            const q = query(colRef,where(
                `type`,
                `${category ? `==`:`!=`}`,
                category ?? null))
                
                const querySnapshot = await getDocs(q)
                setBeers(querySnapshot.docs.map( doc => ({id: doc.id, ...doc.data()}) ))
            }
                
        getting()

    }, [category]);




    return (
        <div>
            <ItemList items={beers} />
        </div>
    );
};

export default ItemListContainer;

