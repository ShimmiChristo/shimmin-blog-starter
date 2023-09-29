import { createRequire } from "module"
const require = createRequire(import.meta.url)

export default function handler(req, res) {
  const data = require("../data/playersUpdate.json")
  res.status(200).json(data)
}
