import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
    const onAdd = () => {
        console.log('hola');
    };
    return (
        <>
            <Navbar />
            <ItemListContainer saludo="Bienvenidos" />
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </>
    );
}

export default App;
