import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter,Routes, Route }     
                            from 'react-router-dom'

import { CartProvider }     from './components/contexts/CartContext'
import { SearchProvider }   from './components/contexts/SearchContext'

import NavBar               from './components/NavBar'
import CartWidget           from './components/CartWidget'
import ItemListContainer    from './components/ItemListContainer'
import ItemDetailContainer  from './components/ItemDetailContainer'
import Cart                 from './components/Cart'
import Checkout             from './components/Checkout'




function App() {

    return (
        <div className="App app-body">
            <CartProvider>
                <SearchProvider>

                <BrowserRouter>
                    <NavBar>
                        <CartWidget />
                    </NavBar>

                    <Routes>
                        <Route path="/"                     element={ <ItemListContainer/> } />
                        <Route path="/category/:category"   element={ <ItemListContainer/> } />
                        <Route path="/item/:id"             element={ <ItemDetailContainer/> } />
                        <Route path="/cart"                 element={ <Cart/> } />
                        <Route path="/checkout"             element={ <Checkout/> } />
                    </Routes>

                </BrowserRouter>

                </SearchProvider>
            </CartProvider>
        </div>
    );
}

export default App;
