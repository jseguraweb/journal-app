import React, { useState, useEffect } from 'react'
import '../style/ContainerOfNews.scss'
import NewBox from './NewBox'

const ContainerOfNews = ({ news, topic, userInput }) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(
            news
                .filter(article => article.title.toLocaleLowerCase().indexOf(userInput.toLocaleLowerCase()) !== -1)
                .map((article, i) => {
                    if (article.description &&
                        typeof article.urlToImage === 'string' &&
                        article.urlToImage.includes('http') &&
                        !article.description.includes('http') &&
                        (topic === '' ||
                            topic === article.topic)) {
                        return (
                            <div className="box" key={i}><NewBox key={i} article={article} /></div>
                        )
                    } else {
                        return null
                    }
                })
        )
    }, [userInput, topic])

    return (
        <div className="container" >
            {articles}
        </div>
    )
}

export default ContainerOfNews