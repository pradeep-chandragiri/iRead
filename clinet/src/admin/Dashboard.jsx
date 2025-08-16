import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <>
            <div className="dashboard">
                <h1>Admin Dashboard</h1>
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard