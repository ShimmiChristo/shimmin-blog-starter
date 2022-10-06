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
    padding: 0.2rem 0;
    width: 90%;
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
      display: none;
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

  select {
    width: 90%;
    box-sizing: border-box;
    margin-left: calc(100% - 95%);
    border: none;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`

function MatchNav({ location, titles }) {
  // const { teams } = ScoreInfo()
  // const { course } = CourseInfo()
  const titlesArray = titles
  const pageHash = location.hash

  const handleChange = e => {
    const dataLocation =
      e.target[e.target.selectedIndex].getAttribute("data-location")
    window.location.hash = dataLocation
  }

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

      <select id="scores-selector" onChange={handleChange} className="form-select">
        {titlesArray.map((title, i) => (
          <option
            key={i + title}
            value={title.round}
            data-active={"#" + title.link === pageHash ? "true" : "false"}
            data-location={"#" + title.link}
          >
            {title.round} - {title.name}
          </option>
        ))}
      </select>
    </Section>
  )
}

export default MatchNav
