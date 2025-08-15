import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import { assets } from '../assets/assets.js'
import '../css/login.css'

function Login() {
    return (
        <>
            <div className="LoginWrapper">
                {/**App Info */}
                <div className="AppInfo">
                    <div className="appInfoContainer">
                        {/**App Logo */}
                        <div className="iReaderLogo">
                            <button className='LogoIcon'>
                                <img src={assets.iReadFavicon} alt="iRead – Your Smart, Elegant Reading Companion" />
                            </button>
                        </div>
                        {/**App Description & Links Wrapper */}
                        <div className="AppDescLinkWrapper">
                            <div className="iReaderDescription">
                                <h1>iRead – Your Smart, Elegant Reading Companion</h1>
                                <p>Discover iRead, a beautifully designed reading app that organizes your books, tracks your progress, and makes every reading session effortless. Enjoy smart library management, reading stats, and a distraction-free experience.</p>
                            </div>
                            <div className="iReaderLinks">
                                <button className='LinkBtn'>
                                    <img src={assets.gplay} alt="" />
                                </button>
                                <button className='LinkBtn'>
                                    <img src={assets.appst} alt="" />
                                </button>
                            </div>
                        </div>
                        {/**App Logo */}
                        <div className="iReaderPaT">
                            <span className="meta">Your data is stored securely and used only to improve iRead.We never sell your information. By continuing, you agree to use iRead responsibly.</span>
                        </div>
                    </div>
                </div>

                {/**Clerk Component */}
                <div className="ClerLoginComponent">
                    <SignIn />
                </div>
            </div>
        </>
    )
}

export default Login