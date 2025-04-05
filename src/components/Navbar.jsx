import React from 'react'

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
            <ul className="flex">
                <li className="mx-3">
                    <a href="">Cart</a>
                </li>
                <li className="mx-3">
                    <a href="">Sign In</a>
                </li>
                <li className="mx-3">
                    <a href="">Sign Up</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar