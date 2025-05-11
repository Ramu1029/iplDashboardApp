import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-sub-heading">Latest Matches</h1>
      <div className="match-details-card">
        <div
          className="match-details-section"
          id="mediumDevice_matchDetailsSection"
        >
          <p className="first-innings-heading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          id="mediumDevice_opponentTeamLogo"
          className="opponent-team-img"
          alt={`latest match ${competingTeam}`}
        />
        <div className="responsive-match-details-container">
          <div className="responsive-section">
            <div className="match-details-section">
              <p className="first-innings-heading">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="match-result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="opponent-team-img"
              alt={`latest match ${competingTeam}`}
            />
          </div>

          <hr className="separator" />
        </div>
        <div className="match-result-section">
          <p className="match-result-section-label">First Innings</p>
          <p className="label-answer">{firstInnings}</p>

          <p className="match-result-section-label">Second Innings</p>
          <p className="label-answer">{secondInnings}</p>

          <p className="match-result-section-label">Man Of The Match</p>
          <p className="label-answer">{manOfTheMatch}</p>

          <p className="match-result-section-label">Umpires</p>
          <p className="label-answer">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
