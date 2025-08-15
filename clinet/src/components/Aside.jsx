import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/aside.css'

function Aside() {
    return (
        <aside>
            <div className="ireadSidebar">
                <div className="ireadSidebarContext">
                    <h3>iRead</h3>
                    <span className='meta'>Your Smart, Elegant Reading Companion.</span>
                </div>
            </div>
            <div className="asideNavigation">
                <ul className="MainNavigation">
                    <NavLink to='/'>
                        <li className="MN--item">
                            <div className="mnIcon">
                                <span>
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" fill='currentColor' viewBox="0 0 24 24" width='24' height='24'><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z"></path></svg>
                                </span>
                            </div>
                            <div className="mnText">
                                <span className='meta'>Home</span>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to='/library'>
                        <li className="MN--item">
                            <div className="mnIcon">
                                <span>
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" fill='currentColor' viewBox="0 0 24 24" width='24' height='24'><path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866M16 4.732V20h4V7.041zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1"></path></svg>
                                </span>
                            </div>
                            <div className="mnText">
                                <span className='meta'>Library</span>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to='/search'>
                        <li className="MN--item">
                            <div className="mnIcon">
                                <span>
                                    <svg data-encore-id="icon" role="img" fill='currentColor' width='23' height="23" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24"><path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path></svg>
                                </span>
                            </div>
                            <div className="mnText">
                                <span className='meta'>Search</span>
                            </div>
                        </li>
                    </NavLink>
                </ul>
                <ul className="SubNavigation"></ul>
            </div>
        </aside>
    )
}

export default Aside