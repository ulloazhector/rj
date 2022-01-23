import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore"


import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
    const { id } = useParams();
    
    
    const [beer, setBeer] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        let isCancelled = false

        const db = getFirestore();

        const getItem = async () => {
            const docRef = doc(db, `beers-collection`, id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                if(!isCancelled){
                    setBeer({id: id, ...docSnap.data()})
                    setLoading(false)
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        };

        getItem();

        return() => {
            isCancelled = true
        }

    }, [id]);

    return (
        <>
            {
                loading 
                ?
                    <Spinner />
                :
                    <div className="d-flex justify-content-center px-3">
                        <ItemDetail beer={beer} />
                    </div>
            }
        </>
    )
};

export default ItemDetailContainer;
