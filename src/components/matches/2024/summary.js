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
        matches. It went to the end last year and I don't see a reason why it
        won't do the same this year.
      </p>

      <h3>The Trip</h3>
      <p>
        For the location of the 2024, we decided to go back to Boyne. The deal
        and courses are just too good. An exciting change, we added the Pebble
        Beach of the Midwest -- Bay Harbor Golf Club. At Boyne Highlands, we are
        welcomed with Champaign and fresh chocolate chip cookies. Boyne is
        class.
      </p>
      <p>
        We started the trip with a practice round at Hidden River Golf and
        Casting Club on Thursday afternoon. We had a little compition on who
        would pay for dinner later that night. It was 4 Green Team members vs 5
        Blue Team members. The game was 2 best ball, stroke play. Long story,
        short, Green came out victorious by 9 strokes. Chris and Gordon lead the
        way for Green, each shooting net 1 under par. Matt shot the low gross
        score with 11 over.
      </p>

      <h3>Day 1</h3>
      <p>
        First tee time is 8:30am at Bay Harbor Golf Club. We have the first tee
        time on the sheet. We'll be setting the pace of play. Each day consists
        of 4, 9-hole rounds. Each round is a different gameplay.The opening
        round is the front 9 at Bay Harbor, and the gameplay is 1 Best Ball.
        Meaning between the two partners, we write down the low score for each
        hole. The opening round is {`${matt} and ${chris}`} against{" "}
        {`${dylan} and ${dan}`}. Going into this featured matchup, Chris had
        never beaten Dylan (0-1-6 all time). This match was back and forth and
        eventually came down to the last hole where {dylan} and {dan} both had
        eagle putts but {matt} closed the door with a 30 foot putt to push on
        the last hole and hold off Blue to get the first point of the cup. Every
        year thus far, the winning team of the opening matchup has aligned with
        the winning team of the cup. Will 2024 outcome be the same?
      </p>
      <p>
        Match 2 was {gordon} and {curtis} against new commer, {blake} and last
        year's mvp, {evan}. This match came down to the last hole, Blue was down
        2 with 2 to play, but they found a way to win 8 and 9 and push the
        match.
      </p>
      <p>
        Match 3 was {derek} and {jake} against {rj} and {craig}. {jake} is back
        on Green after starting as an alternate. In a match that started tight,
        Blue was too much and won holes 5,6,7 to win 3&2.
      </p>

      <p>
        Round 2 was at the Quarry and the gameplay was 2 best ball. Now this
        time, both players on the team add their scores to have a combined
        score. Match 4 was Green's lower handicaps, {matt} and {gordon} vs
        Blue's high handicaps, {evan} and {dan}. {evan} and {dan} have never won
        together. After this match, that still remains true. Green takes 5 of
        the first 6 holes to win 4&3.
      </p>
      <p>
        Match 5 is the featured match. It's {chris} and {jake} vs {dylan} and{" "}
        {craig}. {chris} (+0 net) and {jake} (+10 net) score on the right holes
        and beat {dylan} (+7 net) and {craig} (+3 net).
      </p>
      <p>
        Match 6 was {derek} and {curtis} vs {rj} and {blake}. {derek} and{" "}
        {curtis} jumped out to a quick lead after the first hole but Blue was
        too much. {rj} is 2-0 after 2 matches and {blake} gets his first win at
        a BFBH Cup.
      </p>

      <p>
        <div className="block mb-1">
          <span className="bold">MVP: </span>
          <Link to="/players/{chris}">{chris}</Link>
        </div>
        <div className="block mb-1">
          <span className="bold">Biggest Surprise: </span>
          <Link to="/players/{dan}">{dan}</Link> (Score: 1-1-6),{" "}
        </div>
        <div className="block mb-1">
          <span className="bold">Most Points Scored: </span>
          <Link to="/players/{chris}">{chris}</Link> 6 (5-2-1)
        </div>
      </p>
    </div>
  )
}

export default MatchSummary2024
