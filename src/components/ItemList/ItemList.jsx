import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
    return (
        <div>
            {/*             {items.map(() => {
                return <h2>Hola</h2>;
            })} */}
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
