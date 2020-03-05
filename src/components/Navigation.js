import React, { useState } from 'react'
import '../style/Navigation.scss'
import { FaBars } from 'react-icons/fa'

const Navigation = ({ changeTopic }) => {
    const [menuOpen, setMenuOpen] = useState(false)

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
            <h1 onClick={() => changeTopic('')}>Journal App</h1>
            <FaBars className="icon-menu" onClick={() => setMenuOpen(!menuOpen)} />
            <nav style={openMenu()}>
                <ul>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('business') }}>Business</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('sport') }}>Sport</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('entertainment') }}>Entertainment</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('technology') }}>Technology</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation