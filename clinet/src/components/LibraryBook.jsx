import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";

function LibraryBook({ book }) {

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
        <div className="book" style={{ background: bgGradient }}>
            <div className="bookCover">
                <img src={ book.cover } ref={imgRef} alt={book.title} crossOrigin="anonymous" />
            </div>
            <div className="bookDetails">
                <p>{ book.title }</p>
                <span className="meta">{ book.desc }</span>
            </div>
        </div>
    )
}

export default LibraryBook