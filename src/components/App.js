import React, { useState, useEffect } from 'react'
import '../style/App.scss'
import Navigation from './Navigation'
import ContainerOfNews from './ContainerOfNews'

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState('');
  const [userInput, setUserInput] = useState('');

  const shuffleArray = array => array.sort(() => Math.random() - 0.5);

  const fetchData = async () => {
    try {
      const serverDataSports = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=701dc18d676e4d62a0c678f128ece113');
      let sportNews = await serverDataSports.json();
      sportNews.articles.map(el => el.topic = 'sport')
      const serverDataTech = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=701dc18d676e4d62a0c678f128ece113');
      let techNews = await serverDataTech.json();
      techNews.articles.map(el => el.topic = 'technology')
      const serverDataBusiness = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=701dc18d676e4d62a0c678f128ece113');
      let businessNews = await serverDataBusiness.json();
      businessNews.articles.map(el => el.topic = 'business')
      const serverDataEntertainment = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=701dc18d676e4d62a0c678f128ece113');
      let entertainmentNews = await serverDataEntertainment.json();
      entertainmentNews.articles.map(el => el.topic = 'entertainment')

      let allNews = sportNews.articles.concat(techNews.articles, businessNews.articles, entertainmentNews.articles);
      allNews = shuffleArray(allNews)

      // if (topic === '') {
      //   document.querySelector('.box').classList.add('box1');
      // }

      setNews(allNews);
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }

  // filterNews = topic => {
  //   this.setState({
  //     topic: topic
  //   })
  // }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Navigation />
      {
        news.map((el, i) => <p key={i}>{el.title}</p>)
      }
      {/* <ContainerOfNews currentTopic={this.state.topic} /> */}
    </div>
  )
}

export default App