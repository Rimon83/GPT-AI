import "./brand.css"
import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './index.js'

const Brand = () => {
  return (
    <div className="brand section__padding">
      <div>
        <img src={google} alt={google} />
      </div>
      <div>
        <img src={slack} alt={slack} />
      </div>
      <div>
        <img src={atlassian} alt={atlassian} />
      </div>
      <div>
        <img src={dropbox} alt={dropbox} />
      </div>
      <div>
        <img src={shopify} alt={shopify} />
      </div>
    </div>
  );
}

export default Brand