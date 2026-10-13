import React from "react"
import PropTypes from "prop-types"

const Leaderboard = ({ title, rows }) => (
  <div className="mt-5 container col-12 col-md-6">
    <div className="h4 text-center">{title}</div>
    {rows.map((row, i) => (
      <div className="row border-bottom py-2" key={`${title}-${i}`}>
        <div className="col-6 text-center fontSize-0 capitalize">
          {row.name}
        </div>
        <div className="col-6 text-center fontSize-0">{row.value}</div>
      </div>
    ))}
  </div>
)

Leaderboard.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
}

export default Leaderboard
