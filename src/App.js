import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item';

import Contacto from './components/Contacto';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <NavBar>
                    <CartWidget />
                </NavBar>

                <Routes>
                    <Route path="/"                     element={ <ItemListContainer/> } />
                    <Route path="/category/:category"   element={ <ItemListContainer/> } />
                    <Route path="/item/:id"             element={ <ItemDetailContainer/> } />
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
