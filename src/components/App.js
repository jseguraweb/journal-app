import React, { Component } from 'react'
import '../style/App.scss'
import Navigation from './Navigation'
import ContainerOfNews from './ContainerOfNews'

export default class App extends Component {
  state = {
    topic: ''
  }

  filterNews = topic => {
    this.setState({
      topic: topic
    })
  }

  render() {
    return (
      <div>
        <Navigation filterNews={this.filterNews} />
        <ContainerOfNews currentTopic={this.state.topic} />
      </div>
    )
  }
}
