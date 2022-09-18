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
const bannerImg = {
  opacity: 0.8,
  minHeight: `200px`,
}

function Venue2022() {
  return (
    <div className="my-3">
      <h2 className="h1 text-center mb-3">2022 Venues</h2>
      <div className="container mb-6">
        <div className="row mb-3 mb-lg-5">
          <div className="col">
            <div class="card bg-dark text-white">
              <StaticImage
                src="../../images/course-stoatin-brae/SB002-banner.jpg"
                alt="hole 1"
                placeholder="blurred"
                // layout="fixed"
                // layout="fullWidth"
                className="card-img"
                style={bannerImg}
              />
              <div class="card-img-overlay text-center d-flex flex-column justify-content-center">
                <h3 class="h2 card-title text-white ">2022</h3>
                <p class="h3 card-text text-white">
                  Gull Lake View Golf Resort
                </p>
                <p class="card-text">Augusta, MI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <div className="images__overlap">
              <ImageOverlapTL className="images__overlap--tl">
                <StaticImage
                  src="../../images/course-stoatin-brae/SB001.jpg"
                  alt="hole 1"
                  placeholder="blurred"
                  // layout="fullWidth"
                />
              </ImageOverlapTL>
              <ImageOverlapBR className="images__overlap--br">
                <StaticImage
                  src="../../images/course-stoatin-brae/SB013.jpg"
                  alt="hole 15"
                  // layout="fullWidth"
                  placeholder="blurred"
                />
              </ImageOverlapBR>
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="h3">Stoatin Brae</h3>
            <p>
              <Link href="https://www.gulllakeview.com/golf/stoatin-brae/">
                Stoatin Brae
              </Link>{" "}
              is the most recent addition to Gull Lake View’s championship golf
              offerings.
            </p>
            <p>2020 Michigan Golf Course of the Year - MGCA</p>
            <p>"Top 200 Resort Courses in the U.S. for 2022" - Golfweek</p>

            <br />

            <h3 className="h3">Stonehedge South</h3>
            <p>
              <Link href="https://www.gulllakeview.com/golf/golf-courses/stonehedge-south/">
                Stonehedge South
              </Link>{" "}
              has been included in Golf Digest’s list of the top 75 most
              affordable courses in the United States.
            </p>
            <br />

            <h3 className="h3">Gull Lake East</h3>
            <p>
              <Link href="https://www.gulllakeview.com/golf/golf-courses/gull-lake-view-east/">
                Gull Lake East,
              </Link>{" "}
              a beautiful 18-hole course that masterfully highlights our
              region’s topography was recognized by Golf Advisor as one of the
              top 25 courses in Michigan in 2016.
            </p>
            <br />

            <h3 className="h3">Gull Lake West</h3>
            <p>
              While this longtime favorite,{" "}
              <Link href="https://www.gulllakeview.com/golf/golf-courses/gull-lake-view-West/">
                {" "}
                Gull Lake West
              </Link>
              , offers a comfortable level of challenge for experienced golfers,
              it’s mix of woods, fields, and ponds makes it a great place for
              anyone.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venue2022
