import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";

function ListCard({ book }) {

    const darkenColor = (r, g, b, factor = 0.6) => {
            return [
                Math.floor(r * factor),
                Math.floor(g * factor),
                Math.floor(b * factor),
            ];
    };
    
    const imgRef = useRef(null);
    const [bgGradient, setBgGradient] = useState("");

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        const extractColors = () => {
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
        extractColors();
        } else {
        img.addEventListener("load", extractColors);
        return () => img.removeEventListener("load", extractColors);
        }
    }, []);
    
    return (
        <div className="ListCard">
            <div className="ListCardLayout">
                <div className="ListCardImage">
                    <div className="ListCardCover" style={{ background: bgGradient }}>
                        <img src={ book.cover }  ref={imgRef} alt={book.title} />
                    </div>
                </div>
                <div className="ListCardDetails">
                    <h2>{ book.title }</h2>
                    <p>{ book.desc }</p>
                    <span className="meta">by { book.author } (Author)</span>
                </div>
            </div>
        </div>
    )
}

export default ListCard