import React from 'react'
import { Outlet } from 'react-router-dom'
const PublicLayout = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center p-4">
            <Outlet />
        </div>
    )
}

export default PublicLayout