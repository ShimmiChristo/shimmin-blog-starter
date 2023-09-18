import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useProfilePic } from "../hooks/use-profile-pic"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function SponsorHWS() {
  // const { author } = useSiteMetadata()
  // const { fluid } = useProfilePic()

  return (
    <section className="container col-lg-6 col-12">
      <div className="card border text-center bg-light">
        <div className="card-header">
          <h5 className="card-title">
            <a href="https://hobokenwebsolutions.com/">Hoboken Web Solutions</a>{" "}
            - Website Creation & Maintenance
          </h5>
        </div>
        <div className="card-body mx-auto">
          <div className="container">
            <div className="row mb-3">
              <div className="col-12 col-lg-10 mb-3">
                <p className="card-text text-start h2">
                  Creating Digital Dreams, One Website At A Time
                </p>
              </div>
            </div>
          </div>
          <p className="justify-content-center">
            Email today at {`  `}
            <a href="mailto:hello@hobokenwebsolutions.com">
              hello@hobokenwebsolutions.com
            </a>
          </p>
          <div className="container">
            <StaticImage
              src="../../static/hws.png"
              alt="hoboken web solutions homepage"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorHWS
