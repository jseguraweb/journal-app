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
            let responseSports = await serverDataSports.json();
            responseSports.articles.map(el => el['topic'] = 'sport')
            const serverDataTech = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=701dc18d676e4d62a0c678f128ece113');
            let responseTech = await serverDataTech.json();
            responseTech.articles.map(el => el['topic'] = 'technology')
            const serverDataBusiness = await fetch('http://newsapi.org/v2/top-headlines?country=gb&apiKey=701dc18d676e4d62a0c678f128ece113');
            let responseBusiness = await serverDataBusiness.json();
            responseBusiness.articles.map(el => el['topic'] = 'business')
            const serverDataEntertainment = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=701dc18d676e4d62a0c678f128ece113');
            let responseEntertainment = await serverDataEntertainment.json();
            responseEntertainment.articles.map(el => el['topic'] = 'entertainment')

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
        let newState = this.state.news.filter(el => el.topic === this.props.currentTopic);
        this.setState({
            news: newState
        })
    }

    render() {
        const topic = this.props.currentTopic;
        const { news } = this.state
        let allArticles;
        if (news.length > 0) {
            allArticles = news.map((article, i) => {
                if (article.description && !article.description.includes('http') && !article.description.includes('%20') && topic === '') {
                    return (
                        <div className="box" key={i}><NewBox key={i} article={article} /></div>
                    )
                }
                else if (article.description && !article.description.includes('http') && !article.description.includes('%20') && article.topic === topic) {
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
