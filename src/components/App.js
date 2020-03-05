import React, { useState, useEffect } from 'react'
import '../style/App.scss'
import Navigation from './Navigation'
import ContainerOfNews from './ContainerOfNews'
import LoadingPage from './LoadingPage'
import SearchForm from './SearchForm'

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState('');
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetchData()
  }, [])

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
      const shuffleArray = array => array.sort(() => Math.random() - 0.5);
      allNews = shuffleArray(allNews)

      setNews(allNews);
      setLoading(false);
    } catch (error) {
      console.log('ERROR:', error)
    }
  }

  // props

  const changeTopic = topic => setTopic(topic)

  const passInput = input => setUserInput(input)

  return (
    <div>
      <Navigation changeTopic={changeTopic} />
      {/* <SearchForm passInput={passInput} /> */}
      {/* {news.length > 1 ? <p>YES</p> : null} */}
      {news.length > 1 ? <ContainerOfNews news={news} topic={topic} userInput={userInput} /> : null}
      {loading ? <LoadingPage /> : null}
    </div>
  )
}

export default App