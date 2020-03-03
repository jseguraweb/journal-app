import React, { Component } from 'react'
import '../style/ContainerOfNews.scss'
import NewBox from './NewBox'
import LoadingPage from './LoadingPage'

export default class ContainerOfNews extends Component {
    state = ({
        news: [],
        loading: true
    })

    componentDidMount = async () => {
        try {
            const serverDataSports = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=701dc18d676e4d62a0c678f128ece113');
            const responseSports = await serverDataSports.json();
            const sportNews = responseSports.articles.map(el => el.topic = 'sport')
            const serverDataTech = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=701dc18d676e4d62a0c678f128ece113');
            const responseTech = await serverDataTech.json();
            const techNews = responseTech.articles.map(el => el.topic = 'technology')
            const serverDataBusiness = await fetch('http://newsapi.org/v2/top-headlines?country=gb&apiKey=701dc18d676e4d62a0c678f128ece113');
            const responseBusiness = await serverDataBusiness.json();
            const businessNews = responseBusiness.articles.map(el => el.topic = 'business')
            const serverDataEntertainment = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=701dc18d676e4d62a0c678f128ece113');
            const responseEntertainment = await serverDataEntertainment.json();
            const entertainmentNews = responseEntertainment.articles.map(el => el.topic = 'entertainment')

            let allNews = responseSports.articles.concat(responseTech.articles, responseBusiness.articles, responseEntertainment.articles);
            allNews = this.shuffleArray(allNews)

            this.setState({
                news: allNews,
                loading: false
            })
        } catch (error) {
            alert(error)
        }
    }

    shuffleArray = array => array.sort(() => Math.random() - 0.5);

    filterNews = currentTopic => {
        let newState = this.state.news.filter(el => el.topic === this.propscurrentTopic);
        this.setState({
            news: newState
        })
    }

    render() {

        const { news } = this.state
        let allArticles;
        if (news.length > 0) {
            allArticles = news.map((article, i) => {
                if (article.description && !article.description.includes('http') && !article.description.includes('%20')) {
                    return (
                        <div className="box" key={i}><NewBox key={i} article={article} /></div>
                    )
                }
            })
        } else {
            return <LoadingPage />
        }


        return (
            <div className="container" >
                {allArticles}
            </div>
        )
    }
}
