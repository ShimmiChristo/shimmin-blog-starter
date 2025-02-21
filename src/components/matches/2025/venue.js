import React from "react"
import { Link } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchVenue2025() {
  return (
    <div className="mb-3">
      <h2>2025 Venue</h2>
      <div>
        <span>Round 1: </span>
        <Link href="https://www.boynegolf.com/eleven-courses/links-quarry">
          The Preserve/Links
        </Link>
      </div>
      <div>
        <span>Round 2: </span>
        <Link href="https://www.boynegolf.com/eleven-courses/the-moor">
          Crooked Tree Golf Club
        </Link>
      </div>
      <div>
        <span>Round 3: </span>
        <Link href="https://www.boynegolf.com/eleven-courses/the-heather">
          The Heather
        </Link>
      </div>
      <div>
        <span>Round 4: </span>
        <Link href="https://www.boynegolf.com/eleven-courses/arthur-hills">
          Arthur Hills
        </Link>
      </div>
    </div>
  )
}

export default MatchVenue2025
