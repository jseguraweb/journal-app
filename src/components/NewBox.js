import React from 'react';
import '../style/NewBox.scss'

const NewBox = ({ article }) => {
    return (
        <article>
            <h3 className="title">{article.title}</h3>
            <div className="image" style={{ backgroundImage: `url("${article.urlToImage}")` }}></div>
            <p className="description">
                {article.description}
            </p>
            <p className="link">
                <a href={article.url}>Continue reading</a>
            </p>
        </article>
    )
}

export default NewBox