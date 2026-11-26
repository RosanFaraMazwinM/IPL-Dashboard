import './index.css'

const LatestMatch = props => {
  const {details} = props

  return (
    <div className="details-card">
      <div>
        <p>{details.competingTeam}</p>
        <p>{details.date}</p>
        <p>{details.venue}</p>
        <p>{details.result}</p>
      </div>

      <img
        src={details.competingTeamLogo}
        alt={`latest match ${details.competingTeam}`}
      />

      <div>
        <p>First Innings</p>
        <p>{details.firstInnings}</p>

        <p>Second Innings</p>
        <p>{details.secondInnings}</p>

        <p>Man Of The Match</p>
        <p>{details.manOfTheMatch}</p>

        <p>Umpires</p>
        <p>{details.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
