import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {id} = match.params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        result: data.latest_match_details.result,
        matchStatus: data.latest_match_details.match_status,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        umpires: data.latest_match_details.umpires,
      },
      recentMatches: data.recent_matches.map(each => ({
        id: each.id,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        result: each.result,
        matchStatus: each.match_status,
      })),
    }

    this.setState({
      teamData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamData, isLoading} = this.state
    const {match} = this.props
    const {id} = match.params

    if (isLoading) {
      return (
        <div testid="loader">
          <Loader type="Oval" height={50} width={50} />
        </div>
      )
    }

    return (
      <div className={`bg-container ${id}`}>
        <img
          src={teamData.teamBannerUrl}
          alt="team banner"
          className="team-banner"
        />

        <h1>Latest Matches</h1>

        <LatestMatch details={teamData.latestMatch} />

        <ul className="matches-grid">
          {teamData.recentMatches.map(each => (
            <MatchCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
