import React, { useState, useEffect } from 'react'
import '../style/App.scss'
import Navigation from './Navigation'
import ContainerOfNews from './ContainerOfNews'
import LoadingPage from './LoadingPage'
import SearchForm from './SearchForm'
import Footer from './Footer'

const App = () => {
  const [news, setNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [userInput, setUserInput] = useState('');


  const fetchData = async () => {
    try {
      const request = await fetch("https://newscafapi.p.rapidapi.com/apirapid/news/", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "newscafapi.p.rapidapi.com",
          "x-rapidapi-key": "ed00fcb69dmsh67123677c95871cp1544abjsn90b6a0b9e599"
        }
      });
      let response = await request.json();
      setNews(response);
      setLoading(false);
    } catch (error) {
      console.log('ERROR:', error)
    }
  };


  console.log('News: ', news);
  console.log('category: ', category);

  // props

  const changeCategory = category => {
    setCategory(category);
    setUserInput('');
  }

  const handleSubmit = input => {
    setUserInput(input);
  }

  useEffect(() => {
    fetchData();
    setCategory('Business');
  }, [])


  return (
    <div>
      <Navigation changeCategory={changeCategory} category={category} />
      <SearchForm handleSubmit={handleSubmit} />
      {news.length > 0 ? <ContainerOfNews news={news} category={category} userInput={userInput} /> : null}
      {loading ? <LoadingPage /> : null}
      {news.length > 0 ? <Footer /> : null}
    </div>
  )
}

export default App