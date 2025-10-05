import React from "react"
import styled from "styled-components"

const NewsThumbnail = ({ title, date }) => {
  const CardContainer = styled.div`
    margin: 0.5rem;
    @media (min-width: 1080px) {
      width: calc(100% / 3 - 1rem);
    }
  `

  return (
    <CardContainer className="card">
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </CardContainer>
  )
}

export default NewsThumbnail
