import React, { Component } from 'react'
import '../style/ContainerOfNews.scss'
import NewBox from './NewBox'

export default class ContainerOfNews extends Component {
    state = ({
        news: []
    })

    componentDidMount = async () => {
        try {
            const serverData = await fetch('http://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=701dc18d676e4d62a0c678f128ece113');
            const response = await serverData.json();
            this.setState({
                news: response.articles
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
        }


        return (
            <div className="container" >
                {allArticles}
                {/* <div className="box box1"><NewBox /></div>
                <div className="box box2"><NewBox /></div>
                <div className="box box3"><NewBox /></div>
                <div className="box box4"><NewBox /></div>
                <div className="box box5"><NewBox /></div>
                <div className="box box6"><NewBox /></div>
                <div className="box box7"><NewBox /></div>
                <div className="box box8"><NewBox /></div> */}
            </div>
        )
    }
}
