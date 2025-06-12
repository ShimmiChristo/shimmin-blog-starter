const fs = require("fs")
const os = require("os")
const path = require("path")

const desktopPath = path.join(os.homedir(), "Desktop")
const folderPath = path.join(desktopPath, "matches_generator")
const filePath = path.join(desktopPath, "new_file.js")
// const content = 'Hello, this is the content of the new file.';

/* 
- iterate through the rounds
- for each round, iterate through the players
- for each player, find the best pair that has played the least number of times
- increment the pair count for both players
- add the pair to the round
- return the rounds
// - for each round, shuffle the players
// - for each player, find the best pair that has played the least number of times
// - increment the pair count for both players
// - add the pair to the round
// - return the rounds

*/

function generateTeamRoundsMain() {
  const teamA = ["1", "2", "3", "4", "5", "6"]
  const teamB = ["7", "8", "9", "10", "11", "12"]
  const teams = {
    teamA: teamA,
    teamB: teamB,
  }

  // const matchesPerRound = 3
  // const matchExample = [
  //   { teamA: ["1", "2"], teamB: ["7", "8"] },
  //   { teamA: ["3", "4"], teamB: ["9", "10"] },
  //   { teamA: ["5", "6"], teamB: ["11", "12"] },
  // ]

  const roundsInit = [
    {
      round: 1,
      matches: [
        {
          teamA: ["1", "6"],
        },
        {
          teamA: ["2", "4"],
        },
        {
          teamA: ["3", "5"],
        },
        {
          teamB: ["7", "8"],
        },
        {
          teamB: ["11", "12"],
        },
        {
          teamB: ["9", "10"],
        },
      ],
    },
    {
      round: 2,
      matches: [
        {
          teamA: ["1", "6"],
        },
        {
          teamA: ["2", "4"],
        },
        {
          teamA: ["3", "5"],
        },
        {
          teamB: ["7", "8"],
        },
        {
          teamB: ["11", "12"],
        },
        {
          teamB: ["9", "10"],
        },
      ],
    },
    {
      round: 3,
      matches: [
        {
          teamA: ["1", "2"],
        },
        {
          teamA: ["3", "4"],
        },
        {
          teamA: ["5", "6"],
        },
        {
          teamB: ["7", "8"],
        },
        {
          teamB: ["9", "10"],
        },
        {
          teamB: ["11", "12"],
        },
      ],
    },

    {
      round: 4,
      matches: [
        {
          teamA: ["1", "2"],
        },
        {
          teamA: ["3", "4"],
        },
        {
          teamA: ["5", "6"],
        },
        {
          teamB: ["7", "8"],
        },
        {
          teamB: ["9", "10"],
        },
        {
          teamB: ["11", "12"],
        },
      ],
    },
  ]

  // const roundsInit = [
  //   {
  //     round: 1,
  //     matches: [
  //       {
  //         teamA: ["1", "2"],
  //       },
  //       {
  //         teamA: ["5", "6"],
  //       },
  //       {
  //         teamA: ["3", "4"],
  //       },
  //       {
  //         teamB: ["7", "12"],
  //       },
  //       {
  //         teamB: ["8", "10"],
  //       },
  //       {
  //         teamB: ["9", "11"],
  //       },
  //     ],
  //   },
  //   {
  //     round: 2,
  //     matches: [
  //       {
  //         teamA: ["1", "2"],
  //       },
  //       {
  //         teamA: ["5", "6"],
  //       },
  //       {
  //         teamA: ["3", "4"],
  //       },
  //       {
  //         teamB: ["7", "12"],
  //       },
  //       {
  //         teamB: ["8", "10"],
  //       },
  //       {
  //         teamB: ["9", "11"],
  //       },
  //     ],
  //   },
  //   {
  //     round: 3,
  //     matches: [
  //       {
  //         teamA: ["1", "2"],
  //       },
  //       {
  //         teamA: ["3", "4"],
  //       },
  //       {
  //         teamA: ["5", "6"],
  //       },
  //       {
  //         teamB: ["7", "8"],
  //       },
  //       {
  //         teamB: ["9", "10"],
  //       },
  //       {
  //         teamB: ["11", "12"],
  //       },
  //     ],
  //   },

  //   {
  //     round: 4,
  //     matches: [
  //       {
  //         teamA: ["1", "2"],
  //       },
  //       {
  //         teamA: ["3", "4"],
  //       },
  //       {
  //         teamA: ["5", "6"],
  //       },
  //       {
  //         teamB: ["7", "8"],
  //       },
  //       {
  //         teamB: ["9", "10"],
  //       },
  //       {
  //         teamB: ["11", "12"],
  //       },
  //     ],
  //   },
  // ]

  const totalRounds = 8 - roundsInit.length // 8 rounds total, 3 rounds already initialized
  const maxAttempts = 20

  const initPairMap = (players, teamName) => {
    const map = {}
    for (let i = 0; i < players.length; i++) {
      for (let j = i + 1; j < players.length; j++) {
        const key = [players[i], players[j]].sort((a, b) => a - b).join("-")

        // * if exist in roundsInit, then include each in the map object.
        roundsInit.forEach(round => {
          if (
            round.matches.some(
              match =>
                match[teamName]?.includes(players[i]) &&
                match[teamName]?.includes(players[j])
            )
          ) {
            map[key] = map[key] + 1 || 1 // * if already played together, set to 1
          } else {
            // * if not played together, set to 0
            map[key] = 0
          }
        })
      }
    }
    return map
  }

  const initOpponentsMap = (teamA, teamB) => {
    const map = {}

    for (let i = 0; i < teamA.length; i++) {
      for (let j = 0; j < teamB.length; j++) {
        const key = [teamA[i], teamB[j]].sort((a, b) => a - b).join("-")
        // * if exist in roundsInit, then include each in the map object.

        for (let k = 0; k < roundsInit.length; k++) {
          const round = roundsInit[k]

          for (let m = 0; m < round.matches.length; m++) {
            if (
              round.matches[m]?.teamA?.includes(teamA[i]) &&
              round.matches[m + 3]?.teamB?.includes(teamB[j])
            ) {
              map[key] = map[key] + 1 || 1 // * if already played together, set to 1
              break // * no need to check further matches in the round
            }
          }
        }
        if (!map[key]) {
          // * if not played together, set to 0
          map[key] = 0
        }
      }
    }
    return map
  }

  // Shuffle function to randomize the order of players arrayAdd commentMore actions
  const shuffle = array => array.sort(() => Math.random() - 0.5)

  let partnerMap_teamA = initPairMap(teamA, "teamA")
  let partnerMap_teamB = initPairMap(teamB, "teamB")
  let opponentMap = initOpponentsMap(teamA, teamB)

  const partnerMaps = {
    teamA: partnerMap_teamA,
    teamB: partnerMap_teamB,
  }

  const getPairCount = (map, p1, p2) => {
    const key = [p1, p2].sort((a, b) => a - b).join("-")
    return map[key] || 0
  }

  // const getPairCountOpponents = (map, teamAp1, teamAp2, teamBp) => {
  //   const key1 = [p1, p2].sort((a, b) => a - b).join("-")
  //   const key2 = [p3, p4].sort((a, b) => a - b).join("-")
  //   return (map[key1] || 0) + (map[key2] || 0)
  // }

  const maxNumberInArray = arr => {
    return Math.max(...arr)
  }

  const minNumberInArray = arr => {
    return Math.min(...arr)
  }

  function findBestPair(
    remainingPlayers,
    partnerMap,
    iterateParam,
    roundsParam,
    roundParam,
    teamName,
    opponentMap,
    matchIterationInRound
  ) {
    const roundNo = roundParam + 1 // for even rounds.
    let bestScore = Infinity
    let bestPair = []

    // let potentialBestPair = [];

    // go through the remaining players
    // finding the best partner for each player in a round
    // 1. start with first option in array.
    // 2. try the next player in the array played with the fewest times.
    // 3. cointirue with all players.
    // 4. if get to last 2 players, and they have played together or 2 players have played together, retry to get the best pair on the first.
    // * need a partner changing function.
    // - if matchesups don't align with requirements, (play with everyone and everyone no more than 2 times)
    // - try first match, changing the opponent, and continue to the other matches.
    // - then try switching the opponent of the 2nd match, and continue to the other matches.
    // - then try switching the opponent of the 3rd match.
    // - if that doesn't work,

    let maxScore = maxNumberInArray(Object.values(partnerMap))
    let minScore = minNumberInArray(Object.values(partnerMap))
    let maxScoreOpponents = maxNumberInArray(Object.values(opponentMap))
    let minScoreOpponents = minNumberInArray(Object.values(opponentMap))

    let iterate = iterateParam || 0
    let lowerPlayerNo
    let higherPlayerNo
    let player1
    let player2
    let exitsLoops = false

    for (let i = iterate; i < remainingPlayers.length + iterate; i++) {
      // try to get a player that has played the least number of times
      for (let j = iterate + 1; j < remainingPlayers.length + iterate; j++) {
        player1 = remainingPlayers[i % remainingPlayers.length]
        player2 = remainingPlayers[j % remainingPlayers.length]
        // * get pair count against the partner map
        const score = getPairCount(partnerMap, player1, player2)

        // * if score is more than 1 more than other pairs, add
        if (maxScore - score < 1 && score > 0 && maxScore - minScore !== 0) {
          // * create a recursive function to find the best pair
          continue
        }

        // * used to check 0 partner pairs with 2 partners.
        if (maxScore === 2 && score === 1 && minScore === 0) {
          continue
        }

        // * check let the last 2 players in the odd rounds do not play in the first match of the even rounds.
        if (
          roundNo % 2 === 0 &&
          roundsParam[roundParam - 1].matches.length > 0
        ) {
          const findLastObjectWithKey = (arr, key, value) => {
            return arr.findLast(obj => obj && obj[key])
          }
          // const last = roundsParam[roundParam - 1].matches.length - 1
          const last = findLastObjectWithKey(
            roundsParam[roundParam - 1].matches,
            teamName
          )
          // const lastMatchTeamA =
          //   roundsParam[roundParam - 1].matches[last][teamName]
          const lastMatchTeamA = last[teamName]
          // * check if players are first match in round
          const isFirstMatchInRound =
            (roundsParam[roundParam].matches.length === 0 ||
              roundsParam[roundParam].matches.length === 3) &&
            remainingPlayers.length === 6

          if (
            lastMatchTeamA.includes(player1) ||
            (lastMatchTeamA.includes(player2) && isFirstMatchInRound)
          ) {
            continue
          }
        }

        // * check opponent
        // on teamB, check opponentMap to minimize the number of times opponents play together.
        if (teamName === "teamB") {
          let passOppoentCheck = true
          let opponentScorePlayer1
          let opponentScorePlayer2
          const teamAMatch =
            roundsParam[roundParam].matches[matchIterationInRound]["teamA"]

          // * check pair count of each player and opponent in teamA
          for (let x = 0; x < teamAMatch.length; x++) {
            const teamAPlayer = teamAMatch[x]
            opponentScorePlayer1 = getPairCount(
              opponentMap,
              teamAPlayer,
              player1
            )
         
            if (opponentScorePlayer1 > 4) {
              passOppoentCheck = false
              continue
            }
          }

          for (let x = 0; x < teamAMatch.length; x++) {
            const teamAPlayer = teamAMatch[x]
            opponentScorePlayer2 = getPairCount(
              opponentMap,
              teamAPlayer,
              player2
            )

            if (opponentScorePlayer2 > 4) {
              passOppoentCheck = false
              continue
            }
          }

          // if (
          //   maxScoreOpponents === 2 &&
          //   opponentScorePlayer1 === 1 &&
          //   minScoreOpponents === 0
          // ) {
          //   passOppoentCheck = false
          // }

          // if (
          //   maxScoreOpponents === 2 &&
          //   opponentScorePlayer2 === 1 &&
          //   minScoreOpponents === 0
          // ) {
          //   passOppoentCheck = false
          // }

          // if (
          //   maxScoreOpponents - opponentScorePlayer1 < 1 &&
          //   opponentScorePlayer1 > 0 &&
          //   maxScoreOpponents - minScoreOpponents !== 0
          // ) {
          //   passOppoentCheck = false
          // }

          // if (
          //   maxScoreOpponents - opponentScorePlayer2 < 1 &&
          //   opponentScorePlayer2 > 0 &&
          //   maxScoreOpponents - minScoreOpponents !== 0
          // ) {
          //   passOppoentCheck = false
          // }

          // ! need to check what is happening here.
          if (!passOppoentCheck) {
            continue
          }

          // compare player from teamB with the players from teamA in the same match (current match - 3)

          // if (roundsParam[roundParam].matches.length > 0) {

          // }
          // const opponentScore = getPairCount(opponentMap, player1, player2)
          // // * if opponentScore is more than 1 more than other pairs, add
          // if (
          //   maxScoreOpponents - opponentScore < 1 &&
          //   opponentScore > 0 &&
          //   maxScoreOpponents - minScoreOpponents !== 0
          // ) {
          //   continue
          // }
        }

        // ! bestScore is always Infinity, so this will always be true.
        if (score < bestScore && player1 !== player2) {
          lowerPlayerNo = Math.min(player1, player2).toString()
          higherPlayerNo = Math.max(player1, player2).toString()
          bestScore = score

          bestPair = [lowerPlayerNo, higherPlayerNo]
          return bestPair
          // potentialBestPair = [player1, player2];
        }
      }
      // if (exitsLoops) break
    }

    // * max attempts to find a pair.
    if (iterate === maxAttempts - 1) {
      // console.log(
      //   "--------------- No valid pair found after max attempts, returning best pair found so far.----------------"
      // )
      // console.log("remainingPlayers - ", remainingPlayers)
      let sortedArr = remainingPlayers.sort((a, b) => a - b)
      bestPair = sortedArr.slice(0, 2)
    }

    if (bestPair.length > 0) {
      // ?
    }
    return bestPair
  }

  function generateMatches(
    rounds,
    round,
    remainingA,
    teamName,
    partnerMapAParam,
    opponentMapTeam
  ) {
    // const maxAttempts = 20
    const roundsParam = rounds
    const roundParam = round
    const matchesPerRound = 3
    const remainingACopy = [...remainingA]
    // let partnerMapTeam = partnerMaps[teamName]

    // let matchesArr = []
    let matchesArr = [
      ...roundsParam[round].matches.filter(item => !item.teamName),
    ]
    let partnerMapACopyOrig = { ...partnerMaps[teamName] }
    let partnerMapCopy = { ...partnerMaps[teamName] }
    let opponentMapCopyOrig = { ...opponentMapTeam }
    let opponentMapCopy = { ...opponentMapTeam }

    function joinOpponentMap(
      opponentMapCopy,
      bestPair,
      matchesArr,
      potentialMatchesArr,
      i
    ) {
      // partnerMapCopy[bestPairA.join("-")]++
      let teamA = matchesArr[i].teamA
      // let teamB = potentialMatchesArr[i].teamB
      for (let k = 0; k < bestPair.length; k++) {
        for (let j = 0; j < teamA.length; j++) {
          let keyToAdd = teamA[j].concat("-", bestPair[k])
          opponentMapCopy[keyToAdd]++
        }
      }
      // return bestPair.forEach((player, i) => {
      //   teamA.forEach((teamAMember, j) => {
      //     // opponentMapCopy[]
      //   })
      // })
    }

    // * create recursive function to check pairings are as even as possible. (only 1 pairing difference)
    function findOptimalPair(iterate = 0, attempt = 0) {
      // * need to check for array items with different object key teamName

      let potentialMatchesArr = []

      if (attempt >= maxAttempts) {
        // Stop recursion after maxAttempts
        return roundsParam
      }

      let potentialMatchesBoolean
      for (let i = 0; i < matchesPerRound; i++) {
        let matchIterationInRound = i
        const bestPairA = findBestPair(
          remainingA,
          partnerMapCopy,
          iterate,
          roundsParam,
          roundParam,
          teamName,
          opponentMapCopy,
          matchIterationInRound
        )

        potentialMatchesArr.push({ [teamName]: bestPairA })

        remainingA = remainingA.filter(p => !bestPairA.includes(p))

        if (potentialMatchesArr[i]?.[teamName]?.length > 0) {
          partnerMapCopy[bestPairA.join("-")]++
          potentialMatchesBoolean = true
          if (teamName === "teamB") {
            // update opponentMapCopy
            joinOpponentMap(
              opponentMapCopy,
              bestPairA,
              matchesArr,
              potentialMatchesArr,
              i
            )
          }
        } else {
          potentialMatchesBoolean = false
          // reset remaining players
          remainingA = [...remainingACopy]
          partnerMapCopy = { ...partnerMapACopyOrig }
          opponentMapCopy = { ...opponentMapCopyOrig }
          potentialMatchesArr = matchesArr
        }
      }

      // If no valid pair is found, shuffle the players and try again
      if (potentialMatchesBoolean === false) {
        // console.log("No valid pair found, shuffling players and retrying...")
        return findOptimalPair(iterate + 1, attempt + 1)
      }
      roundsParam[round].matches = [
        ...roundsParam[round].matches,
        ...potentialMatchesArr,
      ]

      if (partnerMapCopy) {
        partnerMaps[teamName] = { ...partnerMapCopy }

        // console.log(
        //   "JSON.parse(JSON.stringify( partnerMaps[teamName])) - ",
        //   JSON.parse(JSON.stringify(partnerMaps[teamName]))
        // )
      }

      if (opponentMapCopy) {
        opponentMap = { ...opponentMapCopy }
      }
    }
    // Start the recursive search
    return findOptimalPair()
  }

  /* 
  loops through the rounds and generates the matches for each team
 */
  function generateRounds(teamName, rounds) {
    for (let round = roundsInit.length; round < rounds.length; round++) {
      // * shuffle array
      let remainingA = shuffle([...teams[teamName]])

      let partnerMapTeam = partnerMaps[teamName]
      let opponentMapTeam = opponentMap

      // generate matches for each round
      // console.log("ROUND START ------------- - ", round)

      generateMatches(
        rounds,
        round,
        remainingA,
        teamName,
        partnerMapTeam,
        opponentMapTeam
      )
    }

    return rounds
  }

  async function writeSequentiallyNumberedFile(directoryPath, baseName, data) {
    try {
      // Ensure the directory exists (create it recursively if not)
      await fs.promises.mkdir(directoryPath, { recursive: true })

      let nextNumber = 1

      // Get list of files in the directory
      const files = await fs.promises.readdir(directoryPath)

      // Find the highest existing number
      const matchingFiles = files.filter(
        file => file.startsWith(baseName) && /\d+\./.matches_generator(file)
      )
      if (matchingFiles.length > 0) {
        const numbers = matchingFiles.map(file =>
          parseInt(file.match(/\d+/)[0])
        )
        nextNumber = Math.max(...numbers) + 1
      }

      const filename = `${baseName}${nextNumber}.js`
      const filePath = path.join(directoryPath, filename)

      // Write the file
      await fs.promises.writeFile(filePath, data)
      console.log(`File saved successfully: ${filePath}`)
    } catch (err) {
      console.error(`Error writing file: ${err.message}`)
    }
  }

  /* 
  loops through the teams and generates the rounds
*/
  function generateTeamRounds() {
    const teamNamesArr = ["teamA", "teamB"]
    const rounds = [...roundsInit]

    for (let i = 0; i < totalRounds; i++) {
      rounds.push({ round: rounds.length + 1, matches: [] })
    }

    for (let i = 0; i < teamNamesArr.length; i++) {
      const teamName = teamNamesArr[i]
      // console.log("teamName - ", teamName)
      generateRounds(teamName, rounds)
    }

    /* 
    let maxScoreOpponents = maxNumberInArray(Object.values(opponentMap))
    let minScoreOpponents = minNumberInArray(Object.values(opponentMap))
  */
    // if (partnerMaps.teamA["1-6"] > 1) {
    //   console.log(
    //     "----------------- ERROR: team map has more than 1 -----------------"
    //   )
    //   // console.log("rounds - ", rounds)
    //   return false
    // }
    if (
      maxNumberInArray(Object.values(partnerMaps.teamA)) > 4 ||
      maxNumberInArray(Object.values(partnerMaps.teamB)) > 4
    ) {
      console.log(
        "----------------- ERROR: team map has more than 4 -----------------"
      )
      // console.log("rounds - ", rounds)
      return false
    } else if (maxNumberInArray(Object.values(opponentMap)) > 5) {
      console.log(
        "----------------- ERROR: Opponent map more than 5 -----------------"
      )
      // console.log("rounds - ", rounds)
      return false
    } else if (minNumberInArray(Object.values(opponentMap)) === 0) {
      console.log(
        "----------------- ERROR: Opponent map has a 0 -----------------"
      )
      // console.log("rounds - ", rounds)
      return false
    } else if (
      minNumberInArray(Object.values(partnerMaps.teamA)) === 0 ||
      minNumberInArray(Object.values(partnerMaps.teamB)) === 0
    ) {
      console.log(
        "----------------- ERROR: Partner map has a 0 -----------------"
      )
      // console.log("rounds - ", rounds)
      return false
    } else {
      console.log("GOOOOOOOOD")
      // console.log("let rounds = ", JSON.parse(JSON.stringify(rounds)))
      console.dir(rounds, { depth: null })
      console.log("let opp = ", JSON.parse(JSON.stringify(opponentMap)))
      console.log("let teams = ", JSON.parse(JSON.stringify(partnerMaps)))
      // fs.writeFile('mynewfile.txt', 'Hello content!', (err) => {
      //   if (err) throw err;
      //   console.log('File saved!');
      // });
      const content = `let rounds = ${JSON.stringify(
        rounds,
        null,
        2
      )}\nlet opp = ${JSON.stringify(
        opponentMap,
        null,
        2
      )}\nlet teams = ${JSON.stringify(partnerMaps, null, 2)}`
      // fs.writeFile(filePath, content, err => {
      //   if (err) {
      //     console.error("Error writing file:", err)
      //   } else {
      //     console.log("File written successfully to the desktop!")
      //   }
      // })
      writeSequentiallyNumberedFile(folderPath, "matches-", content)
      return true
    }
    // return rounds
  }

  return generateTeamRounds()
}

// recursive function to call generateTeamRounds 10 times
function recursiveGenerateTeamRounds(iteration = 0) {
  if (iteration >= 7733) {
    return
  }
  if (generateTeamRoundsMain()) {
    console.log(
      "Generated rounds successfully." + ` Iteration: ${iteration + 1}`
    )
    return true
  } else {
    console.log(
      "Generated rounds successfully." + ` Iteration: ${iteration + 1}`
    )
    recursiveGenerateTeamRounds(iteration + 1)
  }
}
recursiveGenerateTeamRounds()
