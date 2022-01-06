import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
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
                                <li><Link to={`category/Ale`} className="dropdown-item">Ales</Link></li>
                                <li><Link to={`category/Lager`} className="dropdown-item">Lagers</Link></li>
                                <li><Link to={`category/Stout`} className="dropdown-item">Stouts</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item" style={{ marginLeft: `auto` }}>
                            <span className="nav-link" >{props.children}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar
