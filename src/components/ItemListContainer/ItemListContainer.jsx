import React, { useState, useEffect } from 'react';
import { productos } from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //apis, llamados al backend
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 2000);
        });
        //console.log(traerProductos)
        traerProductos
            .then((res) => {
                //console.log(res)
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //console.log(products);

    return (
        <>
            <div>{saludo}</div>
            <ItemList items={products} />
        </>
    );
};

export default ItemListContainer;
