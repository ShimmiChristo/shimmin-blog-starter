import React, { useEffect, useState } from "react"
// import styled from "styled-components"

function HighlightCountdown({ startTime, location }) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [offset, setOffset] = useState(0)

  const getTimeUntilEvent = startTime => {
    const time = Date.parse(startTime) - Date.parse(new Date())
    if (time < 0) {
      setDays(0)
      setHours(0)
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    }
  }

  useEffect(() => {
    setInterval(() => getTimeUntilEvent(startTime), 1000)

    return () => getTimeUntilEvent(startTime)
  }, [startTime])

  // useEffect(() => {
  //   const onScroll = () => setOffset(window.pageYOffset)
  //   // clean up code
  //   window.removeEventListener("scroll", onScroll)
  //   window.addEventListener("scroll", onScroll, { passive: true })
  //   return () => window.removeEventListener("scroll", onScroll)
  // }, [])

  // console.log(offset)
  // if (offset > 30) {
  //   // window.querySelector('.countdown-container').height = 0;
  //   console.log(offset + ' is greater than 10');
  // }

  return (
    <>
      <div className="container py-3 pb-md-3 position-relative text-center">
        <div className="position-absolute top-0 start-0 ">
          <b>BFBH Cup is in: </b>
          <span className="countdown__days">
            <em>{days} Days</em>
          </span>
          ,{" "}
          <span className="countdown__hours">
            <em>{hours} Hours</em>
          </span>{" "}
          -{" "}
          <span>
            <em>{location}</em>
          </span>
        </div>
      </div>
    </>
  )
}

export default HighlightCountdown
