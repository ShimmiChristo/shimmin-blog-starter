import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useProfilePic } from "../hooks/use-profile-pic"
import { StaticImage } from "gatsby-plugin-image"
import HatVideo from "../assets/hat-video.mp4"
// import styled from "styled-components"

function SaleHats() {
  // const { author } = useSiteMetadata()
  // const { fluid } = useProfilePic()

  return (
    <section className="container">
      <div className="card border text-center bg-light">
        <div className="card-header">
          <h5 className="card-title">Offical BFBH Cup Hat</h5>
        </div>
        <div className="card-body mx-auto container">
          <div className="row my-2">
            {/* <div className="col-12 col-lg-10 mb-3">
                <p className="card-text text-start h2">
                  Creating Digital Dreams, One Website At A Time
                </p>
              </div> */}
            <StaticImage
              src="../../static/hat.jpeg"
              height={700}
              width={600}
              alt="bfbh cup hat"
            />
          </div>
          <div className="row my-2">
            <video width="400" height="auto" controls autoPlay>
              <source src={HatVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SaleHats
