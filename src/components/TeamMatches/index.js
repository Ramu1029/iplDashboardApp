import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchesDetails: {},
    teamBgColor: '',
  }

  componentDidMount() {
    this.getTeamMatchesList()
  }

  static setBgColor(params) {
    const teamId = params.id
    let bgColorClass
    switch (teamId) {
      case 'KKR':
        bgColorClass = 'bg-kkr'
        break
      case 'SH':
        bgColorClass = 'bg-srh'
        break
      case 'RCB':
        bgColorClass = 'bg-rcb'
        break
      case 'CSK':
        bgColorClass = 'bg-csk'
        break
      case 'KXP':
        bgColorClass = 'bg-pbks'
        break
      case 'DC':
        bgColorClass = 'bg-dc'
        break
      case 'RR':
        bgColorClass = 'bg-rr'
        break
      case 'MI':
        bgColorClass = 'bg-mi'
        break
      default:
        bgColorClass = ''
        break
    }
    return bgColorClass
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match

    const response = await fetch(`https://apis.ccbp.in/ipl/${params.id}`)
    const data = await response.json()
    const {
      latest_match_details: latestMatchDetails,
      team_banner_url: teamBannerUrl,
      recent_matches: recentMatches,
    } = data
    console.log('Latest Matches List: ')
    console.log(latestMatchDetails)
    console.log('Recent Matches List: ')
    console.log(recentMatches[0])

    const changeToCamelCase = matchDetails => ({
      competingTeam: matchDetails.competing_team,
      competingTeamLogo: matchDetails.competing_team_logo,
      date: matchDetails.date,
      firstInnings: matchDetails.first_innings,
      id: matchDetails.id,
      manOfTheMatch: matchDetails.man_of_the_match,
      matchStatus: matchDetails.match_status,
      result: matchDetails.result,
      secondInnings: matchDetails.second_innings,
      umpires: matchDetails.umpires,
      venue: matchDetails.venue,
    })

    const filteredLatestMatchDetails = changeToCamelCase(latestMatchDetails)
    const filteredRecentMatches = recentMatches.map(eachMatch =>
      changeToCamelCase(eachMatch),
    )

    this.setState({
      isLoading: false,
      teamMatchesDetails: {
        teamBannerUrl,
        filteredLatestMatchDetails,
        filteredRecentMatches,
      },
      teamBgColor: TeamMatches.setBgColor(params),
    })
  }

  render() {
    const {isLoading, teamMatchesDetails, teamBgColor} = this.state
    const {teamBannerUrl, filteredLatestMatchDetails, filteredRecentMatches} =
      teamMatchesDetails

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-matches-container ${teamBgColor}`}>
            <img
              src={teamBannerUrl}
              className="team-banner"
              alt="team banner"
            />
            <LatestMatch latestMatchDetails={filteredLatestMatchDetails} />
            <ul className="recent-matches-list-container">
              {filteredRecentMatches.map(eachMatch => (
                <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
