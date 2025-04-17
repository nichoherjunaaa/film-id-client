import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const PublicLayout = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <Navbar/>
                <main>
                    <div className="w-full min-h-screen flex justify-center p-4 max-w-7xl">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default PublicLayout