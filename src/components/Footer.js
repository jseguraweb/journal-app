import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import '../style/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <p className="copyright">Made with <FaHeart className="heart" /> by Jaime Segura</p>
            <div className="icons"><a href="https://github.com/jseguraweb" className="icon"><FaGithubSquare /></a> <a href="https://www.linkedin.com/in/jaime-segura/" className="icon"><FaLinkedin /></a></div>
        </footer>
    )
}

export default Footer