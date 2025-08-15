import React, { useState  } from "react";
import { assets } from '../assets/assets.js'
import ListCard from "../components/ListCard.jsx";
import '../css/pages/search.css'

function Search() {

    const [activeTab, setActiveTab] = useState("List");

    const books = [
        {
            id: 1,
            cover: assets.lib1,
            title: 'And Then There Were None: The World’s Favourite Agatha Christie Book',
            author: 'Agatha Christie',
            desc: 'The book that topped the international online poll held in Agatha Christies 125th birthday year to discover which of her 80 crime books was the worlds favourite.',
        },
        {
            id: 2,
            cover: assets.lib2,
            title: 'VERITY',
            author: 'Colleen Hoover',
            desc: 'Are you ready to stay up all night? Rebecca meets Gone Girl in this shocking, unpredictable thriller with a twist that will leave you reeling . . . ',
        },
        {
            id: 3,
            cover: assets.lib3,
            title: 'Lost Transmissions: The Secret History of Science Fiction and Fantasy',
            author: 'Desirina Boskovich (Author), Jeff Vandermeer (Foreword)',
            desc: 'This illustrated journey through lost, overlooked, and uncompleted works is “a fascinating enrichment of the history of sf and fantasy” (Booklist).',
        },
        {
            id: 4,
            cover: assets.lib4,
            title: 'Project Hail Mary: From the Sunday Times bestselling author of The Martian - Soon to be a major motion picture',
            author: 'Andy Weir',
            desc: `Weir's finest work to date. . . This is the one book I read last year that I am certain I can recommend to anyone, no matter who, and know they'll love it.`,
        },
        {
            id: 5,
            cover: assets.lib5,
            title: `Harry Potter and the Philosopher's Stone`,
            author: 'J.K. Rowling (Author)',
            desc: `Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world. The magic starts here.Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. The magic starts here!These editions of the classic and internationally bestselling Harry Potter series feature thrilling jacket artwork by award-winning illustrator Jonny Duddle. They are the perfect starting point for anyone who's ready to lose themselves in the greatest children's story of all time.`,
        },
    ]

    return (
        <div id="search">
            <div className="searchBarPosition">
                <div className="searchBar">
                    <input type="text" placeholder="Search for books, authors and more" spellCheck='false' autoComplete="off" autoCorrect="off" />
                    <button className="searchButton">
                        <svg data-encore-id="icon" role="img" fill='currentColor' width='23' height="23" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24"><path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path></svg>
                    </button>
                </div>
                <div className="resultLayout">
                    <button className={activeTab === "List" ? "tab active" : "tab"} onClick={() => setActiveTab("List")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
                            <path d="M12 5.5L21 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M12 12L21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M12 18.5L21 18.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M8 5.5H3M4.04167 8L6.95833 3M6.95833 8L4.04167 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8 18.5H3M4.04167 21L6.95833 16M6.95833 21L4.04167 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <button className={activeTab === "Grid" ? "tab active" : "tab"} onClick={() => setActiveTab("Grid")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
                            <path d="M13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M9 3V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M15 3V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M21.0001 9L3.00014 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M21.0001 15L3.00014 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {activeTab === "List" && 
                <div className="ListView">
                    {
                        books.map((book, index) => {
                            return(
                                <ListCard key={index} book={book} />
                            )
                        })
                    }
                </div>
            }
            {activeTab === "Grid" && 
                <div className="GridView"></div>
            }
        </div>
    )
}

export default Search