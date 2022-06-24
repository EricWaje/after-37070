import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
//import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext);
    //let navigate = useNavigate();

    const [cant, setCant] = useState(0);

    const onAdd = (cantidad) => {
        setCant(cantidad);
        addToCart(item, cantidad);
        //navigate('/cart');
    };

    return (
        <div className="detail">
            <div>
                <img src={item.img} alt={item.name} />
            </div>
            <div className="infoDetail">
                <h2>{item.name}</h2>
                <h4>$ {item.price}.-</h4>
                <p>{item.description}</p>
                {cant === 0 ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
