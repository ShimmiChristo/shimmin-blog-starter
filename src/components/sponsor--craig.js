import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useProfilePic } from "../hooks/use-profile-pic"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function SponsorCraig() {
  // const { author } = useSiteMetadata()
  // const { fluid } = useProfilePic()

  return (
    <section>
      <div className="container">
        <div class="card border text-center bg-light">
          <div class="card-header">
            <h5 class="card-title">
              Craig Wells - Residential Mortgage Loan Officer
            </h5>
          </div>
          <div class="card-body mx-auto">
            <div class="container">
              <div class="row mb-3">
                <div className="col-12 col-lg-10 mb-3">
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
                <div className="col-6 col-lg-2 text-center">
                  <StaticImage
                    src="../../content/players/craig/craig-sponsor-profile.jpg"
                    alt="Craig Wells"
                  />
                </div>
              </div>
            </div>
            <p className="justify-content-center">
              Craig Wells: {`  `}
              <a href="mailto:cwells@michiganfirstmortgage.com">
                cwells@michiganfirstmortgage.com
              </a>
            </p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
            <div className="container">
              <StaticImage
                src="../../content/players/craig/michigan-first.jpeg"
                alt="Michigan First"
              />
            </div>
          </div>
          {/* <div class="card-footer text-muted">2 days ago</div> */}
        </div>
      </div>
    </section>
  )
}

export default SponsorCraig
