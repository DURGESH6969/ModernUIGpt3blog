import React from 'react';
import './article.css';
const Article = ({imgUrl,date,title,link}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3><a href={link} target="_blank" rel="noreferrer">{title}</a></h3>
        </div>
        <p><a href={link} target="_blank" rel="noreferrer">Read Full Article</a></p>
      </div>
    </div>
  )
}

export default Article
