import React, { Component } from 'react'
import '../style/App.scss'
import Navigation from './Navigation'
import ContainerOfNews from './ContainerOfNews'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <ContainerOfNews />
      </div>
    )
  }
}
