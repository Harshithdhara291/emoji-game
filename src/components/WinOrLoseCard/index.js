import './index.css'

const LOSE_IMAGE = 'https://res.cloudinary.com/di4qjlwyr/image/upload/v1682491937/483-4831080_very-sad-to-hart-emojis-icon-for-face-removebg-preview_e7bub2.png'
const WON_IMAGE = 'https://res.cloudinary.com/di4qjlwyr/image/upload/v1682491589/istockphoto-544662460-612x612-removebg-preview_dhqxkw.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const approClassName = isWon ? 'won-image' : 'lose-image'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className={approClassName} src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
