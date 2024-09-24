import React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import {
  blake,
  chris,
  craig,
  curtis,
  dan,
  derek,
  dylan,
  evan,
  gordon,
  jake,
  matt,
  rj,
} from "../../../helpers/playerLinks"

function MatchSummary2024() {
  return (
    <div className="mb-3">
      <h2>2024 Match</h2>

      <h3>Before the 2024 Cup</h3>
      <p>
        What will 2024 bring? We're going back to Boyne for the second straight
        year. Same place, yet slightly different. We're playing a week later in
        the season, we're adding Bay Harbor Golf Club, with a familiar face and
        a new face. Gordon is back for his second BFBH Cup, Jake is staying on
        Green (his alternate status on Green is becoming very permanent), Cam
        and Travis are OOO, and we added a cousin Blake (HC 16) on Blue.
      </p>
      <h3>Handicaps</h3>
      <p>
        There's some early Cup rumblings about the handicaps. Some people are
        too high, some people are too low. We use an honor system when it comes
        to handicapping the BFBH Cup. Since we have an array of talent (to put
        it nicely), all of scores are net scores. Last year was the first year
        we asked everyone to maintain a HC and I think it was a great success.
        Considering it came down to the last hole. Our total team handicaps in
        2024 are Green, 102.6 and Blue, 102.2.
      </p>

      <h3>Predictions</h3>
      <p>
        I'm predicting that the Cup will come down to the last day, singles
        matches. It went to the end last year and I don't see a reason why it won't
        do the same this year.
      </p>

      {/* <p>
        <div className="block mb-1">
          <span className="bold">MVP: </span>
          <Link to="/players/{evan}">{evan}</Link>
        </div>
        <div className="block mb-1">
          <span className="bold">Biggest Surprise: </span>
          <Link to="/players/{evan}">{evan}</Link> (Score: 6-1-1),{" "}
        </div>
        <div className="block mb-1">
          <span className="bold">Most Points Scored: </span>
          <Link to="/players/{derek}">{evan}</Link> (6),{" "}
          <Link to="/players/{derek}">{derek}</Link> (6)
        </div>
      </p> */}
    </div>
  )
}

export default MatchSummary2024
