import React, { useState, useEffect } from 'react'
import '../style/ContainerOfNews.scss'
import NewBox from './NewBox'
import { useSpring, animated } from 'react-spring'


const ContainerOfNews = ({ news, category, userInput }) => {

    const [articles, setArticles] = useState('');
    const appearanceArticles = useSpring({ opacity: 1, from: { opacity: 0, transitionDelay: '.5s', transitionDuration: '.5s' } })

    useEffect(() => {
        setArticles(
            news.filter(article => article.category === category).map((el, i) => <animated.div style={appearanceArticles} className="box" key={i}><NewBox key={i} article={el} /></animated.div>))
    }, [category])

    useEffect(() => {
        setArticles(
            news
                .filter(article => article.title.toLocaleLowerCase().indexOf(userInput.toLocaleLowerCase()) !== -1)
                .map((article, i) => {
                    if (article.content && article.category === category) {
                        return (
                            <animated.div style={appearanceArticles} className="box" key={i}><NewBox key={i} article={article} /></animated.div>
                        )
                    } else {
                        return null
                    }
                })
        )
    }, [userInput])

    console.log('news in pool: ', news);
    console.log('news filtered: ', news.filter(article => article.category === category));

    return (
        <div className="container" >
            {
                articles
            }
        </div>
    )
}

export default ContainerOfNews