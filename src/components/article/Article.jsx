import React from 'react'
import "./article.css";

const Article = ({imgUrl, date, title}) => {
  return (
    <div className="blog-container-article">
      <div className="blog-container-article-image">
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div className="blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article