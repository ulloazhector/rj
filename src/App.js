import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
    return (
        <div className="App">
            <NavBar>
                <CartWidget />
            </NavBar>
            {/* <ItemListContainer/> */}
            <ItemDetailContainer/>
        </div>
    );
}

export default App;
