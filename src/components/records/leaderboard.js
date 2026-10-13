import React from "react"
import PropTypes from "prop-types"

const renderRows = rows =>
  rows.map((row, i) => (
    <div className="row border-bottom py-2" key={`${row.name}-${i}`}>
      <div className="col-6 text-center fontSize-0 capitalize">{row.name}</div>
      <div className="col-6 text-center fontSize-0">{row.value}</div>
    </div>
  ))

const Leaderboard = ({ title, rows, teams }) => (
  <div className={`mt-5 container col-12 ${teams ? "" : "col-md-6"}`}>
    <h2 className="h4 text-center">{title}</h2>
    {teams ? (
      <div className="row">
        {teams.map(({ id, label, colorClass, rows: teamRows }) => (
          <div className="col-12 col-md-6" key={id}>
            <h3 className={`h5 text-center text-white py-2 ${colorClass}`}>
              {label}
            </h3>
            {renderRows(teamRows)}
          </div>
        ))}
      </div>
    ) : (
      renderRows(rows)
    )}
  </div>
)

Leaderboard.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ),
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      colorClass: PropTypes.string.isRequired,
      rows: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          value: PropTypes.number,
        })
      ).isRequired,
    })
  ),
}

export default Leaderboard
