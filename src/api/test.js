// import { createRequire } from "module"
// const require = createRequire(import.meta.url)
// import { PlayerInfoUpdate } from "../../src/hooks/get-player-info-UPDATE"
import { createRequire } from "module"
const require = createRequire(import.meta.url)

export default function handler(req, res) {
  // const data = { hello: `world` }
  const data = require("../data/playersUpdate.json")
  res.status(200).json(data)
}

// export default function handler(req, res) {
//   res.status(200).json({ hello: `world` })
// }
