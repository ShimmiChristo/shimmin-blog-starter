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

function Venue2026() {
  return (
    <div className="my-3">
      <h2 className="h1 text-center mb-3">2026 Venues</h2>
      <div className="container mb-6">
        {/* Banner Image */}
        <div className="row py-3 mb-lg-5">
          <div className="col">
            <div className="card bg-dark text-white">
              <StaticImage
                src="../../images/course-bay-harbor/BHGC_Links_7_1440x600_3.jpg"
                alt="hole 1"
                placeholder="blurred"
                className="card-img"
                style={bannerImg}
              />
              <div className="card-img-overlay text-center d-flex flex-column justify-content-center">
                <h3 className="h2 card-title text-white ">2026</h3>
                <p className="h3 card-text text-white">Bay Harbor Golf Club</p>
                <p className="card-text">Bay Harbor, MI</p>
              </div>
            </div>
          </div>
        </div>
        {/* Course 1. Image left */}
        <div className="row py-4 d-flex flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <ImageOverlap className="images__overlap--tl">
              <StaticImage
                src="../../images/course-boyne/boyne_ctree_1030x721.jpg"
                alt="hole 17"
                placeholder="blurred"
              />
            </ImageOverlap>
          </div>
          <div className="col-md-6">
            <h3 className="h3">Crooked Tree Golf Club</h3>
            <p>
              <Link href="https://www.boynegolf.com/eleven-courses/crooked-tree-golf-club">
                Crooked Tree Golf Club
              </Link>
            </p>
            <p>
              The fairways of Crooked Tree's first nine holes are lined by
              old-growth trees, creating stunning sightlines from one hole to
              the next. The course is characterized by undulating greens that
              require careful, consistent putts for par.
            </p>
          </div>
        </div>

        {/* Course 2. Image right */}
        <div className="row py-4 d-flex flex-md-row flex-column">
          <div className="col-md-6">
            <h3 className="h3">Preserve/Links at Bay Harbor</h3>
            <p>
              <Link href="https://www.boynegolf.com/eleven-courses/preserve-links">
                The Preserve/Links Course
              </Link>
            </p>
            <p>From Forest to Shore</p>
            <p>
              Settled into the hardwoods that hug the shores of Lake Michigan,
              The Preserve is nothing short of a sanctuary. Designed by Arthur
              Hills, the course winds its way through a classic northern
              Michigan landscape filled with wildlife. The sounds of breaking
              waves are a constant companion, with the course finishing in
              dramatic fashion — a spectacular par-3 situated on the Lake
              Michigan shoreline.
            </p>
            <p>
              Taking its lead from the dramatic courses on Ireland's North
              Atlantic coastline, The Links is situated on the beautiful Lake
              Michigan shore, with miles of uninterrupted lakefront views.
              Accented by towering bluffs and windblown dunes, The Links 9
              demonstrates Arthur Hills design at its finest, merging the
              course's unique topography with the native environment to
              highlight golf as both a sport — and a lifestyle.
            </p>
          </div>
          <div className="col-md-6">
            <ImageOverlap className="images__overlap--tl">
              <StaticImage
                src="../../images/course-bay-harbor/BHGC_Links_3_1030x490.jpg"
                alt="hole 3"
                placeholder="blurred"
              />
            </ImageOverlap>
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
              <Link href="https://www.boynegolf.com/eleven-courses/arthur-hills">
                Arthur Hills
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

        <div className="row py-4 d-flex flex-md-row flex-column">
          <div className="col-md-6">
            <h3 className="h3">Donald Ross Memorial</h3>
            <p>
              <Link href="https://www.boynegolf.com/eleven-courses/donald-ross-memorial">
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
      </div>
    </div>
  )
}

export default Venue2026
