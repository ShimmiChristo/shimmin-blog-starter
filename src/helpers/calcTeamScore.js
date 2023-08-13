import { PlayerInfoUpdate } from "/src/hooks/get-player-info-UPDATE"
import { CourseInfo } from "/src/hooks/get-course-info"
import { calcPlayerScore } from "./handicapHelper"

function calcTeamScore(
  year,
  courseMatch,
  holes,
  matchHandicap,
  gameplay,
  player1Param,
  player1HandicapParam,
  player2Param,
  player2HandicapParam
) {
  const playersUpdateJson = PlayerInfoUpdate()
  const { course } = CourseInfo()
  const courseHoles =
    holes === "front"
      ? course[`${courseMatch}`].holes.slice(0, 9)
      : course[`${courseMatch}`].holes.slice(9)
  const player1Name = player1Param
  const player2Name = player2Param

  const scoresArr = []
  let playerOneScore =
    playersUpdateJson[`${player1Name}`]?.year[`${year}`].scores[
      `${courseMatch}`
    ][`${holes}`] // [scores]
  let playerOneHandicap = parseInt(player1HandicapParam)
  const playerTwo = player2Name !== undefined ? player2Name : undefined
  let playerTwoScore =
    playersUpdateJson[`${playerTwo}`]?.year[`${year}`].scores[`${courseMatch}`][
      `${holes}`
    ] // [scores]

  let playerTwoHandicap = player2HandicapParam
    ? parseInt(player2HandicapParam)
    : undefined

  for (let i = 0; i < playerOneScore.length; i++) {
    let hHand = courseHoles[i].handicap
    let sPlayerOne = playerOneScore[i]
    let sPlayerTwo =
      playerTwoScore !== undefined ? playerTwoScore[i] : undefined

    let playerOneHandicapScore = calcPlayerScore(
      sPlayerOne,
      playerOneHandicap,
      hHand,
      holes
    )

    if (playerTwo !== undefined) {
      var playerTwoHandicapScore = calcPlayerScore(
        sPlayerTwo,
        playerTwoHandicap,
        hHand,
        holes
      )
    }

    if (
      isNaN(playerTwoHandicapScore) !== true &&
      player2Name !== undefined &&
      gameplay !== "two-ball"
    ) {
      scoresArr.push(Math.min(playerOneHandicapScore, playerTwoHandicapScore))
    } else if (
      isNaN(playerTwoHandicapScore) !== true &&
      gameplay === "two-ball"
    ) {
      scoresArr.push(
        Number(playerOneHandicapScore) + Number(playerTwoHandicapScore)
      )
    } else if (isNaN(playerOneHandicapScore) !== true) {
      scoresArr.push(playerOneHandicapScore)
    } else {
      scoresArr.push("-")
    }
  }

  return scoresArr
}

export { calcTeamScore }
