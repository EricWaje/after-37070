import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { prueba } = useContext(CartContext);

    return (
        <div>
            <div>
                <button onClick={prueba}>Click</button>
            </div>
        </div>
    );
};

export default Cart;
