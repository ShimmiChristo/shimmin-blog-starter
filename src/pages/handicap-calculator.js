import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePlayersPosts } from "../hooks/use-player-posts"
import { PlayerInfoUpdate } from "../hooks/get-player-info-UPDATE"
import { CourseInfo } from "../hooks/get-course-info"
import { v1 as uuidv1 } from "uuid"
import {
  getCourseHandicap,
  getPlayingHandicap,
} from "../helpers/handicapHelper"

/* 
* To Do
// * 1. get names. use list of players from usePlayerPosts
* 2. get tees. use course info from useCourseInfo
* 3. get handicap index. use player handicap from playersUpdate
* 4. add 18/9 hole option
* 5. add handicap allowance option
* 6. get course handicap
* 7. get playing handicap 
* 8. get shots off low index

*/

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #f5f5f5;
  min-height: 100vh;
`

const Calculator = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
`

const CourseInfoDiv = styled.div`
  h2 {
    color: #2c5aa0;
    font-size: 1.5rem;
    margin: 0;
  }
  button {
    color: #2c5aa0;
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
`

const HoleToggle = styled.div`
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #ddd;

  /* button {
    padding: 0.5rem 1rem;
    border: none;
    background: ${props =>
    props["data-active"] === "true" ? "#2c5aa0" : "white"};
    color: ${props => (props["data-active"] === "true" ? "white" : "#333")};
    cursor: pointer;

    &:first-child {
      border-right: 1px solid #ddd;
    }
  } */
`

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: ${props => (props["data-active"] ? "#2c5aa0" : "white")};
  color: ${props => (props["data-active"] ? "white" : "#333")};
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    background: ${props => (props["data-active"] ? "#2c5aa0" : "white")};
    color: ${props => (props["data-active"] ? "white" : "#333")};
  }

  &:first-child {
    border-right: 1px solid #ddd;
  }
`

const HandicapSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  label {
    color: #666;
    font-size: 0.9rem;
  }

  select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`

const GolfersSection = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
`

const GolfersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    color: #2c5aa0;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  button {
    color: #666;
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.9rem;
  }
`

const GolfersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;

  th {
    background: #f8f9fa;
    padding: 0.75rem;
    text-align: left;
    color: #666;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    border-bottom: 1px solid #e0e0e0;
  }

  td {
    padding: 0.75rem;
    border-bottom: 1px solid #f0f0f0;
  }

  tr:last-child td {
    border-bottom: none;
  }
`

const RemoveButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;

  span {
    font-size: 14px;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid #dc3545;
    border-radius: 50%;
    color: #dc3545;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;

    &:hover {
      background: #dc3545;
      color: white;
    }
  }
`

const TeeSelect = styled.select`
  padding: 0.3rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  width: 120px;
`

const AddButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #c82333;
  }
`

const InfoIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #666;
  color: white;
  font-size: 10px;
  margin-left: 0.5rem;
  cursor: help;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;

  h3 {
    color: #2c5aa0;
    margin: 0;
    font-size: 1.2rem;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 600;
    color: #333;
  }

  select {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #2c5aa0;
    }
  }
`

const ModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
`

const CancelButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  color: #666;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`

const ConfirmButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #c82333;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

const HandicapCalculator = ({ location }) => {
  const { title } = useSiteMetadata()
  const { course } = CourseInfo()
  const playersUpdateJson = PlayerInfoUpdate()
  const { nodes: players } = usePlayersPosts()
  const playerPosts = players
    .sort((a, b) => a.frontmatter.name.localeCompare(b.frontmatter.name))
    .map(player => ({
      id: player.id,
      name: player.frontmatter.name,
      handicap: playersUpdateJson[player.frontmatter.name]?.handicap || 0,
      // Add other fields as necessary
    }))

  const [holes, setHoles] = useState(9)
  const [handicapAllowance, setHandicapAllowance] = useState(100)
  const [golfers, setGolfers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showCourseModal, setShowCourseModal] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState("")
  const [tempSelectedCourse, setTempSelectedCourse] = useState("")
  const [selectedTee, setSelectedTee] = useState("")
  const [courseHandicap, setCourseHandicap] = useState(0)
  const [playingHandicap, setPlayingHandicap] = useState(0)

  // * get list of tee options from course info
  // * use this to populate the select dropdown for tees
  // * need to map course.tees to an array of strings for the select options
  const [courses, setCourses] = useState(
    Object.values(course).map(c => {
      return {
        courseName: c.name,
        tees: { ...c.totals.tees },
      }
    }) || []
  )
  const [selectedCourse, setSelectedCourse] = useState(
    courses[0]?.courseName || ""
  )

  const selectedCourseData = courses.find(c => c.courseName === selectedCourse)
  const teeNames = selectedCourseData
    ? Object.keys(selectedCourseData?.tees)
    : []
  const teeData = selectedCourseData
    ? Object.values(selectedCourseData?.tees)
    : []

  const teeOptions = teeData.map((data, index) => ({
    name: teeNames[index],
    ...data,
  }))

  const removeGolfer = id => {
    setGolfers(golfers.filter(golfer => golfer.id !== id))
  }

  const updateGolferTee = async (
    id,
    newTee,
    golferHandicapIndex,
    handicapAllowance
  ) => {
    setSelectedTee(newTee)
    const calculatedHandicap = handleCourseHandicap(golferHandicapIndex, newTee)
    const playingHandicap = handlePlayingHandicap(
      calculatedHandicap,
      handicapAllowance
    )
    setGolfers(
      golfers.map(golfer => {
        return golfer.id === id
          ? {
              ...golfer,
              tee: newTee,
              courseHandicap: calculatedHandicap.toFixed(0), // Calculate based on course data
              playingHandicap: playingHandicap, // Calculate based on handicap allowance
              shotsOff: 0, // Calculate based on lowest playing handicap
            }
          : golfer
      })
    )
  }

  const addGolfer = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
    setSelectedPlayer("")
    // setSelectedTee(teeOptions[0])
  }

  /* 
  playerHandicap
  courseSlope
  courseRating - 9 hole rating
  coursePar - 9 hole par
  */
  const handleCourseHandicap = (playerHC, teeValue) => {
    const teeToUse = teeValue || selectedTee
    const tee = teeToUse.split(".")[0]
    const inOut = teeToUse.split(".")[1]
    const teeObj = teeOptions.find(t => t.name === tee)
    const slope = teeObj?.[inOut].slope
    const rating = teeObj?.[inOut].index
    const par = teeObj?.[inOut].par
    const calculatedHandicap =
      getCourseHandicap(playerHC, slope, rating, par) / 2
    // setCourseHandicap(calculatedHandicap.toFixed(0))
    return calculatedHandicap
  }

  const handlePlayingHandicap = (courseHandicap, handicapAllowance) => {
    // Implement playing handicap calculation logic here
    const playingHandicap = getPlayingHandicap(
      courseHandicap,
      handicapAllowance
    )
    setPlayingHandicap(playingHandicap)
    return playingHandicap
  }

  const handleAddGolfer = e => {
    e.preventDefault()
    // console.log("handleAddGolfer")

    if (!selectedPlayer) return

    const player = playerPosts.find(p => p.name === selectedPlayer)
    if (!player) return

    // Check if golfer is already added
    const isAlreadyAdded = golfers.some(g => g.name === selectedPlayer)
    if (isAlreadyAdded) {
      // alert("This golfer is already added!")
      return
    }

    const courseHandicap = handleCourseHandicap(player.handicap)
    const playingHandicap = handlePlayingHandicap(
      courseHandicap,
      handicapAllowance
    )

    const newGolfer = {
      id: Date.now(), // Simple ID generation
      name: player.name,
      tee: selectedTee,
      handicapIndex: player.handicap,
      courseHandicap: courseHandicap.toFixed(0), // Calculate based on course data
      playingHandicap: playingHandicap, // Calculate based on handicap allowance
      shotsOff: 0, // Calculate based on lowest playing handicap
    }

    setGolfers([...golfers, newGolfer])
    handleModalClose()
  }

  const handleChangeCourse = e => {
    e.preventDefault()
    // console.log("handleChangeCourse")
    // Implement course change logic here
    if (!selectedCourse) return

    const selectedCourseData = courses.find(
      c => c.courseName === selectedCourse
    )
    if (!selectedCourseData) return

    // Get available tees for the selected course
    const availableTees = Object.keys(selectedCourseData.tees)

    // Reset all golfers' tees to the first available tee for the new course
    const updatedGolfers = golfers.map(golfer => ({
      ...golfer,
      tee: availableTees[0] || teeOptions[0],
      courseHandicap: 0, // Reset course handicap - will be recalculated
      playingHandicap: playingHandicap, // Reset playing handicap - will be recalculated
      shotsOff: 0, // Reset shots off - will be recalculated
    }))

    setGolfers(updatedGolfers)

    // TODO: Add course selection modal or dropdown to allow user to select from available courses
    // For now, this function updates golfers when course changes
  }

  const handleCourseModalClose = () => {
    setShowCourseModal(false)
    setTempSelectedCourse("")
  }

  const handleChangeCourseSubmit = e => {
    e.preventDefault()
    // console.log("handleCourseChange")

    if (!tempSelectedCourse) return

    const selectedCourseData = courses.find(
      c => c.courseName === tempSelectedCourse
    )
    if (!selectedCourseData) return

    // Get available tees for the selected course
    const availableTees = Object.keys(selectedCourseData.tees)

    // Reset all golfers' tees to the first available tee for the new course
    const updatedGolfers = golfers.map(golfer => ({
      ...golfer,
      tee: availableTees[0] || teeOptions[0],
      courseHandicap: 0, // Reset course handicap - will be recalculated
      playingHandicap: playingHandicap, // Reset playing handicap - will be recalculated
      shotsOff: 0, // Reset shots off - will be recalculated
    }))

    setGolfers(updatedGolfers)
    setSelectedCourse(tempSelectedCourse)
    handleCourseModalClose()
  }

  const openCourseModal = () => {
    setTempSelectedCourse(selectedCourse)
    setShowCourseModal(true)
  }

  const handleAllowanceChange = handicapAllowance => {
    // const calculatedHandicap = handleCourseHandicap(golferHandicapIndex, newTee)
    // const playingHandicap = handlePlayingHandicap(
    //   calculatedHandicap,
    //   handicapAllowance
    // )
    const updatedGolfers = golfers.map(golfer => ({
      ...golfer,
      playingHandicap: handlePlayingHandicap(
        golfer.courseHandicap,
        handicapAllowance
      ),
    }))
    setGolfers(updatedGolfers)
  }

  useEffect(() => {
    handleAllowanceChange(handicapAllowance)
  }, [handicapAllowance])

  return (
    <Layout location={location} title={title}>
      <SEO title="Handicap Calculator" />
      <Container>
        <Calculator>
          <LandingPageHeader title="Handicap Calculator" />

          <Header>
            <CourseInfoDiv>
              <h2>
                {selectedCourse?.toUpperCase() ||
                  "BOYNE RESORTS - HILLS COURSE"}
              </h2>
              <button onClick={openCourseModal}>Change</button>
            </CourseInfoDiv>

            <HoleToggle data-name="holes-toggle">
              <ToggleButton
                data-active={holes === 18}
                onClick={() => setHoles(18)}
              >
                18 Holes
              </ToggleButton>
              <ToggleButton
                data-active={holes === 9}
                onClick={() => setHoles(9)}
              >
                9 Holes
              </ToggleButton>
            </HoleToggle>
          </Header>

          <HandicapSettings>
            <label>
              HANDICAP ALLOWANCE
              <InfoIcon>i</InfoIcon>
            </label>
            <select
              data-name="handicap-allowance-select"
              value={handicapAllowance}
              onChange={e => setHandicapAllowance(e.target.value)}
            >
              <option value={100}>100%</option>
              <option value={95}>95%</option>
              <option value={90}>90%</option>
              <option value={85}>85%</option>
              <option value={80}>80%</option>
              <option value={75}>75%</option>
              <option value={70}>70%</option>
            </select>
          </HandicapSettings>

          <GolfersSection>
            <GolfersHeader>
              <h3>GOLFERS</h3>
              <button onClick={() => setGolfers([])}>Remove All Golfers</button>
            </GolfersHeader>

            <GolfersTable>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>TEES</th>
                  <th>
                    HANDICAP INDEX
                    <InfoIcon>i</InfoIcon>
                  </th>
                  <th>
                    COURSE HANDICAP
                    <InfoIcon>i</InfoIcon>
                  </th>
                  <th>
                    PLAYING HANDICAP
                    <InfoIcon>i</InfoIcon>
                  </th>
                  <th>
                    SHOTS OFF
                    <InfoIcon>i</InfoIcon>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {golfers.map(golfer => (
                  <tr key={golfer.id}>
                    <td>
                      <strong>{golfer.name}</strong>
                    </td>
                    <td>
                      <TeeSelect
                        value={golfer.tee}
                        data-name="tee-select-td"
                        onChange={e =>
                          updateGolferTee(
                            golfer.id,
                            e.target.value,
                            golfer.handicapIndex,
                            handicapAllowance
                          )
                        }
                      >
                        {teeOptions.map(tee => {
                          return Object.keys(tee).map(teeData => {
                            if (teeData === "in" || teeData === "out") {
                              let inOut = teeData === "out" ? "Front" : "Back"
                              const capitalizedTeeName =
                                tee.name.charAt(0).toUpperCase() +
                                tee.name.slice(1)
                              return (
                                <option
                                  key={uuidv1()}
                                  value={`${tee.name}.${teeData}`}
                                >
                                  {capitalizedTeeName} {inOut} --{" "}
                                  {tee[teeData].index}\{tee[teeData].slope}
                                </option>
                              )
                            }
                          })
                        })}
                      </TeeSelect>
                    </td>
                    <td>{golfer.handicapIndex}</td>
                    <td>{golfer.courseHandicap}</td>
                    <td>{golfer.playingHandicap}</td>
                    <td>{golfer.shotsOff}</td>
                    <td>
                      <RemoveButton onClick={() => removeGolfer(golfer.id)}>
                        <span>−</span>
                      </RemoveButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </GolfersTable>

            <AddButton onClick={addGolfer}>ADD GOLFERS</AddButton>
          </GolfersSection>

          {showModal && (
            <Modal onClick={handleModalClose}>
              <ModalContent onClick={e => e.stopPropagation()}>
                <ModalHeader>
                  <h3>Add Golfer</h3>
                  <CloseButton onClick={handleModalClose}>×</CloseButton>
                </ModalHeader>

                <ModalForm onSubmit={handleAddGolfer}>
                  <FormGroup>
                    <label htmlFor="player-select">Select Player</label>
                    <select
                      id="player-select"
                      value={selectedPlayer}
                      onChange={e => setSelectedPlayer(e.target.value)}
                      required
                    >
                      <option value="">Choose a player...</option>
                      {playerPosts.map(player => (
                        <option key={player.id} value={player.name}>
                          {player.name} (Handicap: {player.handicap})
                        </option>
                      ))}
                    </select>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="tee-select">Select Tee</label>
                    <select
                      id="tee-select"
                      value={selectedTee}
                      onChange={e => setSelectedTee(e.target.value)}
                    >
                      <option>Select Tee</option>
                      {teeOptions.map(tee => {
                        return Object.keys(tee).map(teeData => {
                          if (teeData === "in" || teeData === "out") {
                            let inOut = teeData === "out" ? "Front" : "Back"
                            const capitalizedTeeName =
                              tee.name.charAt(0).toUpperCase() +
                              tee.name.slice(1)
                            return (
                              <option
                                key={uuidv1()}
                                value={`${tee.name}.${teeData}`}
                              >
                                {capitalizedTeeName} {inOut} --{" "}
                                {tee[teeData].index}\{tee[teeData].slope}
                              </option>
                            )
                          }
                        })
                      })}
                    </select>
                  </FormGroup>

                  <ModalButtons>
                    <CancelButton type="button" onClick={handleModalClose}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="submit" disabled={!selectedPlayer}>
                      Add Golfer
                    </ConfirmButton>
                  </ModalButtons>
                </ModalForm>
              </ModalContent>
            </Modal>
          )}

          {showCourseModal && (
            <Modal onClick={handleCourseModalClose}>
              <ModalContent onClick={e => e.stopPropagation()}>
                <ModalHeader>
                  <h3>Select Course</h3>
                  <CloseButton onClick={handleCourseModalClose}>×</CloseButton>
                </ModalHeader>

                <ModalForm onSubmit={handleChangeCourseSubmit}>
                  <FormGroup>
                    <label htmlFor="course-select">Select Course</label>
                    <select
                      id="course-select"
                      value={tempSelectedCourse}
                      onChange={e => setTempSelectedCourse(e.target.value)}
                      required
                    >
                      <option value="">Choose a course...</option>
                      {courses.map(course => (
                        <option key={uuidv1()} value={course.courseName}>
                          {course.courseName}
                        </option>
                      ))}
                    </select>
                  </FormGroup>

                  <ModalButtons>
                    <CancelButton
                      type="button"
                      onClick={handleCourseModalClose}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="submit" disabled={!tempSelectedCourse}>
                      Change Course
                    </ConfirmButton>
                  </ModalButtons>
                </ModalForm>
              </ModalContent>
            </Modal>
          )}
        </Calculator>
      </Container>
    </Layout>
  )
}

export default HandicapCalculator
