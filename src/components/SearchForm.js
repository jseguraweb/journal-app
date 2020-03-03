import React, { Component } from 'react'
import '../style/SearchForm.scss'
import { FaSearch } from 'react-icons/fa'

export default class SearchForm extends Component {
    state = {
        input: ''
    }

    getInput = e => {
        this.setState({
            input: e.target.value
        })
        this.props.passInput(this.state.input);
    }

    render() {
        return (
            <form action="#" className="search-bar" >
                <FaSearch className="search-icon" /><input type="text" onChange={this.getInput} value={this.state.input} />
            </form>
        )
    }
}
