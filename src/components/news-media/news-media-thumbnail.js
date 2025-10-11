import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NewsMediaThumbnail = ({
  slug,
  title,
  date,
  description,
  excerpt,
  featuredImg,
}) => {
  const image = featuredImg ? getImage(featuredImg) : null
  console.log('image - ', image);

  return (
    <div className="col-md-4 mb-4">
      <Link to={slug} className="text-decoration-none">
        <article className="card h-100 shadow-sm hover-lift">
          {image && (
            <GatsbyImage
              image={image}
              alt={title}
              className="card-img-top"
              style={{ height: "200px" }}
            />
          )}
          <div className="card-body">
            <h3 className="h5 card-title">{title}</h3>
            <p className="text-muted small">{date}</p>
            <p className="card-text">
              {description || excerpt}
            </p>
          </div>
        </article>
      </Link>
    </div>
  )
}

export default NewsMediaThumbnail