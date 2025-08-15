import React from 'react'
import { useLocation } from "react-router-dom";
import { UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

function Header() {

    const location = useLocation();

    // Map each route path to a page title
    const routeTitles = {
        "/": "Home",
        "/library": "Library",
        "/browse": "Browse",
        "/profile": "Profile",
    };

    // Pick the matching title or fallback to the path name
    const title = routeTitles[location.pathname] || location.pathname.replace("/", "").replace(/-/g, " ");

    return (
        <header>
            <div className="presetShower">
                <div className="LocIndicator">
                    <h2>{ title }</h2>
                </div>
                <div className="ProgressIndicator">
                    <span className='circleProgress'></span>
                    <span className="meta">
                        <span className="accent">Today's Reading </span>
                        Goal achieved
                    </span>
                </div>
            </div>
            <div className="profileLocator">
                <UserButton />
            </div>
        </header>
    )
}

export default Header