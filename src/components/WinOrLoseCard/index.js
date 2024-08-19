// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgainGame} = props
  const onClickPlayAgain = () => {
    onClickPlayAgainGame()
  }
  if (score === 11) {
    return (
      <div className="result-card">
        <div className="text-card">
          <h1 className="result-heading">You Won</h1>
          <p className="result-para">
            Best Score
            <br />
            <span className="span-text">12/12</span>
          </p>
          <button
            type="button"
            className="play-again-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="result-image"
        />
      </div>
    )
  }
  return (
    <div className="result-card">
      <div className="text-card">
        <h1 className="result-heading">You Lose</h1>
        <p className="result-para">
          Best Score
          <br />
          <span className="span-text">12/{score}</span>
        </p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="result-image"
      />
    </div>
  )
}
export default WinOrLoseCard
