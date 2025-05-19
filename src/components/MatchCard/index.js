// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {competingTeamLogo, matchStatus, result, competingTeam} =
    recentMatchDetails

  const matchStatusClass = matchStatus === 'Won' ? 'statusWon' : 'statusLost'
  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        className="opponent-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <div>
        <p className="first-innings">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`match-status ${matchStatusClass}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
