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

const teamA = ["1", "2", "3", "4", "5", "6"]
const teamB = ["7", "8", "9", "10", "11", "12"]
const totalRounds = 6
const matchesPerRound = 3
const matchExample = [
  { teamA: ["1", "2"], teamB: ["7", "8"] },
  { teamA: ["3", "4"], teamB: ["9", "10"] },
  { teamA: ["5", "6"], teamB: ["11", "12"] },
]
let roundsInitTest = [
  {
    round1: [
      {
        teamA: ["1", "6"],
      },
      {
        teamA: ["2", "4"],
      },
      {
        teamA: ["3", "5"],
      },
    ],
  },
  {
    round2: [
      {
        teamA: ["1", "6"],
      },
      {
        teamA: ["2", "4"],
      },
      {
        teamA: ["3", "5"],
      },
    ],
  },
  { round3: [] },
  { round4: [] },
  { round5: [] },
  { round6: [] },
  { round7: [] },
  { round8: [] },
]
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
    ],
  },
]

const initPairMap = players => {
  const map = {}
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      const key = [players[i], players[j]].sort().join("-")
      // * if exist in roundsInit, then include each in the map object.
      roundsInit.forEach(round => {
        if (
          round.matches.some(
            match =>
              match.teamA.includes(players[i]) &&
              match.teamA.includes(players[j])
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
let partnerMapA = initPairMap(teamA)
let partnerMapB = initPairMap(teamB)
const partnerMapACopy = { ...partnerMapA }
const partnerMapBCopy = { ...partnerMapB }

const getPairCount = (map, p1, p2) => {
  const key = [p1, p2].sort().join("-")
  return map[key] || 0
}

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
  roundParam
) {
  const roundNo = roundParam + 1
  console.log("remainingPlayers - ", remainingPlayers)
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

  // function findOptimalPartner(iterate = 0, attempt = 0) {
  // console.log('iterate - ', iterate);

  let maxScore = maxNumberInArray(Object.values(partnerMap))
  let minScore = minNumberInArray(Object.values(partnerMap))

  console.log(
    "JSON.parse(JSON.stringify(partnerMap)) - ",
    JSON.parse(JSON.stringify(partnerMap))
  )
  // // if (iterate === undefined) {
  // //   iterate = 1;
  // // }
  // if (attempt >= maxAttempts) {
  //   // Stop recursion after maxAttempts
  //   return bestPair;
  // }

  let iterate = iterateParam || 0
  let lowerPlayerNo
  let higherPlayerNo
  let player1
  let player2

  for (let i = iterate; i < remainingPlayers.length + iterate; i++) {
    console.log("iterate - ", iterate)
    console.log("remainingPlayers.length - ", remainingPlayers)
    // try to get a player that has played the least number of times

    for (let j = iterate + 1; j < remainingPlayers.length + iterate; j++) {
      player1 = remainingPlayers[i % remainingPlayers.length]
      player2 = remainingPlayers[j % remainingPlayers.length]

      console.log("player1 - ", player1)
      console.log("player2 - ", player2)

      const score = getPairCount(partnerMap, player1, player2)
      console.log("score - ", score)
      // let maxScore = maxNumberInArray(Object.values(partnerMap));
      // let minScore = minNumberInArray(Object.values(partnerMap));
      // * if score is more than 1 more than other pairs, add

      console.log("maxScore - ", maxScore)

      if (maxScore - score < 1 && score > 0 && maxScore - minScore !== 0) {
        console.log("continued score - ", score)
        // * create a recursive function to find the best pair
        continue
      }

      // * used to check 0 partner pairs with 2 partners.
      if (maxScore === 2 && score === 1 && minScore === 0) {
        console.log("maxScore === 2 && score < 2 - ", score)
        continue
      }

      // * check let the last 2 players in the odd rounds do not play in the first match of the even rounds.
      console.log(
        "JSON.parse(JSON.stringify(roundsParam)) - ",
        JSON.parse(JSON.stringify(roundsParam))
      )
      console.log("roundNo - ", roundNo)
      if (roundNo % 2 === 0 && roundsParam[roundParam - 1].matches.length > 0) {
        const last = roundsParam[roundParam - 1].matches.length - 1
        const lastMatchTeamA = roundsParam[roundParam - 1].matches[last].teamA
        // console.log("lastMatchTeamA - ", lastMatchTeamA)
        // * check if players are first match in round
        const isFirstMatchInRound =
          roundsParam[roundParam].matches.length === 0 && remainingPlayers.length === 6
        console.log("isFirstMatchInRound - ", isFirstMatchInRound)
        if (
          lastMatchTeamA.includes(player1) ||
          (lastMatchTeamA.includes(player2) && isFirstMatchInRound)
        ) {
          console.log(
            "Skipping pair due to last match in even round - ",
            lastMatchTeamA
          )
          continue
        }
      }

      // ! bestScore is always Infinity, so this will always be true.
      if (score < bestScore && player1 !== player2) {
        lowerPlayerNo = Math.min(player1, player2).toString()
        higherPlayerNo = Math.max(player1, player2).toString()
        bestScore = score
        // console.log('lowerPlayerNo ----- ', lowerPlayerNo);
        // console.log('higherPlayerNo ----- ', higherPlayerNo);
        bestPair = [lowerPlayerNo, higherPlayerNo]
        return bestPair
        // potentialBestPair = [player1, player2];
      }
    }
  }

  // // If no valid pair is found, shuffle the players and try again
  // if (bestPair.length === 0) {
  //   // remainingPlayers = shuffleArray(remainingPlayers);
  //   // bestPair = [];
  //   return findOptimalPartner(iterate + 1, attempt + 1);
  // }

  // * return something
  // bestPair = [Math.min(player1, player2).toString(), Math.max(player1, player2).toString()];

  // * 20 is the max attempts to find a pair.
  if (iterate === 20 - 1) {
    console.log(
      "No valid pair found after max attempts, returning best pair found so far."
    )
    console.log("remainingPlayers - ", remainingPlayers)
    bestPair = remainingPlayers.slice(0, 2)
  }

  if (bestPair.length > 0) {
    console.log('JSON.parse(JSON.stringify(bestPair)) - ', JSON.parse(JSON.stringify(bestPair)));
  }
  return bestPair
  // }

  // // Start the recursive search
  // return findOptimalPartner();
}

function generateMatches(
  rounds,
  round,
  remainingA,
  partnerMapAParam,
  remainingB,
  partnerMapB
) {
  const maxAttempts = 20
  const roundsParam = rounds
  const roundParam = round
  const matchesPerRound = 3
  const remainingACopy = [...remainingA]
  // const partnerMapACopy = { ...partnerMapAParam };
  // let partnerMapAP = { ...partnerMapA };

  // for (let i = 0; i < matchesPerRound; i++) {
  //   const bestPairA = findBestPair(remainingA, partnerMapA);
  //   // console.log('bestPairA - ', bestPairA);
  //   // const bestPairB = findBestPair(remainingB, partnerMapB);

  //   roundsParam[round].matches.push({ teamA: bestPairA });
  //   console.log('roundsParam[round].matches - ', roundsParam[round].matches);
  //   partnerMapA[bestPairA.join('-')]++;
  //   // partnerMapB[bestPairB.join('-')]++;

  //   remainingA = remainingA.filter((p) => !bestPairA.includes(p));
  //   // remainingB = remainingB.filter((p) => !bestPairB.includes(p));
  // }

  // * check for preset round
  // if (round.matches.length > 0) {
  //   console.log('Round already has matches, skipping generation for this round.');

  //   partnerMapA = { ...partnerMapAParam };
  //   return roundsParam;
  // }

  let matchesArr = []

  // * create recursive function to check pairings are as even as possible. (only 1 pairing difference)
  function findOptimalPair(iterate = 0, attempt = 0) {
    let partnerMapACopy = { ...partnerMapAParam }
    let potentialMatchesArr = []
    console.log(
      "JSON.parse(JSON.stringify(partnerMapACopy)) - ",
      JSON.parse(JSON.stringify(partnerMapACopy))
    )
    console.log("iterate - ", iterate)

    // let maxScore = maxNumberInArray(Object.values(partnerMap));
    // let minScore = minNumberInArray(Object.values(partnerMap));

    // if (iterate === undefined) {
    //   iterate = 1;
    // }
    if (attempt >= maxAttempts) {
      // Stop recursion after maxAttempts
      return roundsParam
    }

    let potentialMatchesBoolean
    for (let i = 0; i < matchesPerRound; i++) {
      const bestPairA = findBestPair(
        remainingA,
        partnerMapACopy,
        iterate,
        roundsParam,
        roundParam
      )
      console.log("bestPairA - ", bestPairA)
      console.log("remainingA - ", remainingA)
      // console.log('JSON.parse(JSON.stringify(bestPairA)) - ', JSON.parse(JSON.stringify(bestPairA)));
      // const bestPairB = findBestPair(remainingB, partnerMapB);

      // roundsParam[round].matches.push({ teamA: bestPairA });

      potentialMatchesArr.push({ teamA: bestPairA })
      console.log("potentialMatchesArr[i] - ", potentialMatchesArr[i])
      console.log("i - ", i)
      // console.log('roundsParam[round].matches - ', roundsParam[round].matches);

      // if (potentialMatchesArr[i]?.teamA.length > 0) {
      //   partnerMapACopy[bestPairA.join('-')]++;
      // }

      // partnerMapA[bestPairA.join('-')]++;
      // partnerMapB[bestPairB.join('-')]++;

      remainingA = remainingA.filter(p => !bestPairA.includes(p))
      // remainingB = remainingB.filter((p) => !bestPairB.includes(p));

      if (potentialMatchesArr[i]?.teamA.length > 0) {
        partnerMapACopy[bestPairA.join("-")]++
        potentialMatchesBoolean = true
      } else {
        potentialMatchesBoolean = false
        // reset remaining players
        remainingA = [...remainingACopy]
        partnerMapA = { ...partnerMapACopy }
        potentialMatchesArr = matchesArr
      }
    }

    // If no valid pair is found, shuffle the players and try again
    if (potentialMatchesBoolean === false) {
      console.log("No valid pair found, shuffling players and retrying...")
      // console.log('bestPair - ', bestPair);
      // remainingPlayers = shuffleArray(remainingPlayers);
      // bestPair = [];
      return findOptimalPair(iterate + 1, attempt + 1)
    }
    roundsParam[round].matches = [...potentialMatchesArr]
    if (partnerMapACopy) {
      partnerMapA = { ...partnerMapAParam, ...partnerMapACopy }
    }
  }
  // Start the recursive search
  return findOptimalPair()

  // ! 2 functions in here.
  // * 1. check if the paritings will work with a copy of the partnerMap and round matches.
  // * 2. try 10 or x times. and return the roundsParam after trying different vaiations.
  // return roundsParam;
}

function generateRounds(teamA, teamB, totalRounds) {
  const rounds = [...roundsInit]
  for (let i = 0; i < totalRounds; i++) {
    rounds.push({ round: rounds.length + 1, matches: [] })
  }

  for (let round = roundsInit.length; round < rounds.length; round++) {
    let remainingA = [...teamA]
    let remainingB = [...teamB]

    // generate matches for each round
    console.log("ROUND ------------- - ", round)
    generateMatches(
      rounds,
      round,
      remainingA,
      partnerMapA,
      remainingB,
      partnerMapB
    )
  }

  return rounds
}
// totalRounds = 8;
generateRounds(teamA, teamB, totalRounds)
