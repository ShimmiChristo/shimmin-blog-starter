import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useProfilePic } from "../hooks/use-profile-pic"
// import styled from "styled-components"

import { FaLinkedin } from "react-icons/fa"

function SponsorCurtis() {
  // const { author } = useSiteMetadata()
  // const { fluid } = useProfilePic()

  return (
    <section className="container col-lg-8 col-12 mb-4">
      {/* <div className="container col-5 my-3"> */}
      <div className="card border text-center bg-light">
        <div className="card-header">
          <h3 className="card-title h4 mb-0">
            Curtis Wells - CFP
            <span className="registered">&reg;</span>
          </h3>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="row mb-3">
              <div className="col-12 col-lg-9 mb-3">
                <p className="card-text text-start">
                  Curtis Wells is a dedicated Certified Financial Planner
                  <span className="trade">&trade;</span> based in Grand Rapids,
                  Michigan, serving clients nationwide. He brings expertise
                  across estate, tax, retirement, investment, insurance, and
                  holistic financial planning—a background that equips him to
                  help demystify retirement decisions and guide clients through
                  every stage of their journey.
                </p>
              </div>
              <div className="col-6 col-lg-3 text-center">
                <StaticImage
                  src="../../../content/players/curtis/curtis-aspire.webp"
                  width={150}
                  alt="Craig Wells"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <p className="text-start">
              Curtis Wells: {`  `}
              {/* <a href="mailto:cwells@michiganfirstmortgage.com">
                cwells@michiganfirstmortgage.com
              </a> */}
              <div className="">
                <a href="https://www.linkedin.com/in/curtis-wells-cfp%C2%AE-a57707112">
                  <FaLinkedin
                    aria-hidden="true"
                    className="fa-lg"
                    size={"2em"}
                  ></FaLinkedin>
                </a>
              </div>
              <div className="p">
                <span>(616) 512-0214</span>
              </div>
              <div className="p">
                <span>curtis@aspirewealthadvisory.com</span>
              </div>
            </p>
          </div>

          <div className="container">
            <div className="text-start">
              <StaticImage
                src="../../../content/assets/aspire-wealth.png"
                width={300}
                alt="Aspire Wealth Advisory"
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

export default SponsorCurtis
