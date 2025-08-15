import React from 'react'
import LibraryBook from '../components/LibraryBook.jsx'
import { assets } from '../assets/assets.js'
import '../css/pages/library.css'

function Library() {
    const books = [
        {
            id: 1,
            cover: assets.lib1,
            title: 'And Then There Were None: The World’s Favourite Agatha Christie Book',
            author: 'by Agatha Christie (Author)',
            desc: 'The book that topped the international online poll held in Agatha Christies 125th birthday year to discover which of her 80 crime books was the worlds favourite.',
        },
        {
            id: 2,
            cover: assets.lib2,
            title: 'VERITY',
            author: 'by Colleen Hoover (Author)',
            desc: 'Are you ready to stay up all night? Rebecca meets Gone Girl in this shocking, unpredictable thriller with a twist that will leave you reeling . . . ',
        },
        {
            id: 3,
            cover: assets.lib3,
            title: 'Lost Transmissions: The Secret History of Science Fiction and Fantasy',
            author: 'by Desirina Boskovich (Author), Jeff Vandermeer (Foreword)',
            desc: 'This illustrated journey through lost, overlooked, and uncompleted works is “a fascinating enrichment of the history of sf and fantasy” (Booklist).',
        },
        {
            id: 4,
            cover: assets.lib4,
            title: 'Project Hail Mary: From the Sunday Times bestselling author of The Martian - Soon to be a major motion picture',
            author: 'by Andy Weir (Author) ',
            desc: `Weir's finest work to date. . . This is the one book I read last year that I am certain I can recommend to anyone, no matter who, and know they'll love it.`,
        },
        {
            id: 5,
            cover: assets.lib5,
            title: `Harry Potter and the Philosopher's Stone`,
            author: 'by J.K. Rowling (Author)',
            desc: `Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world. The magic starts here.Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. The magic starts here!These editions of the classic and internationally bestselling Harry Potter series feature thrilling jacket artwork by award-winning illustrator Jonny Duddle. They are the perfect starting point for anyone who's ready to lose themselves in the greatest children's story of all time.`,
        },
    ]
    return (
        <>
            <div id="library">

                <div className="libHeadings">
                    <h3>Want to Read</h3>
                    <p>Books you would like to read next.</p>
                </div>

                <div className="libraryShow">
                    
                    {
                        books.map((book, index) => {
                            
                            return(
                                <LibraryBook key={index} book={book} />
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Library