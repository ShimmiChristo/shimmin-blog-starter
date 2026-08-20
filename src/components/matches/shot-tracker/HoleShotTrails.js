import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Frame = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 3 / 4;
  margin: 0 auto;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--gray, #a0a0a0);
  background: var(--light-gray, #f5f5f5);
`

const HoleImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${({ $hidden }) => ($hidden ? "none" : "block")};
`

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;
  color: var(--gray, #a0a0a0);
  border: 2px dashed var(--gray, #a0a0a0);
  border-radius: 0.5rem;
`

const Overlay = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`

const HoleLabel = styled.div`
  text-align: center;
  font-weight: var(--fontWeight-semibold, 600);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`

/**
 * Renders a birds-eye diagram for a single hole with each player's shots
 * connected in order. Coordinates are 0-100, tee at the bottom (y: 100),
 * green at the top (y: 0). See src/data/shot-tracker.README.md for the data
 * format.
 */
function HoleShotTrails({ holeNumber, par, image, shots, players }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showPlaceholder = !image || imageFailed

  return (
    <div>
      <HoleLabel>
        Hole {holeNumber}
        {par ? ` · Par ${par}` : ""}
      </HoleLabel>
      <Frame>
        {image ? (
          <HoleImage
            src={image}
            alt={`Hole ${holeNumber} overhead`}
            $hidden={imageFailed}
            onError={() => setImageFailed(true)}
          />
        ) : null}
        {showPlaceholder ? (
          <Placeholder>
            Add a hole image to static/hole-maps to see it here
          </Placeholder>
        ) : null}
        <Overlay viewBox="0 0 100 100" preserveAspectRatio="none">
          {players.map(player => {
            const playerShots = shots?.[player.key]
            if (!playerShots || playerShots.length === 0) {
              return null
            }
            const points = playerShots.map(s => `${s.x},${s.y}`).join(" ")
            const lastShot = playerShots[playerShots.length - 1]
            const holedOut = lastShot?.result === "hole"

            return (
              <g key={player.key}>
                <polyline
                  points={points}
                  fill="none"
                  stroke={player.color}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  opacity="0.85"
                />
                {playerShots.map((shot, i) => {
                  const isLast = i === playerShots.length - 1
                  if (isLast && holedOut) {
                    return (
                      <path
                        key={i}
                        d={`M ${shot.x} ${shot.y} l -1.6 4 h 3.2 z`}
                        fill={player.color}
                        stroke="#fff"
                        strokeWidth="0.3"
                      >
                        <title>
                          {player.label} - holed out ({playerShots.length}{" "}
                          shots)
                        </title>
                      </path>
                    )
                  }
                  return (
                    <circle
                      key={i}
                      cx={shot.x}
                      cy={shot.y}
                      r="1.4"
                      fill={player.color}
                      stroke="#fff"
                      strokeWidth="0.4"
                    >
                      <title>
                        {player.label} - shot {i + 1}
                        {shot.result ? ` (${shot.result})` : ""}
                      </title>
                    </circle>
                  )
                })}
              </g>
            )
          })}
        </Overlay>
      </Frame>
    </div>
  )
}

HoleShotTrails.propTypes = {
  holeNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  par: PropTypes.number,
  image: PropTypes.string,
  shots: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        result: PropTypes.string,
      })
    )
  ),
  players: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default HoleShotTrails
