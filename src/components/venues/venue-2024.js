import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ImageOverlapTL = styled.div`
  @media screen and (min-width: 767px) {
    transform: translate(-10%, 0%);
    width: calc(90%);
    margin: 0;
  }
  border-radius: calc(0.5rem - 1px);
  margin-bottom: 1rem;

  > * {
    border-radius: calc(0.5rem - 1px);
  }
`
const ImageOverlapBR = styled.div`
  @media screen and (min-width: 767px) {
    transform: translate(0%, -20%);
    z-index: -1;
    margin: 0;
    width: 90%;
  }
  position: relative;
  margin-bottom: 1rem;

  > * {
    border-radius: calc(0.5rem - 1px);
  }
`
const ImageOverlap = styled.div`
  @media screen and (min-width: 767px) {
    z-index: -1;
    margin: 0;
    width: 100%;
  }
  position: relative;
  margin-bottom: 1rem;

  > * {
    border-radius: calc(0.5rem - 1px);
  }
`

const bannerImg = {
  opacity: 0.8,
  minHeight: `200px`,
}

function Venue2023() {
  return (
    <div className="my-3">
      <h2 className="h1 text-center mb-3">2023 Venues</h2>
      <div className="container mb-6">
        <div className="row py-3 mb-lg-5">
          <div className="col">
            <div className="card bg-dark text-white">
              <StaticImage
                src="../../images/course-boyne/BH_Hills_4_1440x600.jpg"
                alt="hole 1"
                placeholder="blurred"
                className="card-img"
                style={bannerImg}
              />
              <div className="card-img-overlay text-center d-flex flex-column justify-content-center">
                <h3 className="h2 card-title text-white ">2023</h3>
                <p className="h3 card-text text-white">
                  The Highlands at Boyne
                </p>
                <p className="card-text">Harbor Springs, MI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4 d-flex flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <div className="images__overlap">
              <ImageOverlap className="images__overlap--tl">
                <StaticImage
                  src="../../images/course-boyne/BH_Hills_5_1030x490.jpg"
                  alt="hole 5"
                  placeholder="blurred"
                />
              </ImageOverlap>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="h3">Arthur Hills</h3>
            <p>
              <Link href="https://boynegolf.com/the-highlands/arthur-hills">
                Arthur Hills scorecard
              </Link>
            </p>
            <p>
              A signature course that lives up to the legendary reputation of
              its namesake, the Arthur Hills course is widely recognized as one
              of the finest in Michigan - and a bucket list essential for avid
              golfers, both regionally and throughout the U.S. With its wide,
              bunker-dotted fairways, narrowing approaches and fascinating
              greens, this scenic course provides excellent playability for
              golfers of all abilities.
            </p>
          </div>
        </div>
        <div className="row py-4 d-flex flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <h3 className="h3">Donald Ross Memorial</h3>
            <p>
              <Link href="https://boynegolf.com/the-highlands/donald-ross-memorial">
                Donald Ross Memorial scorecard
              </Link>
              <br />
            </p>
            <p>
              Comprised of a selection of the greatest holes ever designed by
              one of the sport's greatest course designers, the Donald Ross
              Memorial is the golfing equivalent of a "greatest hits"
              compilation. The course represents a labor of love, started as an
              inspiration, led to years of travel, play and heated deliberation,
              and culminated into one of the country's most satisfying courses.
              A round of golf here looks, feels, and plays every bit like a true
              Donald Ross design.
            </p>
            <p>
              In 2020 the BOYNE Golf team, in conjunction with Michigan-based
              course designer Ray Hearn, began a series of renovations to the
              Donald Ross Memorial. With the technology available today we can
              now better replicate Ross’ original designs than when the Donald
              Ross Memorial was originally developed in 1989.
            </p>
          </div>
          <div className="col-md-6">
            <ImageOverlap className="images__overlap--tl">
              <StaticImage
                src="../../images/course-boyne/BH_Ross_9_1030x490_2.jpg"
                alt="hole 5"
                placeholder="blurred"
              />
            </ImageOverlap>
          </div>
        </div>
        <div className="row py-4 d-flex flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <ImageOverlap className="images__overlap--tl">
              <StaticImage
                src="../../images/course-boyne/BH_Moor_10_1030x490.jpg"
                alt="hole 5"
                placeholder="blurred"
              />
            </ImageOverlap>
          </div>
          <div className="col-md-6">
            <h3 className="h3">The Moor</h3>
            <p>
              <Link href="https://boynegolf.com/the-highlands/the-moor">
                The Moor scorecard
              </Link>
            </p>
            <p>
              Widely regarded as a members' favorite, The Moor represents a fair
              but true test of game. The difference lies in the doglegs.
              Designed with numerous twists and turns, the front nine of The
              Moor favors right-handed power fade hitters - with holes 1, 2, 7
              and 9 showing their curves immediately off the tee. Its reputation
              as a player's golf course is so widely known that The Moor has
              been designated as an AJGA Championship course. Featuring all-new
              tour bunker sand, The Moor is one of BOYNE's most versatile,
              perfect for 9 or 18 holes.
            </p>
          </div>
        </div>
        <div className="row py-4 d-flex flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <h3 className="h3">The Heather</h3>
            <p>
              <Link href="https://boynegolf.com/the-highlands/the-heather">
                The Heather scorecard
              </Link>{" "}
            </p>
            <p>
              The Heather was Named 2019 National Course of the Year and 2018
              Michigan Golf Course Of The Year.
            </p>
            <p>
              It's not hype. It's not pretense. It's a fact: The Heather has
              earned its reputation as one of the finest championship courses in
              the entire United States. Bearing all the markings of its
              legendary designer, this Robert Trent Jones, Sr. course has tested
              the finest names in the game since 1966, playing host to Michigan
              Amateurs, AJGA Championships, the Michigan State Pro-Am, and The
              Celebrity Tour.
            </p>
            <p>
              The Heather has been named the 2018 Golf Course of the Year by the
              Michigan Golf Course Association (MGCA).
            </p>
            <p>
              The Heather has also been awarded the 2019 National Golf Course of
              the Year by the National Golf Course Owners Association (NGCOA).
            </p>
          </div>
          <div className="col-md-6">
            <ImageOverlap className="images__overlap--tl">
              <StaticImage
                src="../../images/course-boyne/BH_Heather_18_1030x490_2.jpg"
                alt="hole 5"
                placeholder="blurred"
              />
            </ImageOverlap>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venue2023
