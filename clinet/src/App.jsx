import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser, useAuth } from '@clerk/clerk-react'

// Importing components
import Login from './auth/Login.jsx'
import Layout from './layouts/Layout.jsx'

//User routes
import Home from './pages/Home.jsx'
import Library from './pages/Library.jsx'
import BookDetails from './pages/BookDetails.jsx'
import Search from './pages/Search.jsx'
import Skeleton from './layouts/Skeleton.jsx'

// Admin routes
import AdminLayout from './admin/AdminLayout.jsx'
import Dashboard from './admin/Dashboard.jsx'
import Stats from './admin/Stats.jsx'
import Users from './admin/Users.jsx'
import Books from './admin/Books.jsx'
import { useEffect } from 'react'

function App() {
    const { user } = useUser();
    const { getToken } = useAuth();
    const { isLoaded } = useAuth();

    // Function to log the token
    const logToken = async () => {
        console.log(await getToken());
    }

    useEffect(() => {
        if(user){
            logToken()
        }
    }, [user])

    return (
        <>
            {!isLoaded && (
                <Skeleton />
            )}
            <Routes>
            <Route path="/" element={!user ? <Login /> : <Layout />}>
                <Route index element={<Home />} />
                <Route path="library" element={<Library />} />
                <Route path="search" element={<Search />} />
                <Route path="book/:bookid" element={<BookDetails />} />
            </Route>

            {user?.publicMetadata?.role === "admin" ? (
                <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="books" element={<Books />} />
                <Route path="*" element={<Dashboard />} /> {/* fallback for admins */}
                </Route>
            ) : user ? (
                <Route path="/admin/*" element={<Navigate to="/" replace />} />
            ) : null}
            </Routes>
        </>
    )
}

export default App