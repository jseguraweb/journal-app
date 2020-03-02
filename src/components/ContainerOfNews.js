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
            const serverData = await fetch('http://newsapi.org/v2/top-headlines?country=gb&apiKey=701dc18d676e4d62a0c678f128ece113');
            const response = await serverData.json();
            this.setState({
                news: response.articles,
                loading: false
            })
        } catch (error) {
            alert(error)
        }
    }

    render() {

        const { news } = this.state
        let allArticles;
        if (news.length > 0) {
            allArticles = news.map((article, i) => {
                if (!article.description.includes('http')) {
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
