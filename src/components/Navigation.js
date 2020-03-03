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
                        <li onClick={() => this.props.filter('business')}>Business</li>
                        <li onClick={() => this.props.filter('sport')}>Sport</li>
                        <li onClick={() => this.props.filter('entertainment')}>Entertainment</li>
                        <li onClick={() => this.props.filter('technology')}>Technology</li>
                    </ul>
                </nav>
            </header>
        )
    }
}
