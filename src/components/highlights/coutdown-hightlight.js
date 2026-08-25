import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

function HighlightCountdown({ startTime, location, courseUrl }) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)

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

  const Container = styled.div`
    min-height: 50px;
    position: relative;
    @media screen and (max-width: 767px) {
      font-size: 0.8rem;
    }
  `

  return (
    <>
      <Container data-name="countdown-container" className=" mb-3 text-center">
        <div className="top-0 start-0 ">
          <b>BFBH Cup starts in: </b>
          <br></br>
          <span className="countdown__days">
            <em>{days} Days</em>
          </span>
          ,{" "}
          <span className="countdown__hours">
            <em>{hours} Hours</em>
          </span>{" "}
          at{" "}
          <span>
            {courseUrl ? (
              <a href={courseUrl} target="_blank" rel="noreferrer">
                <em>{location}</em>
              </a>
            ) : (
              <em>{location}</em>
            )}
          </span>
        </div>
      </Container>
    </>
  )
}

HighlightCountdown.propTypes = {
  startTime: PropTypes.string,
  location: PropTypes.string,
  courseUrl: PropTypes.string,
}

export default HighlightCountdown
