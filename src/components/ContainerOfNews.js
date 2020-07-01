import React, { useState, useEffect } from 'react'
import '../style/ContainerOfNews.scss'
import NewBox from './NewBox'
import { useSpring, animated } from 'react-spring'


const ContainerOfNews = ({ news, category, userInput }) => {

    const [articles, setArticles] = useState('');
    const appearanceArticles = useSpring({ opacity: 1, from: { opacity: 0, transitionDelay: '.5s', transitionDuration: '.5s' } })

    // useEffect(() => {
    //     setArticles(
    //         news.filter(article => article.category === category).map((el, i) => <animated.div style={appearanceArticles} className="box" key={i}><NewBox key={i} article={el} /></animated.div>))
    // }, [category])

    useEffect(() => {
        setArticles(
            news
                .filter(article => article.title.toLocaleLowerCase().indexOf(userInput.toLocaleLowerCase()) !== -1)
                .filter(article => article.category === category)
                .map((article, i) =>
                    <animated.div style={appearanceArticles} className="box" key={i}><NewBox key={i} article={article} /></animated.div>)
        )
    }, [userInput, category])


    return (
        <div className="container" >
            {
                articles &&
                    !userInput && articles.length === 0 ?
                    `Sorry, there are no news with the category ${category}`
                    : userInput && articles.length === 0 ?
                        `Sorry, there are no news related to "${userInput}" in the category ${category}`
                        :
                        articles
            }
        </div>
    )
}

export default ContainerOfNews