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
            <h1 onClick={() => changeTopic('')}>The Journal App</h1>
            <FaBars className="icon-menu" onClick={() => setMenuOpen(!menuOpen)} />
            <nav style={openMenu()}>
                <ul>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('business') }}>BUSINESS</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('sport') }}>SPORT</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('entertainment') }}>ENTERTAINMENT</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('technology') }}>TECHNOLOGY</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation