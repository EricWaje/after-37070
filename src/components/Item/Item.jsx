import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="item">
            <div>
                <img src={item.img} alt="" width="200" />
            </div>
            <div className="info">
                <h2>{item.name}</h2>
                <h3>$ {item.price}</h3>
                <Link to={`/detail/${item.id}`}>Ver detalle</Link>
            </div>
        </div>
    );
};

export default Item;
