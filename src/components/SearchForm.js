import React, { Component } from 'react'
import '../style/SearchForm.scss'
import { FaSearch } from 'react-icons/fa'

export default class SearchForm extends Component {
    state = {
        input: ''
    }

    getInput = e => {
        e.preventDefault();
        this.setState({
            input: e.target.value
        })
        this.props.passInput(this.state.input);
    }

    render() {
        return (
            <form action="search-news" className="search-bar" >
                <input type="text" onChange={this.getInput} value={this.state.input} /><FaSearch className="search-icon" />
            </form>
        )
    }
}
