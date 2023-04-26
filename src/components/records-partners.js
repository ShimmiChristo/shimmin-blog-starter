/* eslint-disable react/prop-types */

import React from "react"
import { Link } from "gatsby"

function RecordPartners({ playerData }) {
  const getGameRecord = (playerData, record) => {
    const years = playerData.year
    const recordParam = record

    let recordObj = {}
    Object.keys(years).forEach(key => {
      const year = years[key]
      if (!year.records) return false
      const recordsArr = year.records
      recordsArr.map(elem => {
        if (elem[recordParam] !== null) {
          elem[recordParam].forEach(item => {
            const name = item.name
            if (recordObj[name]) {
              recordObj[name].wins += item.wins
              recordObj[name].ties += item.ties
              recordObj[name].losses += item.losses
            } else {
              //! add new contact
              recordObj[name] = { ...item }
            }
          })
        }
      })
    })
    return recordObj
  }

  var partnerRecords = getGameRecord(playerData, "partners")
  var partnerRecordsArr = Object.entries(partnerRecords)
  var sortedPartnerRecords = partnerRecordsArr.sort((a, b) =>
    a[0].localeCompare(b[0])
  )

  var opponentsRecords = getGameRecord(playerData, "opponents")
  console.log("opponentsRecords - ", opponentsRecords)
  var opponentRecordsArr = Object.entries(opponentsRecords)
  var sortedOpponentRecords = opponentRecordsArr.sort((a, b) =>
    a[0].localeCompare(b[0])
  )
  console.log("sortedOpponentRecords - ", sortedOpponentRecords)

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="row-cols-1 text-center mt-3">
          <h2 className="h3">
            <div>Partner Records</div>
          </h2>
        </div>
        <div className="row">
          <div className="card shadow-0 border border-gray offset-md-1 col-md-10 offset-1 col-10 my-2">
            <div className="d-flex bold justify-content-between align-items-start border-bottom py-2">
              <div className="text-center w-100">Partner</div>
              <div className="text-center w-100">W - T - L</div>
            </div>
            {sortedPartnerRecords.map(([key, value], i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-start border-bottom py-2"
              >
                <div className="text-center w-100 capitalize">
                  <Link to={`/players/${key}`}>{key}</Link>
                </div>
                <div className="text-center w-100">
                  {value.wins} - {value.ties} - {value.losses}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="row-cols-1 text-center mt-3">
          <h2 className="h3">
            <div>Opponent Records</div>
          </h2>
        </div>
        <div className="row">
          <div className="card shadow-0 border border-gray offset-md-1 col-md-10 offset-1 col-10 my-2">
            <div className="d-flex bold justify-content-between align-items-start border-bottom py-2">
              <div className="text-center w-100">Opponent</div>
              <div className="text-center w-100">W - T - L</div>
            </div>
            {sortedOpponentRecords.map(([key, value], i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-start border-bottom py-2"
              >
                <div className="text-center w-100 capitalize">
                  <Link to={`/players/${key}`}>{key}</Link>
                </div>
                <div className="text-center w-100">
                  {value.wins} - {value.ties} - {value.losses}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecordPartners
