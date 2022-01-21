import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const NavBar = (props) => {

    // Categorias
    const [cat, setCat] = useState([])
    
    useEffect(() => {

        const db = getFirestore();
        const getCategories = async () => {

            const querySnapshot = await getDocs(collection(db, "beers-collection"))
            // Filtro los tipos y guardo en el state
            setCat([...new Set(
                querySnapshot.docs?.map(
                    doc => doc.data().type
                )
            )])
        };
        
        getCategories()
    }, [])




    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand">Montaña</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link to={`/`} className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cervezas
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    cat.map( (c,i) => (
                                        // Genero el menu dinamico
                                        <li key={i}>
                                            <Link 
                                                to={`category/${c}`} 
                                                className="dropdown-item"
                                            >{c}s
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li className="nav-item">
                            {props.children}
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar
