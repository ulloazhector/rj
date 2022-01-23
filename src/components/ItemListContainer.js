import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Banner from "./Banner";
import Spinner from "./Spinner";

const ItemListContainer = () => {
    const { category } = useParams();

    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let isCancelled = false

        const db = getFirestore();
        const colRef = collection(db, `beers-collection`)

        // Filtro según el tipo, si no se especifica el tipo se muestran todas (home)
        const getting = async () => {

            try{
                const q = query(colRef,where(
                    `type`,
                    `${category ? `==`:`!=`}`,
                    category ?? null))
    
                const querySnapshot = await getDocs(q)
                if(!isCancelled){
                    setBeers(querySnapshot.docs.map( doc => ({id: doc.id, ...doc.data()}) ))
                    setLoading(false)
                }

            } catch(e){
                console.log(`error: `, e);
            }

        }
                
        getting()

        return () => {
            isCancelled = true
        }


    }, [category]);

    



    return (
        <div className="main-content container-md p-0 pb-5">
            {
                loading
                ?
                    <Spinner />
                :
                    <>
                        {
                            category &&
                                <Banner 
                                    category={category}
                                />
                        }
                        <ItemList items={beers} />
                    </>
            }
        </div>
    );
};

export default ItemListContainer;

