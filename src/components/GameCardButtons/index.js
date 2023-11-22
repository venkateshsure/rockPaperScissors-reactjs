import './index.css'

const GameCardButtons = props => {
  const {each, onClickButton} = props
  const {id, imageUrl} = each
  const lowerCaseId = id.toLowerCase()

  const clickButton = () => {
    onClickButton(id)
  }

  return (
    <button
      className="button"
      data-testid={`${lowerCaseId}Button`}
      type="button"
      onClick={clickButton}
    >
      <img className="game-card-image" src={imageUrl} alt={id} />
    </button>
  )
}

export default GameCardButtons
