import React, { useState } from 'react'
import '../style/SearchForm.scss'
import { FaSearch } from 'react-icons/fa'

const SearchForm = ({ handleSubmit }) => {

    const [input, setInput] = useState('');

    const getInput = e => {
        setInput(e.target.value);
    }

    console.log('SearchForm:', input);

    return (
        <form action="#" className="search-bar" onSubmit={(e) => { e.preventDefault(); handleSubmit(input); setInput('') }} >
            <input type="text" onChange={getInput} value={input} /><FaSearch className="search-icon" />
        </form>
    )
}

export default SearchForm