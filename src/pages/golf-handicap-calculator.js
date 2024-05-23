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

// * https://www.usga.org/content/usga/home-page/handicapping/roh/Content/rules/5%201b%20Calculation%20of%20a%20Score%20Differential%209%20Hole.htm
const calcCourseDiff = (playerScore, courseSlope, courseRating) => {
  /*
   *** FORMULA ****
   * score diff = (course slope / 113) * (adjusted gross score – Course Rating – PCC adjustment))
   * round to nearest whole number (based on USGA handicap)
   */
  const formula = (113 / courseSlope) * (playerScore - courseRating)
  return formula.toFixed(1)
}

// * https://www.usga.org/handicapping/roh/Content/rules/5%202%20Calculation%20of%20a%20Handicap%20Index.htm
const calcHandicapDiff = roundsArr => {
  const roundsPlayed = roundsArr.length
  let arrCopy = [...roundsArr]
  let sortedArr = arrCopy.sort(function (a, b) {
    return parseFloat(a.coursehandicap) - parseFloat(b.coursehandicap)
  })
  let scoreOne = parseFloat(sortedArr[0]?.coursehandicap)
  let scoreTwo = parseFloat(sortedArr[1]?.coursehandicap)
  let scoreThree = parseFloat(sortedArr[2]?.coursehandicap)
  let scoreFour = parseFloat(sortedArr[3]?.coursehandicap)
  let scoreFive = parseFloat(sortedArr[4]?.coursehandicap)
  let scoreSix = parseFloat(sortedArr[5]?.coursehandicap)
  let scoreSeven = parseFloat(sortedArr[6]?.coursehandicap)
  let scoreEight = parseFloat(sortedArr[7]?.coursehandicap)
  switch (roundsPlayed) {
    case 3:
      // * return lowest 1 - 2.0
      return scoreOne - 2.0
    case 4:
      // * return lowest 1 - 2.0
      return scoreOne - 1.0
    case 5:
      // * return lowest 1 - 0
      return scoreOne
    case 6:
      return (scoreOne + scoreTwo) / 2 - 1.0
    case 7 || 8:
      return (scoreOne + scoreTwo) / 2
    case 9 || 10 || 11:
      return (scoreOne + scoreTwo + scoreThree) / 3
    case 12 || 13 || 14:
      return (scoreOne + scoreTwo + scoreThree + scoreFour) / 4
    case 15 || 16:
      return (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive) / 5
    case 17 || 18:
      return (
        (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive + scoreSix) /
        6
      )
    case 19:
      return (
        (scoreOne +
          scoreTwo +
          scoreThree +
          scoreFour +
          scoreFive +
          scoreSix +
          scoreSeven) /
        7
      )
    case 20:
      return (
        (scoreOne +
          scoreTwo +
          scoreThree +
          scoreFour +
          scoreFive +
          scoreSix +
          scoreSeven +
          scoreEight) /
        8
      )
    default:
      return 0
  }
}

const GolfHandicapCalc = ({ data, location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Golf Handicap Calculator`
  const [showCalculatedHC, setShowCalculatedHC] = useState(true)
  const [calculatedHC, setCalculatedHC] = useState(0)

  const inputInitialValue = () => {
    if (typeof window !== "undefined") {
      const localVar =
        window.localStorage.getItem("inputScores") || JSON.stringify([])
      const parsedVar = JSON.parse(localVar)
      return parsedVar
    }
  }

  const [inputValues, setInputValues] = useState(inputInitialValue)

  const saveArr = arr => {
    const inputValuesCopy = [...arr]
    if (typeof window !== "undefined") {
      const filteredArr = inputValuesCopy.filter(item => {
        return (
          item.courseslope !== "" &&
          item.courseslope !== null &&
          item.courserating !== "" &&
          item.courserating !== null
        )
      })
      setInputValues(filteredArr)
      window.localStorage.setItem("inputScores", JSON.stringify(filteredArr))
      let hcDiff = calcHandicapDiff(filteredArr).toFixed(1)
      setCalculatedHC(hcDiff)
    }
  }

  const handleInputChange = ({
    hole,
    courserating,
    courseslope,
    eighteenholes,
    nineholes,
    key,
    value,
    name,
  }) => {
    let obj = {
      hole: hole,
      courserating: courserating || null,
      courseslope: courseslope || null,
      eighteenholes: eighteenholes || null,
      nineholes: nineholes || null,
      key: key,
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
          val.courserating =
            courserating || courserating === ""
              ? courserating
              : val.courserating
          val.courseslope =
            courseslope || courseslope === "" ? courseslope : val.courseslope
          val.eighteenholes =
            eighteenholes || eighteenholes === ""
              ? eighteenholes
              : val.eighteenholes
          val.nineholes =
            nineholes || nineholes === "" ? nineholes : val.nineholes

          // let nineholematch = val.nineholes ? true : false
          let playerScore = val.nineholes ? val.nineholes : val.eighteenholes
          let courseRating = nineholes ? val.courserating / 2 : val.courserating
          // let playerScore = () => {
          // if (val.eighteenholes) {
          // return val.eighteenholes
          // } else {
          // nineholematch = true
          // return val.nineholes
          // }
          // }
          val.coursehandicap = calcCourseDiff(
            playerScore,
            val.courseslope,
            courseRating
          )
        }
      }
    } else {
      valueCopy.push(obj)
    }

    setInputValues(valueCopy)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localVar =
        window.localStorage.getItem("inputScores") || JSON.stringify([])
      const parsedVar = JSON.parse(localVar)
      let hcDiff = calcHandicapDiff(parsedVar).toFixed(1)
      setCalculatedHC(hcDiff)
    }
  }, [location])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Golf Handicap Calculator" />
      <LandingPageHeader title="Golf Handicap Calculator" />
      <LandingPageBody>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className={showCalculatedHC ? "h3" : "d-none h3"}>
            <span>
              {calculatedHC === 0 || calculatedHC === "0.0"
                ? `Need at least 3 rounds`
                : `Your handicap index is: ${calculatedHC}`}
            </span>
          </div>
          <button
            className="col-auto mt-3 mb-5"
            onClick={() => saveArr(inputValues)}
          >
            Calculate Handicap Index
          </button>
        </div>
        <div className="container golf-handicap-calculator">
          <div className="row">
            <div className="col-3">Course Rating</div>
            <div className="col-3">Course Slope</div>
            <div className="col-3">18 Hole Score</div>
            <div className="col-3">9 Hole Score</div>
          </div>
          {[...Array(20)].map((round, i) => {
            let colNum = i + 1
            return (
              <div className="row" data-round={i + 1} key={i}>
                <div className="col-12">Round #{i + 1}</div>
                <div className="col-3">
                  <input
                    type="number"
                    name={"course-rating"}
                    id={"c" + colNum + "-r" + 1}
                    value={
                      inputValues?.length ? inputValues[i]?.courserating : ""
                    }
                    data-courserating={``}
                    onChange={e =>
                      handleInputChange({
                        hole: colNum,
                        courserating: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-3">
                  <input
                    type="number"
                    name={"c" + colNum + "-r" + 2}
                    id={"c" + colNum + "-r" + 2}
                    value={
                      inputValues?.length ? inputValues[i]?.courseslope : ""
                    }
                    onChange={e =>
                      handleInputChange({
                        hole: colNum,
                        courseslope: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-3">
                  <input
                    type="number"
                    name={"c" + colNum + "-r" + 3}
                    id={"c" + colNum + "-r" + 3}
                    value={
                      inputValues?.length ? inputValues[i]?.eighteenholes : ""
                    }
                    onChange={e =>
                      handleInputChange({
                        hole: colNum,
                        eighteenholes: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-3">
                  <input
                    type="number"
                    name={"c" + colNum + "-r" + 4}
                    id={"c" + colNum + "-r" + 4}
                    value={inputValues?.length ? inputValues[i]?.nineholes : ""}
                    onChange={e =>
                      handleInputChange({
                        hole: colNum,
                        nineholes: e.target.value,
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
