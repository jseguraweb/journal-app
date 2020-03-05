import React, { useState } from 'react'
import '../style/Navigation.scss'
import { FaBars } from 'react-icons/fa'

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const openMenu = () => {
        if (menuOpen) {
            return ({
                display: 'block',
                zIndex: '2'
            })
        } else {
            return ({
                display: 'none',
                zIndex: '-1'
            })
        }
    }

    return (
        <header>
            <h1>Journal App</h1>
            <FaBars className="icon-menu" onClick={toggleMenu} />
            <nav style={openMenu()}>
                <ul>
                    <li onClick={toggleMenu}>Business</li>
                    <li onClick={toggleMenu}>Sport</li>
                    <li onClick={toggleMenu}>Entertainment</li>
                    <li onClick={toggleMenu}>Technology</li>
                </ul>
            </nav>
        </header>
    )
}


export default Navigation