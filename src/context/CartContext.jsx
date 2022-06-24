import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

// 1. Creo el contexto y lo exporto para poder consumirlo luego en los componentes que necesitren información
export const CartContext = createContext();

//2. creo mi componente qu eluego va a envolver en App a todos los children
export const CartProvider = ({ children }) => {
    //estados
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const prueba = () => {
        console.log('Desde el contexto');
    };

    //funcion para agregar al carrito
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            //sumar cantidad
            console.log('ya esta en el carrito, sumale la cantidad nomá');
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
        //console.log('Item:', item);
        //console.log('Cantidad:', cantidad);
        //console.log({ ...item, cantidad });
    };

    //función para verificar si el producto ya está en el carrito
    const isInCart = (id) => {
        //some devuelve true o false
        return cart.some((prod) => prod.id === id);
    };

    //función para calcular $ del carrito

    //función para calcular total de unidades que tengo en el carrito y mostrarlas en el cartWidget

    //funcion para eliminar un item del carrito

    //funcion para eliminar todos los items del carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, prueba, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
