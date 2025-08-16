import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
import Dashboard from './admin/Dashboard.jsx'
import Stats from './admin/Stats.jsx'
import Users from './admin/Users.jsx'
import Books from './admin/Books.jsx'

function App() {
    const { user } = useUser();
    const { isLoaded } = useAuth();
    return (
        <>
            {!isLoaded && (
                <Skeleton />
            )}
            <Routes>
                <Route path='/' element={ !user ? <Login /> : <Layout /> }>
                    <Route index element={ <Home /> } />
                    <Route path='/library' element={ <Library /> } />
                    <Route path='/search' element={ <Search /> } />
                    <Route path='/book/:bookid' element={ <BookDetails /> } />

                    <Route path='/admin' element={ <Dashboard /> }>
                        <Route path='admin' element={ <Stats /> } />
                        <Route path='users' element={ <Users /> } />
                        <Route path='books' element={ <Books /> } />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App