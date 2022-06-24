import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h2>After</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category/remeras">Remeras</Link>
                </li>
                <li>
                    <Link to="/category/camisas">Camisas</Link>
                </li>
                <li>
                    <Link to="/category/gorras">Gorras</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
