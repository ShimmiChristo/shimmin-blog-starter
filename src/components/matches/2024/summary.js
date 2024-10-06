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

      {/* <h3>Before the 2024 Cup</h3>
      <p>
        What will 2024 bring? We're going back to Boyne for the second straight
        year. Same place, yet slightly different. We're playing a week later in
        the season, we're adding Bay Harbor Golf Club, with a familiar face and
        a new face. Gordon is back for his second BFBH Cup, Jake is staying on
        Green (his alternate status on Green is becoming very permanent), Cam
        and Travis are sitting out this year, and, brother-in-law, Blake (HC 16)
        is filling in on Blue.
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
      </p> */}

      {/* <h3>The Trip</h3>
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
      </p> */}

      <h3>Day 1</h3>
      <p>
        First tee time was 8:30am at Bay Harbor Golf Club. We had the first tee
        time on the sheet. We were setting the pace of play. Each day consisted
        of 4, 9-hole rounds. Each round is a different gameplay.The opening
        round was the front 9 at Bay Harbor, and the gameplay was 1 Best Ball.
        Meaning, between the two partners, we write down the low score for each
        hole. The opening round was {`${matt} and ${chris}`} against{" "}
        {`${dylan} and ${dan}`}. Going into this featured matchup, Chris had
        never beaten Dylan (0-1-6 all time). This match was back and forth and
        eventually came down to the last hole where {dylan} and {dan} both had
        eagle putts but {matt} closed the door with a 30 foot putt to push on
        the last hole and hold off Blue to get the first point of the cup. Every
        year thus far, the winning team of the opening matchup has aligned with
        the winning team of the cup. Would 2024 outcome be the same?
      </p>
      <p>
        Match 2 was {gordon} and {curtis} against newcomer, {blake} and last
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
        together. After this match, that remained true. Green took 5 of the
        first 6 holes to win 4&3.
      </p>
      <p>
        Match 5 was the featured match. It was {chris} and {jake} vs {dylan} and{" "}
        {craig}. {chris} (+0 net) and {jake} (+10 net) score on the right holes
        and beat {dylan} (+7 net) and {craig} (+3 net). What makes a match
        "featured"? Featured matches are recorded.
      </p>
      <p>
        Match 6 was {derek} and {curtis} vs {rj} and {blake}. {derek} and{" "}
        {curtis} jumped out to a quick lead after the first hole but Blue was
        too much. {rj} starts 2-0 after 2 matches and {blake} gets his first win
        at a BFBH Cup.
      </p>

      <p>
        After the best ball and 2 best ball matches, Green was up 1 point on
        Blue. <b>3.5 to 2.5</b>
      </p>

      <p>
        Matches 7-12 were played at The Moor Course at Boyne Highlands. The
        first 3 matches were Alternate format and the last 3 were Scramble.{" "}
      </p>
      <p>
        To start The Moor, {matt} and {curtis} had their hands full against{" "}
        {craig} and {evan}. In a surprising upset, Green scored one point on
        hole 8, but Blue won 2UP.
      </p>
      <p>
        Match 8 was {chris} and {derek} against {blake} and {dan}. This was an
        exciting match. 8 of 9 holes were scored by a team and Dan almost got a
        hole-in-one (instead Blue settled for a net hole-in-one). Green was able
        to hold off a Blue comeback, and secure a point on the last hole to win
        2UP.
      </p>
      <p>
        Match 9 was one of the most dominate performances of the cup. Blue's,{" "}
        {dylan} and {rj} faced off against Green's {gordon} and {jake} in
        alternate shot. Green had an extra stroke on 7 of the hardest holes.
        Green even insisted 7 strokes were too many. {dylan} and {rj} were as
        good as it gets on alternate shot. They shot even par on 6 holes and won
        4&3.
      </p>
      <p>
        Match 10 started the scramble matches. After starting 3 up after 4 holes{" "}
        {matt} and {jake} had to hold off {craig} and {blake}'s comeback and won
        1UP.{" "}
      </p>
      <p>
        In match 11, {chris} and {rj} were fighting to stay undefeated and{" "}
        {curtis} and {dan} were fighting for their first win. Green started
        strong and was 2 up with 3 to play. On par 3, hole 17, Green had hit on
        the green and Blue just off. After flubbing a putt and thinning a chip,
        Blue was just off the green hitting their third shot. Meanwhile, Green
        hit their put to about 8 feet for par. {dan} goes first and drains a 30
        footer to take par! Then {curtis} steps up and drains an 8 footer center
        cup. What looked like the last hole and a lost point for Blue, ended on
        a push and going to hole 18. On 18, {rj} hit a perfect drive and cut the
        corner with a look at the green from 170 yards out on a par 5. Green
        played all of {curtis}'s shots and ended with a respectable par. Blue
        won with a nice birdie and took the hole to push the match.
      </p>
      <p>
        After Day 1, the score was tied 6-6. {chris} goes 3-1-0 and {rj} goes
        3-1-0.{" "}
      </p>

      <h3>Day 2</h3>
      <p>
        Day 2 started at Arthur Hills. The first 9 holes was a one best-ball
        bramble and the second 9 holes was a two best-ball bramble. It's the
        longest course at Boyne so Bramble helps teams off the tee.
      </p>
      <p>
        The opening match, match 13, started the day will excitement. It was{" "}
        {gordon} and {curtis} against {dylan} and {blake}. I'll start with this.{" "}
        {dylan} was 2 under par and Blue lost the match on the 8th hole, 2&1!
        There were two holes were a player didn't shoot under par (net par).
        Holes 1 and 8. Hole 1 was won by a net par for Green. {gordon} had a
        gross birdie on 2, then on 3 {gordon} made an eagle from 130 yards out!
        The guys didn't see it go in, they looked around for a few minutes until
        someone said "hey, maybe it's in the cup", and it was! The Cup's first
        gross eagle! {dylan} shot birdie and lost the hole. The 4th hole,{" "}
        {blake} shot net birdie. On hole 5, {curtis} shot net birdie. On hole 6,
        {dylan} chipped in from 30 yards out for birdie. Then while Gren was
        looking for a ball to play, {dylan} putted in for back to back birdies
        on hole 7. Eventually, {curtis} found a ball to play and chipped past
        the hole 30+ feet but was able to make the comeback par putt for net
        birdie! They pushed on hole 7. Both teams parred 8 and the match was
        over. According to the scores, this match alone had 11 net birdies or
        better. What a performance gentlemen.
      </p>
      <p>
        Match 14 was a dogfight between {chris}, {jake} and {rj}, {evan} to the
        end. {chris} and {rj} still haven't lost at this point and they just got
        done tieing in the previous match. {chris} had the driver working early.
        Hitting 5 or 6 straight fairways but after 4 holes, Blue was up 2-1.
        Then Green got on track and took a 1UP lead after winning holes 5 and 6.
        Then the momentum switched on the par 3, 7. {chris} hit on the green
        giving a both players on Green a birdie putt. Both players on Blue
        missed the green. {chris} and {jake} were sitting on the green with a
        huge advantage. {rj} has a great up and down from just off the green.{" "}
        {chris} and {jake} would both go on to 3 putt the hole. Instead of being
        2 down with 2 to play (dormie). The match was all square. Then on 8,
        everyone is getting a stroke except {rj}. On the tee at 8, {rj} pushed
        his drive OB. With the door wide open, {chris} steps up and does the
        same thing. {evan} then hits a 5 iron off the tee box to get in play and{" "}
        {jake} hits a bomb, and keeps Green in it. On to hole 9, the second par
        3. Again Green hits on and Blue is just off. And again Blue is able to
        get up and down and put the pressure on Green team. With the last putt
        of the match, {chris} is able to make the little 3/4 footer to push the
        match.
      </p>
      <p>
        Match 15 was {matt} and {derek} vs {craig} and {dan}. This match would
        come down to the last hole. Green jumps to a quick lead on hole 1. Blue
        eventually ties the match on hole 5. Then it's back and forth, Green
        then Blue. On the last hole, it's a par 3 with the match all square.
        Green is able to hit just off the green and {matt} nails a 7/8 footer to
        get up and down for par and Green takes a point 1UP.
      </p>
      <p>
        <b>After the first 5 rounds, the score is 8.5, Green to 6.5, Blue.</b>
      </p>
      {/* <p>
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
      </p> */}
    </div>
  )
}

export default MatchSummary2024
