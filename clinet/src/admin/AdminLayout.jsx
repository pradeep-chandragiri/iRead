import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import './css/admin.css'

function AdminLayout() {
    return (
        <>
            <main className='adminLayout'>
                <Sidebar />
                <div className="adminPannel">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default AdminLayout