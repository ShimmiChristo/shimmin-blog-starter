import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ThumbnailContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }

  .content {
    padding: 1rem;

    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.25rem;
    }

    p {
      margin: 0;
      color: #666;
    }
  }
`

const NewsThumbnail = ({ slug, title, excerpt, featuredImg }) => {
  return (
    <ThumbnailContainer>
      {featuredImg && <img src={featuredImg} alt={title} />}
      <div className="content">
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <p>{excerpt}</p>
      </div>
    </ThumbnailContainer>
  )
}

export default NewsThumbnail