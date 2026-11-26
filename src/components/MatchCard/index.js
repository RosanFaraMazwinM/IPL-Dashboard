import './index.css'

const MatchCard = props => {
  const {details} = props

  return (
    <li className="match-card">
      <img
        src={details.competingTeamLogo}
        alt={`competing team ${details.competingTeam}`}
      />
      <p>{details.competingTeam}</p>
      <p>{details.result}</p>
      <p className={details.matchStatus === 'Won' ? 'win' : 'loss'}>
        {details.matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
