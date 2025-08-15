import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            {/**NewsLetter Subscription
                <div className="newsLetter">
                    <div className="newsLetterContext">
                        <h2>✉️ Stay In The Loop.</h2>
                        <p>Subscribe to our Newsletter and Get the latest updates and reading tips from iRead.</p>
                    </div>
                    <div className="newsLetterInteract">
                        <form method="post"></form>
                        <div className="newsLetterForm">
                            <input type="text" name="newsletter" placeholder='Enter email address'
                            autoComplete='off' spellCheck='false' />
                            <button className='newsFormSubmit'>Subscribe</button>
                        </div>
                    </div>
                </div>
            */}
            {/**Footer Links */}
            <div className="footerCover">
                <div className="footerLogo">
                    <div className="Branding">
                        <button>
                            <img src={assets.iReadFavicon} alt="" />
                        </button>
                        <h2>iRead – Your Smart, Elegant Reading Companion.</h2>
                    </div>
                    <div className="brandingLocation">
                        <span className="meta">Kadapa</span>
                        <span className="meta">4/860 Mahatma Nagar, Yerraguntla</span>
                        <span className="meta">Andhra Pradesh 516309</span>
                    </div>
                </div>
                <div className="footerUL">
                    <h3>Company</h3>
                    <ul>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Features</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                        <li>
                            <Link>Terms of Service</Link>
                        </li>
                        <li>
                            <Link>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="madeWithLove">
                <span className="meta">© 2025 iRead. All rights reserved. | a <a href="#">Pradeep Chandragiri</a> production.</span>
                <span className="meta">( Made with ❤️ )</span>
            </div>
        </footer>
    )
}

export default Footer