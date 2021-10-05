import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useProfilePic } from "../hooks/use-profile-pic"
import { PlayerInfo } from "../hooks/get-player-info"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const Container = styled.div`
  padding: 0 2rem 2rem 2rem;
  border: 2px solid;
  border-color: var(--color-brand-med);
  border-radius: 1rem;
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
const Bio = styled.div`
  flex: 0 0 70%;
  padding-right: 5%;
  @media (max-width: 767px) {
    padding: 0;
    flex: 0 0 100%;
  }
`
const ProfilePic = styled(Image)`
  flex: 0 0 30%;
  border-radius: 50%;
  @media (max-width: 767px) {
    flex: 0 0 80%;
  }
`

function Player({ name, nickname, description, category, featuredImg, team }) {
  const { author } = useSiteMetadata()
  const { fluid } = useProfilePic()
  const { player } = PlayerInfo()

  return (
    <section>
      <Container>
        <Bio>
          <h2>Biography</h2>
          <p>{description}</p>

          <p>I'm a web developer based in New York City.</p>
          <p>
            I create and improve existing websites with specialization in
            e-commerce. You can read more about me{" "}
            <a href={`${author.website}/about`}>on my website</a>.
          </p>
          <p>
            Email me at <span class="bold">{author.email}</span> or text me at{" "}
            <span class="bold">{author.phone}</span>
          </p>
        </Bio>
        <ProfilePic fluid={fluid} loading="lazy" />
      </Container>
    </section>
  )
}

export default Player
