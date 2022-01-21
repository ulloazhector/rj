import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore"


import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    
    
    const [beer, setBeer] = useState([]);
    
    useEffect(() => {
        const db = getFirestore();

        const getItem = async () => {
            const docRef = doc(db, `beers-collection`, id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setBeer({id: id, ...docSnap.data()})
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        };

        getItem();
    }, [id]);

    return (
        <div className="d-flex justify-content-center px-3">
            <ItemDetail beer={beer} />
        </div>
    )
};

export default ItemDetailContainer;
