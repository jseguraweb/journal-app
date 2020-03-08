import React, { useState } from 'react'
import '../style/SearchForm.scss'
import { FaSearch } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'

const SearchForm = ({ handleSubmit }) => {

    const [input, setInput] = useState('');
    const appearFromTop = useSpring({ marginTop: 0, from: { marginTop: -1000, transitionDuration: '.8s' } })

    const getInput = e => {
        setInput(e.target.value);
    }

    return (
        <animated.form style={appearFromTop} action="#" className="search-bar" onSubmit={(e) => { e.preventDefault(); handleSubmit(input); setInput('') }} >
            <input type="text" onChange={getInput} value={input} /><button className="search-btn"><FaSearch className="search-icon" /></button>
        </animated.form>
    )
}

export default SearchForm