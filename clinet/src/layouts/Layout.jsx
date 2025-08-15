import { useState, useEffect } from "react"
import Aside from '../components/Aside.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsNew from './WhatsNew.jsx'
import Navbar from "../components/Navbar.jsx"
import '../css/layout.css'
import { Outlet } from 'react-router-dom'

function Layout() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const hasSeen = localStorage.getItem("hasSeenWhatsNew");
        if (!hasSeen) {
        setShow(true);
        }
    }, []);

    return (
        <>
            <main>
                <Aside />
                <div id="app">
                    <Header />
                    <div id="appContainer">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
                { 
                    show && (
                        <WhatsNew show={show} setShow={setShow}  />
                    ) 
                }
                <Navbar />
            </main>
        </>
    )
}

export default Layout