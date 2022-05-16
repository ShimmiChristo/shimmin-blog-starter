import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useProfilePic } from "../hooks/use-profile-pic"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

const CustomContainer = styled.div`
  padding: 0 0 1rem;
  border-bottom: 2px solid;
  border-color: var(--color-brand-med);
  margin: 0 auto 2rem;

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

function LandingPageHeader({ title }) {

  return (
    <section>
      <CustomContainer className="container">
        <h1 className="text-center">{title}</h1>
      </CustomContainer>
    </section>
  )
}

export default LandingPageHeader
