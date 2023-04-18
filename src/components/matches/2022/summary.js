import React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchSummary2022() {
  return (
    <div className="mb-3">
      <h2>2022 Match</h2>
      <p>
        2022 marked the second year of the BFBH Cup. The 2022 Cup is known as
        the year of the player expansion. The group size went from 8 to 12 to
        players. Along with players, the total points went from 14 to 27.
      </p>
      <p>
        Blue Team and Green Team were lead by returning captains Dylan and
        Goose. Blue retained the cup, which meant Green needed to capture 14
        points to gain control of the cup. A feat that Dylan did not foresee
        happening.
      </p>
      <h2>Day 1</h2>
      <p>
        The cup started at arguably the nicest course of the weekend, Stoatin
        Brae. A major surprise to the first round was Dylan and RJ falling to
        Matt and Gordon 4&3. Green jumped out to a 2-1 lead after the first 9
        holes.
      </p>
      <p>
        In perhaps the match of the weekend, RJ and Evan found themselves down 4
        points with 5 holes to play against Gordon and Derek. In an absolute
        thriller, down to the wire, RJ and Evan rallied and won 5 straight
        holes. RJ’s chip in on 18 sealed the victory for Blue. After the first
        18 holes, Green lead 4-2.
      </p>
      <p>
        In round 2, Jake and Derek vs Dylan and Cam ended in a tie, but every
        hole besides #9 was scored. An exciting match that ended in All-Square.
      </p>
      <p>
        Winning 5 straight holes is something we hadn't seen in the BFBH Cup,
        until this day, and it was seen twice. Once with RJ and Evan's
        come-from-behind victory and the other time was this match with Matt and
        Curtis winning 5 straight holes against Evan and Dan. After day 1, Green
        lead 8.5-3.5.
      </p>
      <h2>Day 2</h2>
      <p>
        Day 2 games included 1 ball bramble, alternate shot, scramble, and
        singles matches. Green started with a 5 point lead and only 5.5 points
        needed to steal the cup.
      </p>
      <p>
        Green team came out on fire, winning 5 of the 6 matches in the first
        round of play. The match that gave Green the cup was a missed putt on
        18. It was the putt heard across the course. Craig missing a 3 foot putt
        that ended the match in AS and gave Green the 1/2 point needed to seal
        the victory.
      </p>
      <p>
        Now just playing for more points, Blue won 2 of the 3 scrambles and 5 of
        the 6 singles matches.
      </p>
      <p>
        <div className="block mb-1">
          <span className="bold">MVP: </span>
          <Link to="/players/matt">Matt</Link>,{" "}
          <Link to="/players/derek">Derek</Link>
        </div>
        <div className="block mb-1">
          <span className="bold">Biggest Surprise: </span>
          <Link to="/players/derek">Derek</Link> (Score: 6-1-1),
          <Link to="/players/travis">Travis</Link> (Score: 6-0-2)
        </div>
        <div className="block mb-1">
          <span className="bold">Most Points Scored: </span>
          <Link to="/players/derek">Derek</Link> (6),{" "}
          <Link to="/players/matt">Matt</Link> (6),{" "}
          <Link to="/players/travis">Travis</Link> (6)
        </div>
      </p>
    </div>
  )
}

export default MatchSummary2022
