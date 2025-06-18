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

function Foreword2025() {
  return (
    <>
      <h3 className="h4 mb-4">2025 Cup Foreword</h3>
      <p>
        The BFBH Cup is entering the 5th year of a tradition. The Boys are
        bringing it back to Boyne and looking to get the original crew together
        for the first time ever.
      </p>
      <h3 className="h4">Venue</h3>
      <p>
        We're heading back to Boyne for a third straight year. The 11 courses
        Boyne has to offer combined with the price and lodging, it can't be
        beat. Trust me, I've looked. There's no better deal in the state of
        Michigan, possibly the country. Yes, I'm high and mighty on MI golf.
      </p>

      <h3 className="h4">The Boys</h3>
      <p>
        We're looking to get the original crew together for the first time ever.
        That's right. Not even in the first year, did we have the original 12.
        Every year since we expanded to 12, we've had an alternate substitute.
        That alternate has been Jake for the last 3 years. We have his number on
        speed dial. He helped bring home 2 winning seasons for the Green Team.
        His presence has been an integral part of the cups success. Thank you.
      </p>

      <h3 className="h4">Handicaps</h3>
      <p>
        Another competitive year in 2024 thanks to our boys using handicaps.
        We'll see where the handicaps go this year, but I don't anticipate major
        changes from the squad. Except Dan, he predicts he'll drop his 33
        handicap to a 12 in 2025. You better get practicing Danny Dimes.
      </p>

      <h3 className="h4">Predictions</h3>
      <p>
        The cup will come down to the singles matches, <Link href="https://www.boynegolf.com/eleven-courses/doon-brae-short-course">Doon Brae</Link>, the par 3 course, will be
        awesome and someone will get a hole-in-one.{" "}
      </p>

      <h3 className="h4">Scoring</h3>
      <p>
        After Green's victory in 2024, they only needs 13.5 points to retain and
        cup and Blue needs 14 points to take it back.
      </p>
    </>
  )
}

export default Foreword2025
