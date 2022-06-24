import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { traerProductos } from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        traerProductos(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div className="ilc">
            {loading ? <h2>Cargando...</h2> : <ItemList items={products} />}
        </div>
    );
};

export default ItemListContainer;
