import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const chartColors = ['#18ed66', '#e31a1a', '#f7db00']

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

    const recentMatches = data.recent_matches.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
    }))

    // Calculate match statistics
    const won = recentMatches.filter(
      each => each.matchStatus.toLowerCase() === 'won',
    ).length

    const lost = recentMatches.filter(
      each => each.matchStatus.toLowerCase() === 'lost',
    ).length

    const drawn = recentMatches.filter(each => {
      const status = each.matchStatus.toLowerCase()
      const result = each.result.toLowerCase()

      return (
        status === 'draw' ||
        status === 'drawn' ||
        status === 'tie' ||
        result.includes('draw') ||
        result.includes('tie') ||
        result.includes('no result')
      )
    }).length

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

      recentMatches,

      matchStatistics: [
        {name: 'Won', value: won},
        {name: 'Lost', value: lost},
        {name: 'Drawn', value: drawn},
      ],
    }

    this.setState({
      teamData: updatedData,
      isLoading: false,
    })
  }

  onClickBack = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    const {teamData, isLoading} = this.state
    const {match} = this.props
    const {id} = match.params

    if (isLoading) {
      return (
        <div className="loader-container" testid="loader">
          <Loader type="Oval" height={50} width={50} />
        </div>
      )
    }

    return (
      <div className={`bg-container ${id}`}>
        <button
          type="button"
          className="back-button"
          onClick={this.onClickBack}
        >
          Back
        </button>

        <img
          src={teamData.teamBannerUrl}
          alt="team banner"
          className="team-banner"
        />

        <h1 className="latest">Latest Matches</h1>

        <LatestMatch details={teamData.latestMatch} />

        <div className="statistics-container">
          <h1 className="statistics-heading">Match Statistics</h1>

          <div className="chart-container">
            <PieChart width={350} height={300}>
              <Pie
                data={teamData.matchStatistics}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {teamData.matchStatistics.map((each, index) => (
                  <Cell key={each.name} fill={chartColors[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        <h1 className="latest">Recent Matches</h1>

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
