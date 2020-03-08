import React, { useState } from 'react'
import '../style/Navigation.scss'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'

const Navigation = ({ changeTopic }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const appearFromTop = useSpring({ marginTop: 0, from: { marginTop: -1000, transitionDuration: '.8s' } })
    const appearanceMenu = useSpring({ opacity: menuOpen ? 1 : 0, display: menuOpen ? 'block' : 'none', zIndex: menuOpen ? 2 : 1 })

    return (
        <animated.div style={appearFromTop}>
            <header>
                <h1 onClick={() => changeTopic('')}>The Journal App</h1>
                {
                    menuOpen ? <FaTimes className="icon-menu" onClick={() => setMenuOpen(!menuOpen)} /> : <FaBars className="icon-menu" onClick={() => setMenuOpen(!menuOpen)} />
                }
            </header>
            <animated.nav style={appearanceMenu}>
                <ul>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('business') }}>BUSINESS</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('sport') }}>SPORT</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('entertainment') }}>ENTERTAINMENT</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('technology') }}>TECHNOLOGY</li>
                </ul>
            </animated.nav>
        </animated.div>
    )
}

export default Navigation