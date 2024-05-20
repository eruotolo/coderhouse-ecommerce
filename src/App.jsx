import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer title="Unica Jeans Tienda" />
            <div className="container">
                <div className="flex flex-row">
                    <h1 className="text-3xl font-light ">Hello world!</h1>
                </div>
            </div>
        </>
    );
}

export default App;
