import React, { Component } from 'react'
import '../style/NewBox.scss'

export default class NewBox extends Component {
    render() {
        // console.log(this.props);
        let article = this.props.article;
        let title = article.title;
        let description = article.description;
        let image = article.urlToImage;
        let url = article.url;

        return (
            <article>
                <h3 className="title">{title}</h3>
                <div className="image" style={{ backgroundImage: `url("${image}")` }}></div>
                <p className="description">
                    {description}
                </p>
                <p className="link">
                    <a href={url}>Continue reading</a>
                </p>
            </article>
        )
    }
}
