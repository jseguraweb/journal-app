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
            const serverDataSports = await fetch('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=701dc18d676e4d62a0c678f128ece113');
            const responseSports = await serverDataSports.json();
            const serverDataTech = await fetch('https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=701dc18d676e4d62a0c678f128ece113');
            const responseTech = await serverDataTech.json();
            const serverDataBusiness = await fetch('https://newsapi.org/v2/top-headlines?country=gb&apiKey=701dc18d676e4d62a0c678f128ece113');
            const responseBusiness = await serverDataBusiness.json();
            const serverDataEntertainment = await fetch('https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=701dc18d676e4d62a0c678f128ece113');
            const responseEntertainment = await serverDataEntertainment.json();

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
