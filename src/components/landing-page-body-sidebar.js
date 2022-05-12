import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useProfilePic } from "../hooks/use-profile-pic"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

const Container = styled.div`
  padding: 0 0 1rem;
  border-bottom: 2px solid;
  border-color: var(--color-brand-med);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto 2rem;
  width: 100%;

  & h1 {
    margin-bottom: 0;
    font-size: clamp(1rem, 10vw, 2rem);
    text-align: left;
    line-height: 1.5;
  }
  & h2 {
    flex: 0 0 100%;
  }
  @media (max-width: 767px) {
    padding: 0rem 0 0.5rem;
  }
`

function LandingPageHeader({ title, content}) {
  return (
    <article>
      <div class="container">
        <div class="row">
          <div class="col-6">
            {content}
          </div>
        </div>
      </div>
    </article>
  )
}

export default LandingPageHeader