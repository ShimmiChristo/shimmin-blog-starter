import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useProfilePic } from "../hooks/use-profile-pic"
// import styled from "styled-components"

function SponsorHWS() {
  // const { author } = useSiteMetadata()
  // const { fluid } = useProfilePic()

  return (
    <section className="container col-lg-8 col-12 mb-4">
      <div className="card border text-center bg-light">
        <div className="card-header">
          <h3 className="card-title h4 mb-0">
            <a href="https://hobokenwebsolutions.com/">Hoboken Web Solutions</a>{" "}
            - Website Management & Development
          </h3>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="row mb-3">
              <div className="col-12 col-lg-10 mb-3">
                <p className="card-text text-start">
                  We'll take care of your website, so you can take care of
                  business.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <p className="text-start">
              Email today at {`  `}
              <a href="mailto:hello@hobokenwebsolutions.com">
                hello@hobokenwebsolutions.com
              </a>
            </p>
            <div className="text-start">
              <StaticImage
                src="../../../static/hws.png"
                alt="hoboken web solutions homepage"
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorHWS
