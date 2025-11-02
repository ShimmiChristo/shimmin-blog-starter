import React from "react"
import styled from "styled-components"
import { PlayerInfoUpdate } from "../hooks/get-player-info-UPDATE"
import { CourseInfo } from "../hooks/get-course-info"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const PlayerSection = styled.div`
  margin-bottom: 3rem;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const PlayerHeader = styled.h2`
  color: #2c5aa0;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  text-transform: capitalize;
  border-bottom: 2px solid #2c5aa0;
  padding-bottom: 0.5rem;
`

const HandicapSummary = styled.div`
  background: #e8f4f8;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const SummaryLabel = styled.span`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
`

const SummaryValue = styled.span`
  font-size: 1.25rem;
  color: #2c5aa0;
  font-weight: 700;
`

const YearSection = styled.div`
  margin-bottom: 2rem;
`

const YearTitle = styled.h3`
  color: #666;
  margin: 1rem 0 0.75rem 0;
  font-size: 1.2rem;
`

const RoundCard = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid #2c5aa0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const CourseName = styled.h4`
  color: #2c5aa0;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
`

const CourseDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const DetailLabel = styled.span`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
`

const DetailValue = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 600;
`

const ScoreInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
`

const NoRoundsMessage = styled.p`
  color: #666;
  font-style: italic;
  padding: 1rem;
  text-align: center;
`

const PlayerHandicapRounds = () => {
  const playersUpdateJson = PlayerInfoUpdate()
  const { course } = CourseInfo()

  // Get course key mapping (courseKey -> course data)
  const courseData = course ? Object.values(course)[0]?.course || {} : {}

  // Helper function to determine how many scores are used based on total rounds
  const getScoresUsedCount = (totalRounds) => {
    if (totalRounds >= 20) return 8
    if (totalRounds === 19) return 7
    if (totalRounds >= 17) return 6
    if (totalRounds >= 15) return 5
    if (totalRounds >= 12) return 4
    if (totalRounds >= 9) return 3
    if (totalRounds >= 7) return 2
    if (totalRounds >= 6) return 2
    if (totalRounds >= 5) return 1
    if (totalRounds >= 4) return 1
    if (totalRounds >= 3) return 1
    return 0
  }

  const getCourseInfo = (courseKey, tees, side) => {
    const courseInfo = courseData[courseKey]
    if (!courseInfo) return null

    const teeColor = tees || 'purple'
    const slopeSide = side === 'front' ? 'out' : side === 'back' ? 'in' : 'total'

    return {
      name: courseInfo.name,
      slope: courseInfo.totals?.tees?.[teeColor]?.[slopeSide]?.slope || 'N/A',
      rating: courseInfo.totals?.tees?.[teeColor]?.[slopeSide]?.index || 'N/A',
      par: courseInfo.totals?.tees?.[teeColor]?.[slopeSide]?.par || 'N/A',
    }
  }

  const players = Object.entries(playersUpdateJson)
    .filter(([key]) => !key.includes('example') && key !== 'sample')
    .sort(([, a], [, b]) => a.name.localeCompare(b.name))

  const playersWithRounds = players.map(([playerKey, player]) => {
    const years = Object.keys(player.year || {}).filter(y => y.startsWith('_'))
    
    // Calculate total rounds across all years
    let totalRounds = 0
    years.forEach(year => {
      const yearData = player.year[year]
      const rounds = Object.entries(yearData?.scores || {})
        .filter(([, score]) => score.useForHandicapIndex)
      totalRounds += rounds.length
    })

    return {
      playerKey,
      player,
      years,
      totalRounds,
      scoresUsed: getScoresUsedCount(totalRounds),
      hasRounds: totalRounds > 0
    }
  }).filter(p => p.hasRounds)

  return (
    <Container>
      {playersWithRounds.length > 0 ? (
        playersWithRounds.map(({ playerKey, player, years, totalRounds, scoresUsed }) => (
          <PlayerSection key={playerKey}>
            <PlayerHeader>{player.name}</PlayerHeader>
            
            <HandicapSummary>
              <SummaryItem>
                <SummaryLabel>Total Rounds</SummaryLabel>
                <SummaryValue>{totalRounds}</SummaryValue>
              </SummaryItem>
              <SummaryItem>
                <SummaryLabel>Best Scores Used</SummaryLabel>
                <SummaryValue>{scoresUsed}</SummaryValue>
              </SummaryItem>
            </HandicapSummary>

            {years.map(year => {
              const yearData = player.year[year]
              const yearLabel = year.replace('_', '')

              const rounds = Object.entries(yearData?.scores || {})
                .filter(([, score]) => score.useForHandicapIndex)

              if (rounds.length === 0) return null

              return (
                <YearSection key={year}>
                  <YearTitle>{yearLabel} Season</YearTitle>

                  {rounds.map(([courseKey, scoreData]) => {
                    const tees = scoreData.frontTees || scoreData.backTees
                    const use18Holes = scoreData.use18Holes
                    const useFront = scoreData.useFront
                    const useBack = scoreData.useBack

                    let courseInfo
                    let holesUsed = ''

                    if (use18Holes) {
                      courseInfo = getCourseInfo(courseKey, tees, 'total')
                      holesUsed = '18 Holes'
                    } else if (useFront && useBack) {
                      holesUsed = 'Front & Back 9s'
                      courseInfo = {
                        name: getCourseInfo(courseKey, tees, 'front')?.name || scoreData.course,
                        frontSlope: getCourseInfo(courseKey, tees, 'front')?.slope,
                        frontRating: getCourseInfo(courseKey, tees, 'front')?.rating,
                        frontPar: getCourseInfo(courseKey, tees, 'front')?.par,
                        backSlope: getCourseInfo(courseKey, tees, 'back')?.slope,
                        backRating: getCourseInfo(courseKey, tees, 'back')?.rating,
                        backPar: getCourseInfo(courseKey, tees, 'back')?.par,
                      }
                    } else if (useFront) {
                      courseInfo = getCourseInfo(courseKey, tees, 'front')
                      holesUsed = 'Front 9'
                    } else if (useBack) {
                      courseInfo = getCourseInfo(courseKey, tees, 'back')
                      holesUsed = 'Back 9'
                    }

                    if (!courseInfo) {
                      courseInfo = { name: scoreData.course, slope: 'N/A', rating: 'N/A', par: 'N/A' }
                    }

                    return (
                      <RoundCard key={courseKey}>
                        <CourseName>
                          {courseInfo.name || scoreData.course}
                        </CourseName>

                        <CourseDetails>
                          <DetailItem>
                            <DetailLabel>Holes Used</DetailLabel>
                            <DetailValue>{holesUsed}</DetailValue>
                          </DetailItem>

                          {useFront && useBack ? (
                            <>
                              <DetailItem>
                                <DetailLabel>Front Slope/Rating</DetailLabel>
                                <DetailValue>
                                  {courseInfo.frontSlope} / {courseInfo.frontRating}
                                </DetailValue>
                              </DetailItem>
                              <DetailItem>
                                <DetailLabel>Back Slope/Rating</DetailLabel>
                                <DetailValue>
                                  {courseInfo.backSlope} / {courseInfo.backRating}
                                </DetailValue>
                              </DetailItem>
                              <DetailItem>
                                <DetailLabel>Front Par</DetailLabel>
                                <DetailValue>{courseInfo.frontPar}</DetailValue>
                              </DetailItem>
                              <DetailItem>
                                <DetailLabel>Back Par</DetailLabel>
                                <DetailValue>{courseInfo.backPar}</DetailValue>
                              </DetailItem>
                            </>
                          ) : (
                            <>
                              <DetailItem>
                                <DetailLabel>Slope</DetailLabel>
                                <DetailValue>{courseInfo.slope}</DetailValue>
                              </DetailItem>
                              <DetailItem>
                                <DetailLabel>Rating</DetailLabel>
                                <DetailValue>{courseInfo.rating}</DetailValue>
                              </DetailItem>
                              <DetailItem>
                                <DetailLabel>Par</DetailLabel>
                                <DetailValue>{courseInfo.par}</DetailValue>
                              </DetailItem>
                            </>
                          )}

                          {tees && (
                            <DetailItem>
                              <DetailLabel>Tees</DetailLabel>
                              <DetailValue style={{ textTransform: 'capitalize' }}>
                                {tees}
                              </DetailValue>
                            </DetailItem>
                          )}
                        </CourseDetails>

                        <ScoreInfo>
                          {(use18Holes || useFront) && (
                            <DetailItem>
                              <DetailLabel>Front Score</DetailLabel>
                              <DetailValue>{scoreData.frontGross || 'N/A'}</DetailValue>
                            </DetailItem>
                          )}
                          {(use18Holes || useBack) && (
                            <DetailItem>
                              <DetailLabel>Back Score</DetailLabel>
                              <DetailValue>{scoreData.backGross || 'N/A'}</DetailValue>
                            </DetailItem>
                          )}
                          {use18Holes && (
                            <DetailItem>
                              <DetailLabel>Total Score</DetailLabel>
                              <DetailValue>
                                {(scoreData.frontGross || 0) + (scoreData.backGross || 0)}
                              </DetailValue>
                            </DetailItem>
                          )}
                        </ScoreInfo>
                      </RoundCard>
                    )
                  })}
                </YearSection>
              )
            })}
          </PlayerSection>
        ))
      ) : (
        <NoRoundsMessage>
          No handicap index rounds found for any players.
        </NoRoundsMessage>
      )}
    </Container>
  )
}

export default PlayerHandicapRounds
