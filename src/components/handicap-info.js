import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaInfo } from "react-icons/fa"

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: auto;
`

const Button = styled.button`
  border: 1px solid var(--gray, #a0a0a0);
  background: var(--white, #fff);
  color: var(--gray, #a0a0a0);
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.7rem;
  line-height: 1;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: 1rem;
    height: 1rem;
    font-size: 0.6rem;
  }
`

const Content = styled.div`
  position: absolute;
  bottom: calc(100% + 0.5rem);
  left: 0;
  min-width: 14rem;
  max-width: 18rem;
  background: var(--white, #fff);
  border: 1px solid var(--light-gray, #f5f5f5);
  border-radius: 0.5rem;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  padding: 0.5rem 0.7rem;
  z-index: 10;
  font-size: 0.7rem;
  color: var(--black, #202020);
`

const Title = styled.div`
  font-weight: var(--fontWeight-semibold, 600);
  margin-bottom: 0.35rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 0.68rem;
  color: var(--gray, #a0a0a0);
`

const Section = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.45rem;
  }
`

const Team = styled.div`
  font-weight: var(--fontWeight-semibold, 600);
  margin-bottom: 0.2rem;
  color: ${({ $team }) =>
    $team === "one" ? "var(--green, #18453b)" : "var(--blue, #003c82)"};
`

const PlayerRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  font-size: 0.68rem;

  & + & {
    margin-top: 0.15rem;
  }
`

const PlayerName = styled.span`
  font-weight: var(--fontWeight-semibold, 600);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--black, #202020);
`

const PlayerMeta = styled.span`
  white-space: nowrap;
`

export function formatHandicap(value) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) {
    return "-"
  }
  return Number(value).toFixed(1)
}

function HandicapInfo({ teams }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <Button
        type="button"
        aria-label="Match handicap information"
        aria-expanded={isOpen}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen(value => !value)}
      >
        <FaInfo aria-hidden="true" />
      </Button>
      {isOpen ? (
        <Content role="tooltip">
          <Title>Handicap info</Title>
          {teams.map(team => (
            <Section key={team.label}>
              <Team $team={team.team}>{team.label}</Team>
              {team.players.map(player => (
                <PlayerRow key={`${team.label}-${player.name}`}>
                  <PlayerName>{player.name}</PlayerName>
                  <PlayerMeta>
                    HC {formatHandicap(player.actual)} / CH{" "}
                    {formatHandicap(player.course)} / PH{" "}
                    {formatHandicap(player.playing)} / Pops {player.pops}
                  </PlayerMeta>
                </PlayerRow>
              ))}
            </Section>
          ))}
        </Content>
      ) : null}
    </Wrapper>
  )
}

HandicapInfo.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      team: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      players: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          actual: PropTypes.number,
          course: PropTypes.number,
          playing: PropTypes.number,
          pops: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
}

export default HandicapInfo
