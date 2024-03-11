import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

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

  return (
    <>
      <div className="container py-3 pb-md-3 position-relative text-center">
        <div className="position-absolute top-0 start-0 ">
          <b>BFBH Cup starts in: </b>
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
              <Link to={courseUrl}>
                <em>{location}</em>
              </Link>
            ) : (
              <em>{location}</em>
            )}
          </span>
        </div>
      </div>
    </>
  )
}

HighlightCountdown.propTypes = {
  startTime: PropTypes.string,
  location: PropTypes.string,
  courseUrl: PropTypes.string,
}

export default HighlightCountdown
