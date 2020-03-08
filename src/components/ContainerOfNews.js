import React, { useState, useEffect } from 'react'
import '../style/ContainerOfNews.scss'
import NewBox from './NewBox'
import { useSpring, animated } from 'react-spring'


const ContainerOfNews = ({ news, topic, userInput }) => {

    const [articles, setArticles] = useState([]);
    const appearanceArticles = useSpring({ opacity: 1, from: { opacity: 0, transitionDelay: '0.5s', transitionDuration: '.5s' } })

    useEffect(() => {
        setArticles(
            news
                .filter(article => article.title.toLocaleLowerCase().indexOf(userInput.toLocaleLowerCase()) !== -1)
                .map((article, i) => {
                    if (article.description &&
                        typeof article.urlToImage === 'string' &&
                        article.urlToImage.includes('http') &&
                        !article.description.includes('http') &&
                        !article.description.includes('%20') &&
                        (topic === '' ||
                            topic === article.topic)) {
                        return (
                            <animated.div style={appearanceArticles} className="box" key={i}><NewBox key={i} article={article} /></animated.div>
                        )
                    } else {
                        return null
                    }
                })
        )
    }, [userInput, topic])

    return (
        <div className="container" >
            {
                news.filter(article => article.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())).length > 0 ? articles : <p className="no-news">No news related to '{userInput}'</p>
            }
        </div>
    )
}

export default ContainerOfNews