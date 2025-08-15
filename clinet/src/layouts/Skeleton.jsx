import React from 'react'
import { assets } from '../assets/assets.js'
import '../css/skeleton.css'

function Skeleton() {
    return (
        <>
            <div className="skeletonLoader">
                <div className="loader">
                    <img src={assets.spinner} alt="" />
                </div>
            </div>
        </>
    )
}

export default Skeleton