// import { createRequire } from "module"
// const require = createRequire(import.meta.url)
// import { PlayerInfoUpdate } from "../../src/hooks/get-player-info-UPDATE"

export default function handler(req, res) {
  const data = { hello: `world` }
  res.status(200).json(data)
}

// export default function handler(req, res) {
//   res.status(200).json({ hello: `world` })
// }
