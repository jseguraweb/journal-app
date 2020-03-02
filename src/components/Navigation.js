import React, { Component } from 'react'
import '../style/Navigation.scss'
import { FaBars } from 'react-icons/fa'

export default class Navigation extends Component {
    state = {
        menuOpen: false
    }

    toggleMenu = e => {
        let toggle = !this.state.menuOpen;
        this.setState({
            menuOpen: toggle
        })
    }

    isMenuOpen = () => {
        if (this.state.menuOpen) {
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

    render() {

        return (
            <header>
                <h1>Journal App</h1>
                <FaBars className="icon-menu" onClick={this.toggleMenu} />
                <nav style={this.isMenuOpen()}>
                    <ul>
                        <li><a href="#">Politics</a></li>
                        <li><a href="#">Economics</a></li>
                        <li><a href="#">Sport</a></li>
                        <li><a href="#">Culture</a></li>
                        <li><a href="#">Technology</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
