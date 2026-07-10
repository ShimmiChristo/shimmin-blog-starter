import React, { useState, useMemo } from "react"
import styled from "styled-components"
import roundsData from "../data/rounds-2026.json"

const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
`

const ScoreBoard = styled.div`
  background: #ccc;
  color: white;
  padding: 2rem;
  border-radius: 0.7rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
    text-align: center;
  }

  .score-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    .team-score {
      text-align: center;

      .team-label {
        font-size: 0.9rem;
        opacity: 0.9;
        margin-bottom: 0.5rem;
      }

      .score {
        font-size: 3rem;
        font-weight: bold;
      }

      &.green {
        color: #7fff7f;
      }

      &.blue {
        color: #87ceeb;
      }
    }

    .separator {
      font-size: 2rem;
      font-weight: bold;
      opacity: 0.7;
    }
  }

  .max-score {
    font-size: 0.95rem;
    opacity: 0.8;
    text-align: center;
    margin-top: 1rem;
    color: #333;
  }

  .separator {
    color: #333;
  }
`

const RoundContainer = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.7rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .round-header {
    background-color: #f5f5f5;
    padding: 1rem;
    border-bottom: 2px solid #ddd;
    font-weight: bold;
    font-size: 1.1rem;

    .round-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      .round-score {
        background-color: #18453b;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.3rem;
        font-size: 0.9rem;
      }
    }
  }

  .matches {
    padding: 1rem;
  }
`

const MatchContainer = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 0.5rem;
  border-left: 4px solid #ddd;

  &:last-child {
    margin-bottom: 0;
  }

  .match-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    flex-wrap: wrap;
    justify-content: space-between;

    .team {
      text-transform: capitalize;
      font-weight: 500;
    }

    .green {
      color: #18453b;
    }

    .blue {
      color: #003c82;
    }
  }

  .prediction-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  button {
    color: #333;
  }

  .selected .match-header .team {
    font-weight: 600;
  }
`

const PredictionButton = styled.button`
  padding: 0.6rem 1rem;
  border: 2px solid #ccc;
  border-radius: 0.4rem;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  flex: 1;
  min-width: 80px;

  &:hover {
    border-color: #999;
    background-color: #f0f0f0;
  }

  &.green-win {
    &.active {
      background-color: #18453b;
      color: white;
      border-color: #18453b;
    }
  }

  &.tie {
    &.active {
      background-color: #666;
      color: white;
      border-color: #666;
    }
  }

  &.blue-win {
    &.active {
      background-color: #003c82;
      color: white;
      border-color: #003c82;
    }
  }
`

const ResetButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #999;
  color: white;
  border: none;
  border-radius: 0.4rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #777;
  }

  margin-bottom: 2rem;
`

const MatchupGuesser = () => {
  const [predictions, setPredictions] = useState({})

  const handlePrediction = (roundIndex, matchIndex, prediction) => {
    const key = `${roundIndex}-${matchIndex}`
    setPredictions(prev => ({
      ...prev,
      [key]: prediction,
    }))
  }

  const calculateScore = useMemo(() => {
    let greenScore = 0
    let blueScore = 0
    let maxScore = 0

    roundsData.forEach((round, roundIndex) => {
      // Each match: 1 point for win, 0.5 for tie
      maxScore += round.matches.length

      round.matches.forEach((match, matchIndex) => {
        const key = `${roundIndex}-${matchIndex}`
        const prediction = predictions[key]

        if (prediction) {
          // If winner is set, validate prediction; otherwise count it as potential points
          if (match.winner === null || match.winner === prediction) {
            if (prediction === "green") {
              greenScore += 1
            } else if (prediction === "blue") {
              blueScore += 1
            } else if (prediction === "tie") {
              // Split tie points evenly
              greenScore += 0.5
              blueScore += 0.5
            }
          }
        }
      })
    })

    return { greenScore, blueScore, maxScore }
  }, [predictions])

  const resetAll = () => {
    setPredictions({})
  }

  return (
    <Container>
      <ScoreBoard>
        <h2>Matchup Guesser</h2>
        <div className="score-container">
          <div className="team-score green">
            <div className="team-label">Green Team</div>
            <div className="score">{calculateScore.greenScore.toFixed(1)}</div>
          </div>
          <div className="separator">-</div>
          <div className="team-score blue">
            <div className="team-label">Blue Team</div>
            <div className="score">{calculateScore.blueScore.toFixed(1)}</div>
          </div>
        </div>
        <div className="max-score">
          out of {calculateScore.maxScore} possible points
        </div>
      </ScoreBoard>

      <ResetButton onClick={resetAll}>Reset All Predictions</ResetButton>

      {roundsData.map((round, roundIndex) => {
        const roundPredictions = Object.entries(predictions)
          .filter(([key]) => key.startsWith(`${roundIndex}-`))
          .filter(([, value]) => value !== null)

        const possiblePoints = round.matches.length

        let greenRoundScore = 0
        let blueRoundScore = 0

        roundPredictions.forEach(([key, prediction]) => {
          const matchIndex = parseInt(key.split("-")[1])
          const match = round.matches[matchIndex]
          if (
            prediction &&
            (match.winner === null || match.winner === prediction)
          ) {
            if (prediction === "green") {
              greenRoundScore += 1
            } else if (prediction === "blue") {
              blueRoundScore += 1
            } else if (prediction === "tie") {
              greenRoundScore += 0.5
              blueRoundScore += 0.5
            }
          }
        })

        return (
          <RoundContainer key={roundIndex}>
            <div className="round-header">
              <div className="round-info">
                <span>
                  Round {round.round} - {round.gameplayName}
                </span>
                <span>{round.courseName}</span>
                <span className="round-score">
                  {greenRoundScore} - {blueRoundScore} (
                  {(greenRoundScore + blueRoundScore).toFixed(1)} /{" "}
                  {possiblePoints} pts)
                </span>
              </div>
            </div>
            <div className="matches">
              {round.matches.map((match, matchIndex) => {
                const key = `${roundIndex}-${matchIndex}`
                const prediction = predictions[key]
                const teamNames = (players, teamColor) =>
                  players.length > 1
                    ? `${players.join(" & ")} (${teamColor})`
                    : `${players[0]} (${teamColor})`

                return (
                  <MatchContainer
                    key={matchIndex}
                    className={prediction ? "selected" : ""}
                  >
                    <div className="match-header">
                      <div className="team green h5">
                        {teamNames(match.green, "Green")}
                      </div>
                      <span className="h3">vs</span>
                      <div className="team blue h5">
                        {teamNames(match.blue, "Blue")}
                      </div>
                    </div>
                    <div className="prediction-buttons">
                      <PredictionButton
                        className={`green-win ${
                          prediction === "green" ? "active" : ""
                        }`}
                        onClick={() =>
                          handlePrediction(roundIndex, matchIndex, "green")
                        }
                      >
                        Green Wins
                      </PredictionButton>
                      <PredictionButton
                        className={`tie ${
                          prediction === "tie" ? "active" : ""
                        }`}
                        onClick={() =>
                          handlePrediction(roundIndex, matchIndex, "tie")
                        }
                      >
                        Tie
                      </PredictionButton>
                      <PredictionButton
                        className={`blue-win ${
                          prediction === "blue" ? "active" : ""
                        }`}
                        onClick={() =>
                          handlePrediction(roundIndex, matchIndex, "blue")
                        }
                      >
                        Blue Wins
                      </PredictionButton>
                    </div>
                  </MatchContainer>
                )
              })}
            </div>
          </RoundContainer>
        )
      })}
    </Container>
  )
}

export default MatchupGuesser
