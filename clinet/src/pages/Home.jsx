import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import { assets } from '../assets/assets.js'
import '../css/pages/home.css'

function Home() {

    const continues = [
        {
            id: 1,
            cover: assets.book2,
            title: 'Redwood Court (Reeses Book Club)',
            author: 'DeLana R.A. Dameron',
            progress: '10',
        },
        {
            id: 2,
            cover: assets.book3,
            title: 'Crosshairs',
            author: 'James Patterson',
            progress: '55',
        },
        
        {
            id: 3,
            cover: assets.book1,
            title: 'Elevate and Dominate',
            author: 'Deion Sanders',
            progress: '1',
        },
    ]

    const toppicks = [
        {
            id: 1,
            cover: assets.book6,
            title: 'Dark Matter',
            desc: 'New York Times Bestselling author.'
        },
        {
            id: 2,
            cover: assets.book5,
            title: 'Are You Happy In Your Life?',
            desc: 'Bestselling author of Award Pines'
        },
        {
            id: 3,
            cover: assets.book4,
            title: 'RECURSION — Blake Crouch',
            desc: 'New York times Bestseller.'
        },
    ]

    const darkenColor = (r, g, b, factor = 0.6) => {
        return [
            Math.floor(r * factor),
            Math.floor(g * factor),
            Math.floor(b * factor),
        ];
    };

    return (
        <>
            <div id="home">
                {/**Continue Readings */}
                <div className="continueReadings">
                    <div className="conRedTitle">
                        <h3>Continue</h3>
                    </div>
                    {/**Continue Readings Scroller */}
                    <div className="conScroller">

                        {
                            continues.map((contine, index) => {
                                    const imgRef = useRef(null);
                                    const [bgGradient, setBgGradient] = useState("");

                                    useEffect(() => {
                                    const img = imgRef.current;
                                    if (!img) return;

                                    const extractColor = () => {
                                        const colorThief = new ColorThief();
                                        try {
                                            const [r, g, b] = colorThief.getColor(img); // dominant
                                            const [dr, dg, db] = darkenColor(r, g, b, 0.5); // darker shade

                                            const gradient = `linear-gradient(135deg, rgb(${r}, ${g}, ${b}), rgb(${dr}, ${dg}, ${db}))`;
                                            setBgGradient(gradient);
                                        } catch (err) {
                                            console.error("Color extraction failed:", err);
                                        }
                                    };

                                    if (img.complete) {
                                        extractColor();
                                    } else {
                                        img.addEventListener("load", extractColor);
                                        return () => img.removeEventListener("load", extractColor);
                                    }
                                    }, []); // run only once
                                return(
                                
                                    <div className="continueBookCard" key={index} style={{ background: bgGradient }}>
                                        <div className="conBookCover">
                                            <div className="cover">
                                                <img src={contine.cover} ref={imgRef} alt="" />
                                            </div>
                                        </div>
                                        <div className="conBookDetails">
                                            <p>{contine.title}</p>
                                            <span className='meta'>{contine.author}</span>
                                            <span className='meta progression'>Book — {contine.progress}%</span>
                                        </div>
                                    </div>
                                    )
                                }
                            )
                        }

                    </div>
                </div>

                {/**Top Picks */}
                <div className="top--picks">
                    <div className="topPicksTitle">
                        <h3>Top Picks</h3>
                    </div>
                    
                    <div className="picks">
                        {
                            toppicks.map((toppick, index) => {
                                    const imgRef = useRef(null);
                                    const [bgGradient, setBgGradient] = useState("");

                                    useEffect(() => {
                                    const img = imgRef.current;
                                    if (!img) return;

                                    const extractColor = () => {
                                        const colorThief = new ColorThief();
                                        try {
                                            const [r, g, b] = colorThief.getColor(img); // dominant
                                            const [dr, dg, db] = darkenColor(r, g, b, 0.5); // darker shade

                                            const gradient = `linear-gradient(135deg, rgb(${r}, ${g}, ${b}), rgb(${dr}, ${dg}, ${db}))`;
                                            setBgGradient(gradient);
                                        } catch (err) {
                                            console.error("Color extraction failed:", err);
                                        }
                                    };

                                    if (img.complete) {
                                        extractColor();
                                    } else {
                                        img.addEventListener("load", extractColor);
                                        return () => img.removeEventListener("load", extractColor);
                                    }
                                    }, []); // run only once
                                return (
                                    <div className="pickCard" key={index} style={{ background: bgGradient }}>
                                        <div className="pickBanner">
                                            <img src={toppick.cover} ref={imgRef} alt="" />
                                        </div>
                                        <div className="pickContext">
                                            <h3>{toppick.title}</h3>
                                            <p>{toppick.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home