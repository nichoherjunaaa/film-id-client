import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
    const list = {
        items: ['Home', 'Movies', 'TV Shows', 'About', 'Information']
    }
    return (
        <nav className="flex justify-between items-center bg-base-100 max-w-7xl p-1 my-6">
            <ul className="flex items-center">
                {list.items.map((item, index) => (
                    <li key={index} className="mx-4">
                        <a href={`/${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center">
                <li className="mx-3">
                    <Link to="/cart" className="text-2xl">
                        <FaShoppingCart />
                    </Link>
                </li>
                <li className="mx-3">
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li className="mx-3">
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar