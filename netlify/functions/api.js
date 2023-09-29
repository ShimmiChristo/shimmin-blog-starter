import { createRequire } from "module"
const require = createRequire(import.meta.url)

export default function handler(req, res) {
  if (req.httpMethod === "GET") {
    try {
      const data = require("../data/playersUpdate.json")
      res.status(200).json(data)
    } catch (error) {
      // Return an error response if there was an issue processing the request
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to process GET request" }),
      }
    }
  }
}
