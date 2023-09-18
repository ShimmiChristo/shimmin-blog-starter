import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { usePublishedPosts } from "../hooks/use-published-posts"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import SponsorCraig from "../components/sponsor--craig"
import SaleHats from "../components/sale--hats"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  // const { nodes } = usePublishedPosts()
  const siteTitle = title || `Title`
  // const posts = nodes
  // const LandingPageBody = styled.div`
  //   max-width: var(--maxWidth-5xl);
  //   margin: 0 auto;
  // `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Shop" />
      <LandingPageHeader title="Shop" />
      <div className="container mb-5">
        <div className="row">
          <div className="col-6 col-md-12">
            <h2 className="h1">HATS for sale!</h2>
            <h3 className="mb-5">Only a small quantity available</h3>
            <p className="bold">$25 per hat. Shipping is included.</p>
            <p>
              Get the official BFBH Cup hat today! We are selling less than 30
              hats in support of the BFBH Cup. These are adjustable, black
              trucker style hats. Video on the right shows the inside and out.
            </p>
            <p>
              Message us on our Instagram page{" "}
              <a href="https://www.instagram.com/bfbhcup/">@bfbhcup</a> or email
              us at <a href="mailto:bfbhcup@gmail.com">bfbhcup@gmail.com</a> if
              interested.
            </p>
            <p>
              The 2023 BFBH Cup begins September 22nd! Follows us for live
              updates.
            </p>
          </div>
          <div className="col-6 col-md-12">
            <SaleHats />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TopicPage
