// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, isGameEnd} = props
  return (
    <nav className="nav-bg">
      <div className="nav-content">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji-heading">Emoji Game</h1>
        </div>
        {isGameEnd ? null : (
          <div className="logo-container">
            <p className="score-para">Score: {score}</p>
            <p className="score-para">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
