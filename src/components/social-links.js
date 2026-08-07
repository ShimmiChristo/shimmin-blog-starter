import React from "react"
import styled from "styled-components"
import { FaYoutube, FaInstagram } from "react-icons/fa"

const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;

  li {
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: inherit;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`

function SocialLinks({ youtubeUrl, instagramUrl }) {
  return (
    <SocialList>
      {youtubeUrl && (
        <li>
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <FaYoutube size={22} color="#FF0000" />
            YouTube
          </a>
        </li>
      )}
      {instagramUrl && (
        <li>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={22} color="#E1306C" />
            Instagram
          </a>
        </li>
      )}
    </SocialList>
  )
}

export default SocialLinks
