import { PlayerInfoUpdate } from "/src/hooks/get-player-info-UPDATE"
import { CourseInfo } from "/src/hooks/get-course-info"
import { calcPlayerScore, getMatchHandicap } from "./handicapHelper"

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

  const scoresArr = []
  // const playerOne = player1Param
  let playerOneScore =
    playersUpdateJson[`${player1Param}`]?.year[`${year}`].scores[
      `${courseMatch}`
    ][`${holes}`] // [scores]
  let playerOneHandicap = parseInt(player1HandicapParam)
  const playerTwo = player2Param !== undefined ? player2Param : undefined
  let playerTwoScore =
    playersUpdateJson[`${playerTwo}`]?.year[`${year}`].scores[`${courseMatch}`][
      `${holes}`
    ] // [scores]
  // let playerTwoScore =
  //   player2Param !== undefined
  //     ? playerTwo.course[`${courseMatch}`]
  //     : undefined // [scores]
  let playerTwoHandicap = player2HandicapParam
    ? parseInt(player2HandicapParam)
    : undefined
  // let playerThreeScore = playerThree ? playerThree.course[`${courseMatch}`] : undefined // [scores]
  // let playerThreeHandicap = parseInt(player3MatchHandicap)
  // let playerFourScore = playerFour ? playerFour.course[`${courseMatch}`] : undefined // [scores]
  // let playerFourHandicap = parseInt(player4MatchHandicap)
  // let getHandicap = function (playerHandicapParam) {
  //   if (matchHandicap === "average" && playerTwo !== undefined) {
  //     return (playerOneHandicap + playerTwoHandicap) / 2
  //   } else {
  //     return playerHandicapParam
  //   }
  // }
  // let gameplayParam = gameplay
  // let matchHandicapParam = matchHandicap

  for (let i = 0; i < playerOneScore.length; i++) {
    let hHand = courseHoles[i].handicap
    let sPlayerOne = playerOneScore[i]
    let sPlayerTwo =
      playerTwoScore !== undefined ? playerTwoScore[i] : undefined
    // let sPlayerThree = playerThreeScore !== undefined ? playerThreeScore[i] : undefined
    // let sPlayerFour = playerFourScore !== undefined ? playerFourScore[i] : undefined

    let playerOneHandicapScore = calcPlayerScore(
      sPlayerOne,
      getMatchHandicap(
        gameplay,
        player1Param,
        playerOneHandicap,
        player2Param,
        playerTwoHandicap
      ),
      hHand
    )

    if (playerTwo !== undefined) {
      var playerTwoHandicapScore = calcPlayerScore(
        sPlayerTwo,
        getMatchHandicap(
          gameplay,
          player1Param,
          playerOneHandicap,
          player2Param,
          playerTwoHandicap
        ),
        hHand
      )
    }

    if (
      isNaN(playerTwoHandicapScore) !== true &&
      player2Param !== undefined &&
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

    // let playerThreeHandiScore = calcPlayerScore(
    //   sPlayerThree,
    //   teamHandicap,
    //   hHand
    // )
    // let playerFourHandiScore = calcPlayerScore(
    //   sPlayerFour,
    //   teamHandicap,
    //   hHand
    // )
    // if (isNaN(playerOneHandiScore) !== true && isNaN(playerTwoHandiScore) && isNaN(playerThreeHandiScore) && isNaN(playerFourHandiScore) !== true) {
    //   teamOneScoreArr.push(Math.min(playerOneHandiScore, playerThreeHandiScore))
    //   teamTwoScoreArr.push(Math.min(playerTwoHandiScore, playerFourHandiScore))
    // } else {
    //   teamOneScoreArr.push("-")
    //   teamTwoScoreArr.push("-")
    // }

    // } else if (matchHandicapParam === "full") {
    //   let playerOneHandiScore = calcPlayerScore(
    //     sPlayerOne,
    //     playerOneHandicap,
    //     hHand
    //   )
    //   let playerTwoHandiScore = calcPlayerScore(
    //     sPlayerTwo,
    //     playerTwoHandicap,
    //     hHand
    //   )
    //   let playerThreeHandiScore = calcPlayerScore(
    //     sPlayerThree,
    //     playerThreeHandicap,
    //     hHand
    //   )
    //   let playerFourHandiScore = calcPlayerScore(
    //     sPlayerFour,
    //     playerFourHandicap,
    //     hHand
    //   )
    //   if (isNaN(playerOneHandiScore) !== true && isNaN(playerThreeHandiScore) !== true) {
    //     teamOneScoreArr.push(Math.min(playerOneHandiScore, playerThreeHandiScore))
    //   } else {
    //     teamOneScoreArr.push("-")
    //   }
  }

  // var scores = {
  //   teamOne: teamOneScoreArr,
  //   teamTwo: teamTwoScoreArr,
  // }

  return scoresArr
}

export { calcTeamScore }
