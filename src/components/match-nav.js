import React from "react"
import styled from "styled-components"
import "../styles/match.css"

const Section = styled.section`
  border: 1px solid gray;
  padding: 1rem;
  border-radius: 0.7rem;
  overflow: hidden;
  overflow-x: scroll;
  max-width: 1000px;
  margin: 2rem auto 2rem;
  transition: all 0.5s ease-in-out;
  max-height: 180px;

  @media screen and (max-width: 767px) {
    padding: 1rem 0;
  }
  > * {
    padding: 0 1rem;
    margin: 0;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 900px;

    @media screen and (max-width: 767px) {
      padding: 0;
    }
  }
  li {
    text-align: center;
    margin: 0;

    &[data-active="true"] {
      a {
        color: var(--color-link);
        font-weight: bold;
      }
    }
  }
  a {
    color: var(--gray);

    &:active,
    &:focus,
    &:hover {
      color: var(--color-link);
    }
  }
`

function MatchNav({ location, titles }) {
  // const { teams } = ScoreInfo()
  // const { course } = CourseInfo()
  const titlesArray = titles
  const pageHash = location.hash

  return (
    <Section>
      <ul>
        {titlesArray.map((title, i) => (
          <li
            data-active={"#" + title.link === pageHash ? "true" : "false"}
            key={i + title}
          >
            <a href={`#${title.link}`}>
              <span className="block">{title.round}</span>
              <span className="block">{title.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default MatchNav
