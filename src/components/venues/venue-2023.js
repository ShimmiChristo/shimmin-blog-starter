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
        <div className="row mb-3 mb-lg-5">
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

        {/* <div className="row py-4 d-flex flex-md-row flex-column-reverse">
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
                Arthur Hills
              </Link>
            </p>
          </div>
        </div>
        <div className="row py-4 d-flex flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <h3 className="h3">Donald Ross Memorial</h3>
            <p>
              <Link href="https://boynegolf.com/the-highlands/donald-ross-memorial">
                Donald Ross Memorial
              </Link>
            </p>
          </div>
          <div className="col-md-6">
            <ImageOverlap className="images__overlap--tl">
              <StaticImage
                src="../../images/course-boyne/BH_Hills_5_1030x490.jpg"
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
                src="../../images/course-boyne/BH_Hills_5_1030x490.jpg"
                alt="hole 5"
                placeholder="blurred"
              />
            </ImageOverlap>
          </div>
          <div className="col-md-6">
            <h3 className="h3">The Moor</h3>
            <p>
              <Link href="https://boynegolf.com/the-highlands/the-moor">
                The Moor
              </Link>
            </p>
          </div>
        </div>
        <div className="row py-4 d-flex flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <h3 className="h3">The Heather</h3>
            <p>
              <Link href="https://boynegolf.com/the-highlands/the-heather">
                The Heather
              </Link>{" "}
              was Named 2019 National Course of the Year and 2018 Michigan Golf
              Course Of The Year
            </p>
          </div>
          <div className="col-md-6">
            <ImageOverlap className="images__overlap--tl">
              <StaticImage
                src="../../images/course-boyne/BH_Hills_5_1030x490.jpg"
                alt="hole 5"
                placeholder="blurred"
              />
            </ImageOverlap>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Venue2023
