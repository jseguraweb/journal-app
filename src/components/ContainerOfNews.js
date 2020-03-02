import React, { Component } from 'react'
import '../style/ContainerOfNews.scss'
import NewBox from './NewBox'

export default class ContainerOfNews extends Component {
    render() {
        return (
            <div className="container">
                <div className="box box1"><NewBox /></div>
                <div className="box box2"><NewBox /></div>
                <div className="box box3"><NewBox /></div>
                <div className="box box4"><NewBox /></div>
                <div className="box box5"><NewBox /></div>
                <div className="box box6"><NewBox /></div>
                <div className="box box7"><NewBox /></div>
                <div className="box box8"><NewBox /></div>
            </div>
        )
    }
}
