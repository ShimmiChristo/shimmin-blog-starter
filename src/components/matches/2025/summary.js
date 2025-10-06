import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import {
  cam,
  chris,
  craig,
  curtis,
  dan,
  derek,
  dylan,
  evan,
  gordon,
  stephen,
  matt,
  rj,
} from "../../../helpers/playerLinks"

function MatchSummary2025() {
  return (
    <>
      <div className="mb-3">
        <div className="container">
          <h2>2025 Match</h2>
          <p>
            The 2025 Boys From Back Home Cup was the 5th year of the annual golf
            tradition. It was held for the third straight year at Boyne
            Highlands in Harbor Springs, MI. The cup is a 2-day event, 8 9-hole
            matches, Ryder Cup style. To contiue the tradition, we played our
            practice round the day before at Hidden River Golf and Casting Club.
            Along with the practice round, we also added the par 3 course, Doon
            Brae on Saturday night.
          </p>
          <p>
            Historically, the team that wins the first match has won the cup.
            We'll see what happens this year!
          </p>
          <div className="mt-3 mb-4">
            <h3>Day 1</h3>
            <h4 className="h5">
              Bay Harbor Golf Club - Friday, September 26, 2025
            </h4>
          </div>
          <h5 className="font-weight-bold">
            Round 1 & 2 - Best Ball & 2 Best Ball
          </h5>
          <p>
            The first day of the 2025 match was held at Bay Harbor Golf Club.
            The weather was perfect, with partly clear skies and a light breeze.
            Green jumped out early, winning the first three matches to take a
            3-0 lead.They continued theri momentum, winning 2 of the next 3
            matches to take a commanding 5-1 lead into the lunch break.
          </p>
          <p>
            The score won't show it, but all the matches were tight with 5 of
            the 6 matches came down to the last hole.
          </p>
          <h4 className="h5">
            Crooked Tree Golf Club - Friday, September 26, 2025
          </h4>
          <h5 className="font-weight-bold">
            Round 3 & 4 - Alt Shot & Scramble
          </h5>
          <p>
            For the first year, we played our second round at Crooked Tree Golf
            Club. The course was in great shape and provided a good challenge
            for both teams. The weather was again perfect, with sunny skies and
            a light breeze. The greens were fast and firm, making putting a
            challenge.
          </p>
          <p>
            The first match of alt shot was a nail biter. It was {matt} and{" "}
            {stephen} vs {craig} and {dan}. 7 of the 9 holes were halved, with
            the match all square going into the 9th hole. In the end, they
            halved the last hole to halve the match. It was the weekend's first
            halved match.
          </p>
          <p>
            The next match was {gordon} and {derek} vs {dylan} and {evan}. This
            match was the opposite of the first match. Green and Blue were going
            back and forth in scoring. 8 of the 9 holes were won by a team. It
            came down to the 9th hole with Green up. Blue was able to get par to
            win the hole and halve the match. Another tie on alt shot.
          </p>
          <p>
            The final match of alt shot was {curtis} and {chris} vs {rj} and
            {cam}. This match was one of a kind. It was all Green. They won the
            first 5 holes to go 5 and 4. This is one of the few 5&4 matches in
            cup history. Green won 5 over through 5 holes.
          </p>
          <p>
            The final matches of the day were the scramble matches. The first
            match was {matt} and {derek} vs {craig} and {evan}. Green team was
            the high favorite in the match. Green came out early with a 2 hole
            lead after 2 holes. Blue stayed in the fight though and was dormie
            after 7 holes. Blue put together back to back net birdies on 8 and 9
            to push the match and give Blue a 1/2 point.
          </p>
          <p>
            The next match was {dylan} and {cam} vs {stephen} and {chris}. Blue
            was the slight favorite at the start of the cup. With a record of
            4-1, {dylan} is the Cup's best scramble player. To litle surprise,
            Blue was able jump out to a 1 up lead after 4 holes. However, what
            was a big surprise was {cam} falling in the woods on hole 4 and
            getting up on banging home a par putt to win the hole. In the end,{" "}
            {cam} couldn't recover and Green was too much to handle.Green won
            2&1.
          </p>
          <p>
            The third and final match of the day was {gordon} and {curtis} vs{" "}
            {rj} and {dan}. The straight up match was back and forth with 5
            total birdies. With the match all square going into the 9th hole,{" "}
            {dan} was able to make a clutch birdie putt to win the hole and the
            the match.
          </p>
          <p className="bold">
            After day 1, Green team has a commanding lead of 8.5 to 3.5. With 15
            points left, Green needs just 5 points on day 2 to clinch the cup.
          </p>
        </div>

        <div className="container">
          <p>
            <div className="block mb-1">
              <span className="bold">MVP: </span>
              <Link to="/players/{cam}">{cam}</Link> (for Green)
            </div>
            <div className="block mb-1">
              <span className="bold">Biggest Surprise: </span>
              <Link to="/players/{cam}">{cam}</Link> (Score: 2-1-6),{" "}
            </div>
            <div className="block mb-1">
              <span className="bold">Most Points Scored: </span>
              <Link to="/players/{chris}">{chris}</Link> 6 (6-0-2)
            </div>
          </p>
        </div>
        <div className="container col-lg-8 my-3">
          <StaticImage
            src="../../../images/group/2025-group.jpg"
            alt="2025 bfbh cup players"
            loading="eager"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </div>
    </>
  )
}

export default MatchSummary2025
