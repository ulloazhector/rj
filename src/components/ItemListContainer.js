import React, { useState, useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

import Spinner from "./Spinner";
import OrderBy from "./OrderBy";

import SearchContext from "./contexts/SearchContext"


const ItemListContainer = () => {
    const { category } = useParams();

    const {search} = useContext(SearchContext);
    
    // allBeers contiene todos los items del catálogo
    // mientras que beers contiene los items buscados y/o los que están ordenados
    const [allBeers, setAllBeers] = useState([]);
    const [beers, setBeers] = useState([])

    const [loading, setLoading] = useState(true);

    // order es el críterio para ordenar todos los items o los que fueron buscados
    const [order, setOrder] = useState(``);


    
    useEffect(() => {
        let isCancelled = false

        const db = getFirestore()
        const colRef = collection(db, `beers-collection`)

        // Filtro según el tipo, si no se especifica el tipo se muestran todas (home)
        const getting = async () => {

            try{
                const q = query(colRef, where(
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

        // Cancelo todas las operaciones asíncronas
        return () => {
            isCancelled = true
        }


    }, [category])


    const ordenar = useCallback(() => {
            // Ordeno según el criterio selecionado
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
                            // Si estoy en el home puedo ordenar los items
                            category 
                            ?
                                <h2 className="item-list mt-3 display-5">{category}</h2>
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

