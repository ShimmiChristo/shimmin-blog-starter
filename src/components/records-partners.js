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
              recordObj[name].bestBall.wins += item.bestBall.wins
              recordObj[name].bestBall.ties += item.bestBall.ties
              recordObj[name].bestBall.losses += item.bestBall.losses
              recordObj[name].bramble.wins += item.bramble.wins
              recordObj[name].bramble.ties += item.bramble.ties
              recordObj[name].bramble.losses += item.bramble.losses
              recordObj[name].brambleAlternate.wins +=
                item.brambleAlternate.wins
              recordObj[name].brambleAlternate.ties +=
                item.brambleAlternate.ties
              recordObj[name].brambleAlternate.losses +=
                item.brambleAlternate.losses
              recordObj[name].scramble.wins += item.scramble.wins
              recordObj[name].scramble.ties += item.scramble.ties
              recordObj[name].scramble.losses += item.scramble.losses
              recordObj[name].twoBestBall.wins += item.twoBestBall.wins
              recordObj[name].twoBestBall.ties += item.twoBestBall.ties
              recordObj[name].twoBestBall.losses += item.twoBestBall.losses
              recordObj[name].twoBallBramble.wins += item.twoBallBramble.wins
              recordObj[name].twoBallBramble.ties += item.twoBallBramble.ties
              recordObj[name].twoBallBramble.losses +=
                item.twoBallBramble.losses
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
  var opponentsRecords = getGameRecord(playerData, "opponents")

  return (
    <div className="row">
      {Object.entries(partnerRecords).map(([key, value], i) => (
        <div
          key={i}
          className="d-flex justify-content-between align-items-start border-bottom py-2"
        >
          <div className="text-center w-100">{key}</div>
          <div className="text-center w-100">
            {value.bestBall.wins}-{value.bestBall.ties}-{value.bestBall.losses}
          </div>
          <div className="text-center w-100">
            {value.twoBestBall.wins}-{value.twoBestBall.ties}-
            {value.twoBestBall.losses}
          </div>
          <div className="text-center w-100">
            {value.bramble.wins}-{value.bramble.ties}-{value.bramble.losses}
          </div>
          <div className="text-center w-100">
            {value.twoBallBramble.wins}-{value.twoBallBramble.ties}-
            {value.twoBallBramble.losses}
          </div>
          <div className="text-center w-100">
            {value.alternate.wins}-{value.alternate.ties}-
            {value.alternate.losses}
          </div>
          <div className="text-center w-100">
            {value.brambleAlternate.wins}-{value.brambleAlternate.ties}-
            {value.brambleAlternate.losses}
          </div>
          <div className="text-center w-100">
            {value.scramble.wins}-{value.scramble.ties}-{value.scramble.losses}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecordPartners
