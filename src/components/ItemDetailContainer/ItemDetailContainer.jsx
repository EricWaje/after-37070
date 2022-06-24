import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { traerProducto } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        traerProducto(id)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '40px',
            }}
        >
            <div className="idc">
                <ItemDetail item={product} />
            </div>
        </div>
    );
};

export default ItemDetailContainer;
