import React, { Component } from 'react'
import '../style/Navigation.scss'

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <h1>Journal App</h1>
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
