import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import PropTypes from "prop-types"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: var(--color-brand-gray-6);
  padding: 1rem 0 1rem;

  a {
    color: var(--color-link);
  }
`
const FooterColumns = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 0 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0 0 2rem;
  }
`
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 0 2rem;
    margin-bottom: 0;
    flex-direction: row;
    flex-wrap: wrap;

    & h4 {
      flex: 0 0 100%;
    }
  }

  ul {
    padding: 0;

    li {
      margin: 0;
    }
  }

  & li {
    list-style: none;
    padding: 0 0.2rem;
  }
`
const FooterCopy = styled.div`
  text-align: center;
`

function Footer() {
  const { nav, social, author } = useSiteMetadata()

  return (
    <FooterContainer>
      <FooterColumns className="footer__columns">
        <FooterColumn>
          <h4 className="footer__title">Menu</h4>
          <ul>
            {nav.map((column, i) => (
              <li className="footer__item" key={i}>
                <a href={column.link}>{column.name}</a>
              </li>
            ))}
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h4 className="footer__title">Follow</h4>
          <ul>
            <li className="footer__item">
              <a href={`https://instagram.com/${social?.instagram || ``}`}>
                Instagram
              </a>
            </li>
            <li className="footer__item">
              <a href={`https://youtube.com/${social?.youtube || ``}`}>
                {" "}
                Youtube
              </a>
            </li>
          </ul>
        </FooterColumn>
      </FooterColumns>
      <FooterCopy>
        © {new Date().getFullYear()}
        {` `}
        {` Created by `}
        <a href={author.website}>{author.name}</a>
      </FooterCopy>
    </FooterContainer>
  )
}

export default Footer
