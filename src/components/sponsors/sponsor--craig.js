import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useProfilePic } from "../hooks/use-profile-pic"
import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function SponsorCraig() {
  // const { author } = useSiteMetadata()
  // const { fluid } = useProfilePic()

  return (
    <section className="container col-lg-8 col-12 mb-4">
      {/* <div className="container col-5 my-3"> */}
      <div className="card border text-center bg-light">
        <div className="card-header">
          <h3 className="card-title h4 mb-0">
            Craig Wells - Residential Mortgage Loan Officer
          </h3>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="row mb-3">
              <div className="col-12 col-lg-9 mb-3">
                <p className="card-text text-start">
                  If you are looking into purchasing or refinancing a home, or
                  just have questions, please let me know and I’d love to help!
                  I’m located in Grand Rapids but can assist anyone within
                  Michigan. Shoot me a message, text, or call at anytime at
                  (517) 667-1154. Be sure to like and follow{" "}
                  <a href="https://www.facebook.com/CraigWellsMLO/">
                    Craig's facebook page
                  </a>
                  !
                </p>
              </div>
              <div className="col-6 col-lg-3 text-center">
                <StaticImage
                  src="../../../content/players/craig/craig-sponsor-profile.jpg"
                  width={150}
                  alt="Craig Wells"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <p className="text-start">
              Craig Wells: {`  `}
              <a href="mailto:cwells@michiganfirstmortgage.com">
                cwells@michiganfirstmortgage.com
              </a>
            </p>
          </div>
          {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          <div className="container">
            <div className="text-start">
              <StaticImage
                src="../../../content/players/craig/michigan-first.jpeg"
                width={500}
                alt="Michigan First"
              />
            </div>
          </div>
        </div>
        {/* <div className="card-footer text-muted">2 days ago</div> */}
      </div>
      {/* </div> */}
    </section>
  )
}

export default SponsorCraig
