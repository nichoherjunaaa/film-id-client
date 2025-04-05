import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const PublicLayout = () => {
    return (
        <>
        <Navbar/>
        <main>
            <div className="w-full min-h-screen flex justify-center items-center p-4 max-w-7xl">
                <Outlet />
            </div>
        </main>
        </>
    )
}

export default PublicLayout