/* eslint-disable react/prop-types */

import React from "react"

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
  // var opponentsRecords = getGameRecord(playerData, "opponents")

  return (
    <div className="row">
      {Object.entries(partnerRecords).map(([key, value], i) => (
        <div
          key={i}
          className="d-flex justify-content-between align-items-start border-bottom py-2"
        >
          <div className="text-center w-100">{key}</div>
          <div className="text-center w-100">
            {value.wins}-{value.ties}-{value.losses}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecordPartners
