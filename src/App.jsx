import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/product/:productId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </>
    );
}

export default App;
