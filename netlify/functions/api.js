// import { PlayerInfoUpdate } from "../../src/hooks/get-player-info-UPDATE"


export default async function handler(req, res) {
  // const playersUpdateJson = PlayerInfoUpdate()

  if (req.httpMethod === "GET") {
    try {
      // Process the GET request as needed
      // const data = playersUpdateJson();
      const data = { hello: `world` };
      const headers = {
        "Access-Control-Allow-Origin": "*", // Replace * with the appropriate domain
        "Access-Control-Allow-Headers": "Content-Type",
      }
      // Return the data as the response
      return {
        statusCode: 200,
        headers,
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
