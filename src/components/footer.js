import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import PropTypes from "prop-types"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: #f6f6f6;
  padding: 2rem 0 1rem;
`
const FooterColumns = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 0 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 0 2rem;
    margin-bottom: 2rem;
  }

  & li {
    list-style: none;
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
          <h4 className="footer__title">Links</h4>
          {nav.map(column => (
            <li className="footer__item">
              <Link to={column.link}>{column.name}</Link>
            </li>
          ))}
        </FooterColumn>
        <FooterColumn>
          <h4 className="footer__title">Follow</h4>
          <li className="footer__item">
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              Twitter
            </a>
          </li>
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
          <li className="footer__item">
            <a href={`https://github.com/${social?.github || ``}`}>
              {" "}
              Github
            </a>
          </li>
        </FooterColumn>
      </FooterColumns>
      <FooterCopy>
        © {new Date().getFullYear()}
        {` `}
        {` Created by `}
        <Link to={author.website}>{author.name}</Link>
      </FooterCopy>
    </FooterContainer>
  )
}

Footer.propTypes = {
  title: PropTypes.string,
}

Footer.defaultProps = {
  title: ``,
}

export default Footer
