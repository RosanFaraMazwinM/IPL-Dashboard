import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      teamsData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamsData, isLoading} = this.state

    if (isLoading) {
      return (
        <div testid="loader">
          <Loader type="Oval" height={50} width={50} />
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1>IPL Dashboard</h1>
        </div>

        <ul className="card-container">
          {teamsData.map(each => (
            <TeamCard key={each.id} teamDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
