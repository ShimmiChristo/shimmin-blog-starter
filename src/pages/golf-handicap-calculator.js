import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { usePublishedPosts } from "../hooks/use-published-posts"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
// import Match from "../components/match"
// import MatchScore from "../components/match-score"

const LandingPageBody = styled.div`
  max-width: var(--maxWidth-5xl);
  margin: 0 auto;
`

const calcCourseDiff = (playerScore, courseSlope, courseRating) => {
  /*
   *** FORMULA ****
   * score diff = (course slope / 113) * (adjusted gross score – Course Rating – PCC adjustment))
   * round to nearest whole number (based on USGA handicap)
   */
  const formula = (113 / courseSlope) * (playerScore - courseRating)
  return formula.toFixed(1)
}

const calcHandicapDiff = roundsArr => {
  if (roundsArr.length < 6) {
    // * return lowest 1
    let lowest = roundsArr.reduce(function (prev, curr) {
      return parseFloat(prev.coursehandicap) < parseFloat(curr.coursehandicap)
        ? prev
        : curr
    })
    return lowest.coursehandicap
  }
}

const GolfHandicapCalc = ({ data, location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Golf Handicap Calculator`
  const [showCalculatedHC, setShowCalculatedHC] = useState(true)
  const [calculatedHC, setCalculatedHC] = useState(0)

  const inputInitialValue = () => {
    const localVar = localStorage.getItem("inputScores") || JSON.stringify([])
    const parsedVar = JSON.parse(localVar)
    return parsedVar
  }

  const [inputValues, setInputValues] = useState(inputInitialValue)

  const saveArr = arr => {
    localStorage.setItem("inputScores", JSON.stringify(arr))
    calcHandicapDiff(arr)
    setCalculatedHC(calcHandicapDiff(arr))
  }

  // const handleInputChange = ({ value, name }) => {
  //   setInputValues({
  //     ...inputValues,
  //     [name]: value,
  //   })
  // }

  const handleInputChange = ({
    hole,
    courserating,
    courseslope,
    eighteenholes,
    nineholes,
    value,
    name,
  }) => {
    let obj = {
      hole: hole,
      courserating: courserating || null,
      courseslope: courseslope || null,
      eighteenholes: eighteenholes || null,
      nineholes: nineholes || null,
      value: value,
      name: name,
    }

    let valueCopy = [...inputValues]

    let holeFound = valueCopy.some(item => {
      if (item.hole === obj.hole) {
        return true
      }
    })

    if (holeFound) {
      for (let val of valueCopy) {
        // * check if already exists
        if (val.hole === obj.hole) {
          val.courserating = courserating ? courserating : val.courserating
          val.courseslope = courseslope ? courseslope : val.courseslope
          val.eighteenholes = eighteenholes ? eighteenholes : val.eighteenholes
          val.nineholes = nineholes ? nineholes : val.nineholes

          let playerScore = val.eighteenholes
            ? val.eighteenholes
            : val.nineholes
          val.coursehandicap = calcCourseDiff(
            playerScore,
            val.courseslope,
            val.courserating
          )
        }
      }
    } else {
      valueCopy.push(obj)
    }

    setInputValues(valueCopy)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Golf Handicap Calculator" />
      <LandingPageHeader title="Golf Handicap Calculator" />
      <LandingPageBody>
        <div>
          <button onClick={() => saveArr(inputValues)}>
            Calculate Handicap Index
          </button>
        </div>
        <div className={showCalculatedHC ? "" : "d-none"}>
          Your handicap index is: <span>{calculatedHC}</span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">Course Rating</div>
            <div className="col">Course Slope</div>
            <div className="col">18 Hole Score</div>
            <div className="col">9 Hole Score</div>
          </div>
          {[...Array(2)].map((round, i) => {
            let colNum = i + 1
            return (
              <div className="row" data-round={i + 1} key={i}>
                <div className="col">Round #{i + 1}</div>
                <div className="col">
                  <input
                    type="number"
                    name={"course-rating"}
                    // defaultValue={
                    //   round["course-rating"] ? round["course-rating"] : 0
                    // }
                    // defaultValue={inputValues[inputId] ?? ""}
                    id={"c" + colNum + "-r" + 1}
                    // value={inputValues["c" + colNum + "-r" + 1] ?? ""}
                    value={inputValues[i]?.courserating ?? ""}
                    data-courserating={``}
                    onChange={e =>
                      handleInputChange({
                        hole: colNum,
                        courserating: e.target.value,
                        // value: e.target.value,
                        // name: e.target.name,
                      })
                    }
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    name={"c" + colNum + "-r" + 2}
                    id={"c" + colNum + "-r" + 2}
                    value={inputValues[i]?.courseslope ?? ""}
                    onChange={e =>
                      handleInputChange({
                        hole: colNum,
                        courseslope: e.target.value,
                        // value: e.target.value,
                        // name: e.target.name,
                      })
                    }
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    name={"c" + colNum + "-r" + 3}
                    id={"c" + colNum + "-r" + 3}
                    value={inputValues[i]?.eighteenholes ?? ""}
                    onChange={e =>
                      handleInputChange({
                        hole: colNum,
                        eighteenholes: e.target.value,
                        // value: e.target.value,
                        // name: e.target.name,
                      })
                    }
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    name={"c" + colNum + "-r" + 4}
                    id={"c" + colNum + "-r" + 4}
                    value={inputValues[i]?.nineholes ?? ""}
                    onChange={e =>
                      handleInputChange({
                        hole: colNum,
                        nineholes: e.target.value,
                        // value: e.target.value,
                        // name: e.target.name,
                      })
                    }
                  />
                </div>
              </div>
            )
          })}
        </div>
      </LandingPageBody>
    </Layout>
  )
}

export default GolfHandicapCalc
