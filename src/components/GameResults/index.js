import './index.css'

const GameResults = props => {
  const {playAgain, opponentOption, userOption, gameResult} = props

  const yourImage = userOption.imageUrl

  const opponentImage = opponentOption.imageUrl

  const onPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="game-results-con">
      <div className="game-results">
        <div className="your-image-con">
          <h1 className="head">You</h1>
          <img src={yourImage} alt="your choice" className="your-image" />
        </div>
        <div className="opponent-image-con">
          <h1 className="head">Opponent</h1>
          <img
            src={opponentImage}
            alt="opponent choice"
            className="opponent-image"
          />
        </div>
      </div>
      <p className="head">{gameResult}</p>
      <button className="play-again" onClick={onPlayAgain} type="button">
        Play Again
      </button>
    </div>
  )
}

export default GameResults
