import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className="w-full min-h-screen flex justify-center items-center p-4 max-w-7xl">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default PublicLayout