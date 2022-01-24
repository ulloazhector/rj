import React, { useState, useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Banner from "./Banner";
import Spinner from "./Spinner";
import OrderBy from "./OrderBy";

import SearchContext from "./contexts/SearchContext"


const ItemListContainer = () => {
    const { category } = useParams();

    const {search} = useContext(SearchContext);
    
    const [allBeers, setAllBeers] = useState([]);
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState(``);


    
    useEffect(() => {
        let isCancelled = false

        const db = getFirestore()
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
                    setAllBeers(querySnapshot.docs.map( doc => ({id: doc.id, ...doc.data()}) ))
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


    }, [category])


    const ordenar = useCallback(() => {
            switch (order) {
                case `masBarato`:
                    setBeers(
                        beers => beers.sort((a,b) => a.price - b.price)
                    )
                    break;
                case `masCaro`:
                    setBeers(
                        beers => beers.sort((a,b) => b.price - a.price)
                    )
                    break;
                case `masVendido`:
                    setBeers(
                        beers => beers.sort((a,b) => a.stock - b.stock)
                    )
                    break;
                default:
                    break;
            }
        }, [order])

    
    
    useEffect(() => {
        setBeers(allBeers)
        setBeers( beers => beers
            ?.map(beer => beer.name.toLowerCase().includes( search.toLowerCase() ) && beer)
            ?.filter(beer => beer)
        )
        ordenar()

    }, [search, allBeers, order, ordenar])
    
    
    
    



    return (
        <div className="main-content container-md p-0 pb-5">
            {
                loading
                ?
                    <Spinner />
                :
                    <>
                        {
                            category 
                            ?
                                <Banner category={category}/>
                            :
                                <OrderBy setOrder={setOrder}/>
                        }
                        {
                            beers.length
                            ?
                                <ItemList items={beers} />
                            :
                                <h3>Sin resultados</h3>
                        }
                    </>
            }
        </div>
    );
};

export default ItemListContainer;

