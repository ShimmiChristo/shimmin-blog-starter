import { readFileSync, writeFileSync } from "fs"
import { prepareAllGolferFragmentUpdates } from "./updateGolferFragments.mjs"

const PLAYERS_PATH = "src/data/playersUpdate.json"

const playersRoot = JSON.parse(readFileSync(PLAYERS_PATH, "utf8"))
if (
  !Array.isArray(playersRoot) ||
  !playersRoot[0] ||
  typeof playersRoot[0] !== "object" ||
  Array.isArray(playersRoot[0])
) {
  throw new Error(
    `${PLAYERS_PATH} must contain an array with a player data object at index 0.`
  )
}

const updates = prepareAllGolferFragmentUpdates(playersRoot[0])
for (const { filePath, source } of updates) {
  writeFileSync(filePath, source)
}

console.log(`Updated ${updates.length} golfer fragments from ${PLAYERS_PATH}.`)
