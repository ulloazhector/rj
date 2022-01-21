import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/contexts/CartContext';

function App() {

    return (
        <div className="App">
            <CartProvider>

                <BrowserRouter>
                    <NavBar>
                        <CartWidget />
                    </NavBar>

                    <Routes>
                        <Route path="/"                     element={ <ItemListContainer/> } />
                        <Route path="/category/:category"   element={ <ItemListContainer/> } />
                        <Route path="/item/:id"             element={ <ItemDetailContainer/> } />
                        <Route path="/cart"                 element={ <Cart/> } />
                    </Routes>

                </BrowserRouter>

            </CartProvider>
        </div>
    );
}

export default App;
