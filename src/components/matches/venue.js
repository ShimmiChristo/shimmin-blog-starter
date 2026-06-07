import React from "react"
import PropTypes from "prop-types"

function MatchVenue({ year, title, venues }) {
  if (!venues?.length) {
    return null
  }

  return (
    <div className="mb-3">
      <h2>{title || `${year} Venue`}</h2>
      {venues.map((venue, index) => (
        <div key={`${year}-${venue.name}-${index}`}>
          {venue.round ? <span>{venue.round}: </span> : null}
          <a href={venue.url} target="_blank" rel="noreferrer">
            {venue.name}
          </a>
        </div>
      ))}
    </div>
  )
}

MatchVenue.propTypes = {
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  venues: PropTypes.arrayOf(
    PropTypes.shape({
      round: PropTypes.string,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default MatchVenue
