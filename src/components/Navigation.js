import React, { useState } from 'react'
import '../style/Navigation.scss'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'

const Navigation = ({ changeCategory, category }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const appearFromTop = useSpring({ marginTop: 0, from: { marginTop: -1000, transitionDuration: '.8s' } })
    const appearanceMenu = useSpring({ opacity: menuOpen ? 1 : 0, display: menuOpen ? 'block' : 'none', zIndex: menuOpen ? 2 : 1 })

    return (
        <animated.div style={appearFromTop}>
            <header>
                <h1 onClick={() => changeCategory('World')}>The Journal App</h1>
                {
                    menuOpen ? <FaTimes className="icon-menu" onClick={() => setMenuOpen(!menuOpen)} /> : <FaBars className="icon-menu" onClick={() => setMenuOpen(!menuOpen)} />
                }
            </header>
            <animated.nav style={appearanceMenu}>
                <ul>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeCategory('World') }} style={{ backgroundColor: category === 'World' ? '#fff' : '#000', color: category === 'World' ? '#000' : '#fff' }}>WORLD</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeCategory('Entertainment') }} style={{ backgroundColor: category === 'Entertainment' ? '#fff' : '#000', color: category === 'Entertainment' ? '#000' : '#fff' }}>ENTERTAINMENT</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeCategory('Business') }} style={{ backgroundColor: category === 'Business' ? '#fff' : '#000', color: category === 'Business' ? '#000' : '#fff' }}>BUSINESS</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeCategory('Technology') }} style={{ backgroundColor: category === 'Technology' ? '#fff' : '#000', color: category === 'Technology' ? '#000' : '#fff' }}>TECHNOLOGY</li>
                    <li onClick={() => { setMenuOpen(!menuOpen); changeCategory('Sports') }} style={{ backgroundColor: category === 'Sports' ? '#fff' : '#000', color: category === 'Sports' ? '#000' : '#fff' }}>SPORT</li>
                </ul>
            </animated.nav>
        </animated.div>
    )
}

export default Navigation