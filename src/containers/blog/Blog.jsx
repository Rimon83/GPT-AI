import React from 'react'
import "./blog.css"
import {Article} from '../../components'
import { blog01, blog02, blog03, blog04,blog05 } from './index'
import "../../components/article/article.css"

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">
          A lot is happening we are blogging about it
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article imgUrl={blog01} date="June, 10, 2023" title="Ai is a feature," />
        </div>
        <div className="blog-container-groupB">
          <Article imgUrl={blog02} date="June, 10, 2023" title="Ai is a feature," />
          <Article imgUrl={blog03} date="June, 10, 2023" title="Ai is a feature," />
          <Article imgUrl={blog04} date="June, 10, 2023" title="Ai is a feature," />
          <Article imgUrl={blog05} date="June, 10, 2023" title="Ai is a feature," />
        </div>
      </div>
    </div>
  );
}

export default Blog