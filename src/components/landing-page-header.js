import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useProfilePic } from "../hooks/use-profile-pic"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

const Container = styled.div`
  padding: 0 2rem 2rem 2rem;
  border-bottom: 2px solid;
  border-color: var(--color-brand-med);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & h2 {
    flex: 0 0 100%;
  }
  @media (max-width: 767px) {
    padding: 0rem 1rem 1rem 1rem;
    justify-content: center;
  }
`


function LandingPageHeader({ title }) {
  // const { author } = useSiteMetadata()
  // const { fluid } = useProfilePic()

  return (
    <section>
      <Container>
        <h1>{title}</h1>
      </Container>
    </section>
  )
}

export default LandingPageHeader
