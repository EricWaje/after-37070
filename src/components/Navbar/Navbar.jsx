import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h2>After</h2>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Remeras</a>
                </li>
                <li>
                    <a href="">Camisas</a>
                </li>
                <li>
                    <a href="">Gorras</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
