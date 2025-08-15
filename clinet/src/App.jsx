import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useUser, useAuth } from '@clerk/clerk-react'

import Login from './auth/Login.jsx'
import Layout from './layouts/Layout.jsx'

import Home from './pages/Home.jsx'
import Library from './pages/Library.jsx'
import BookDetails from './pages/BookDetails.jsx'
import Search from './pages/Search.jsx'
import Skeleton from './layouts/Skeleton.jsx'

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
                </Route>
            </Routes>
        </>
    )
}

export default App