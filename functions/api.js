import { createRequire } from "module"
const require = createRequire(import.meta.url)

export default async function handler(req, res) {
  if (req.httpMethod === "GET") {
    try {
      // Process the GET request as needed
      const data = require("../src/data/playersUpdate.json")

      // Return the data as the response
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      }
    } catch (error) {
      // Return an error response if there was an issue processing the request
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to process GET request" }),
      }
    }
  }
}
