import React, { Component } from 'react'
import '../style/App.scss'
import Navigation from './Navigation'
import ContainerOfNews from './ContainerOfNews'

export default class App extends Component {
  state = {
    topic: '',
    input: ''
  }

  filterNews = topic => {
    this.setState({
      topic: topic
    })
  }

  passInput = input => {
    this.setState({
      input: input
    })
    console.log(this.state.input);
  }

  render() {

    return (
      <div>
        <Navigation filterNews={this.filterNews} passInput={this.passInput} />
        <ContainerOfNews currentTopic={this.state.topic} currentInput={this.state.input} />
      </div>
    )
  }
}
