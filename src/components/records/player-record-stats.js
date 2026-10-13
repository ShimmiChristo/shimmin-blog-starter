import { FORMATS } from "./points-by-format"

const emptyRecord = () => ({ wins: 0, ties: 0, losses: 0 })

export const getPlayerStats = (player, team) => {
  const stats = {
    name: player?.name,
    matches: 0,
    total: emptyRecord(),
  }
  FORMATS.forEach(({ id }) => {
    stats[id] = emptyRecord()
  })

  Object.values(player.year).forEach(year => {
    if (team && year.team !== team) return
    year.points.forEach(elem => {
      if (!(elem.id in stats)) {
        stats[elem.id] = emptyRecord()
      }
      for (const k of ["wins", "ties", "losses"]) {
        stats[elem.id][k] += elem[k]
        stats.total[k] += elem[k]
      }
      stats.matches += elem.wins + elem.ties + elem.losses
    })
  })

  return stats
}

export const getAllPlayerStats = (players, team) =>
  Object.values(players)
    .map(player => getPlayerStats(player, team))
    .filter(stats => !team || stats.matches > 0)

export const topBy = (stats, valueFn, count = 5) =>
  [...stats].sort((a, b) => valueFn(b) - valueFn(a)).slice(0, count)

export const getPlayerTeamStats = players =>
  [
    { id: "green", label: "Green Team", colorClass: "team-one-color-bg" },
    { id: "blue", label: "Blue Team", colorClass: "team-two-color-bg" },
  ].map(team => ({
    ...team,
    stats: getAllPlayerStats(players, team.id),
  }))
