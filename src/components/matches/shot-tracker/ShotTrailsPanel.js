import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import HoleShotTrails from "./HoleShotTrails"

const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 1rem auto 0;
  padding: 0.4rem 0.8rem;
  border: 1px solid var(--gray, #a0a0a0);
  border-radius: 2rem;
  background: transparent;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    cursor: pointer;
    background: var(--light-gray, #f5f5f5);
  }
`

const Panel = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--light-gray, #f5f5f5);
`

const HolePicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 1rem;
`

const HolePickerBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--gray, #a0a0a0);
  background: ${({ $active }) => ($active ? "var(--black, #202020)" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};

  &:hover {
    cursor: pointer;
  }
`

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.75rem;
  font-size: 0.8rem;
  text-transform: capitalize;
`

const Swatch = styled.span`
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-right: 0.35rem;
  background: ${({ color }) => color};
`

/**
 * Collapsible "shot trails" panel embedded in a match card. Only intended to
 * be rendered when at least one hole in the match has shot-tracker data -
 * see how src/components/match.js filters `holes` before passing them in.
 */
function ShotTrailsPanel({ holes, holeShotData, players }) {
  const [open, setOpen] = useState(false)
  const [selectedHole, setSelectedHole] = useState(holes[0]?.number)

  if (!holes || holes.length === 0) {
    return null
  }

  const activeHole = holes.find(h => h.number === selectedHole) || holes[0]
  const activeHoleData = holeShotData[activeHole.number]

  return (
    <div className="match__shot-trails text-center">
      <ToggleBtn onClick={() => setOpen(o => !o)} type="button">
        Shot Trails {open ? <FaChevronUp /> : <FaChevronDown />}
      </ToggleBtn>
      {open ? (
        <Panel>
          <HolePicker>
            {holes.map(hole => (
              <HolePickerBtn
                key={hole.number}
                type="button"
                $active={hole.number === activeHole.number}
                onClick={() => setSelectedHole(hole.number)}
              >
                {hole.number}
              </HolePickerBtn>
            ))}
          </HolePicker>
          <HoleShotTrails
            holeNumber={activeHole.number}
            par={activeHole.par}
            image={activeHoleData?.image}
            shots={activeHoleData?.shots}
            players={players}
          />
          <Legend>
            {players.map(player => (
              <span key={player.key}>
                <Swatch color={player.color} />
                {player.label}
              </span>
            ))}
          </Legend>
        </Panel>
      ) : null}
    </div>
  )
}

ShotTrailsPanel.propTypes = {
  holes: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      par: PropTypes.number,
    })
  ).isRequired,
  holeShotData: PropTypes.object.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ShotTrailsPanel
