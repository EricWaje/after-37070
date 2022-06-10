import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const suma = () => {
        /* if (count < stock) {
            setCount(count + 1);
        } */

        count !== stock && setCount(count + 1);
    };

    const resta = () => {
        count !== initial && setCount(count - 1);
    };

    return (
        <div className="count">
            <div className="buttons">
                <button onClick={suma}>+</button>
                <p>{count}</p>
                <button onClick={resta}>-</button>
            </div>
            <div className="add-cart">
                <button>Add to Cart!</button>
            </div>
        </div>
    );
};

export default ItemCount;
