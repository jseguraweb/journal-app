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
        console.log('working');
        if (this.state.menuOpen) {
            return 'block'
        } else {
            return 'none'
        }
    }

    render() {

        return (
            <header>
                <h1>Journal App</h1>
                <FaBars className="icon-menu" onClick={this.toggleMenu} />
                <nav style={{ display: this.isMenuOpen() }}>
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
