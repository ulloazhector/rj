import { FaMountain, FaSearch } from 'react-icons/fa'

import React , {useState, 
        useEffect, useContext } from 'react'

import { Link }                 from 'react-router-dom';

import SearchContext            from './contexts/SearchContext'

import { collection, getDocs, 
        getFirestore }          from "firebase/firestore";


const NavBar = (props) => {

    // Context
    const {setSearch} = useContext(SearchContext);

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

    const changeHandler = (e) => {
        setSearch(e.target.value)
    }
    


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand d-flex align-items-end ">
                    <span className='pb-2'>
                        <FaMountain/>
                    </span>
                    <span className='mx-2 pb-1 fs-4'>Montaña</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100">

                        <li className="nav-item me-3">
                            <Link to={`/`} className="nav-link" >Home</Link>
                        </li>

                        <li className="nav-item me-3 dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cervezas
                            </span>
                            <ul className="dropdown-menu menu-block shadow" aria-labelledby="navbarDropdown">
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

                        <li className="nav-item me-3">
                            {props.children}
                        </li>

                        {/* Barra de búsqueda */}
                        <li className="nav-item me-3 search-bar bar-media">
                            <input 
                                className='form-control rounded-pill me-3 px-5 bar-input'
                                onChange={changeHandler}
                                placeholder='Search. . .'
                            />
                            <span className='search-icon'>
                                <FaSearch/>
                            </span>
                        </li>
                        
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar
