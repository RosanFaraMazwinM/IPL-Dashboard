import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div className="card-item">
          <img src={teamImageUrl} className="team-logo" alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
