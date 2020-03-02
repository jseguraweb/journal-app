import React, { Component } from 'react'
import '../style/Navigation.scss'
import { FaBars } from 'react-icons/fa'

export default class Navigation extends Component {
    state = {
        menuOpen: false
    }

    toggleMenu = e => {
        let navMenu = e.currentTarget.nextElementSibling;
        if (this.state.menuOpen) {
            this.setState({
                menuOpen: false
            })
            navMenu.style.opacity = 0
            navMenu.style.zIndex = -1
        } else {
            this.setState({
                menuOpen: true
            })
            navMenu.style.opacity = 1
            navMenu.style.zIndex = 2
        }
    }

    render() {

        return (
            <nav>
                <h1>Journal App</h1>
                <FaBars className="icon-menu" onClick={this.toggleMenu} />
                <ul>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Economics</a></li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Culture</a></li>
                    <li><a href="#">Technology</a></li>
                </ul>
            </nav>
        )
    }
}
