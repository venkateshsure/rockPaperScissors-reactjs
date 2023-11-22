import Popup from 'reactjs-popup'
import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'
import GameResults from '../GameResults'
import GameCardButtons from '../GameCardButtons'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameCard extends Component {
  state = {
    score: 0,
    gameButton: false,
    userOption: {},
    gameResult: '',
    opponentOption: {},
  }

  startGame = () => {
    const {userOption, opponentOption} = this.state

    if (userOption.id === opponentOption.id) {
      this.setState(pre => ({
        gameResult: 'IT IS DRAW',
        score: pre.score,
      }))
    } else if (
      (userOption.id === 'PAPER' && opponentOption.id === 'ROCK') ||
      (userOption.id === 'ROCK' && opponentOption.id === 'SCISSORS') ||
      (userOption.id === 'SCISSORS' && opponentOption.id === 'PAPER')
    ) {
      this.setState(pre => ({
        gameResult: 'YOU WON',
        score: pre.score + 1,
      }))
    } else if (
      (userOption.id === 'PAPER' && opponentOption.id === 'SCISSORS') ||
      (userOption.id === 'ROCK' && opponentOption.id === 'PAPER') ||
      (userOption.id === 'SCISSORS' && opponentOption.id === 'ROCK')
    ) {
      this.setState(pre => ({
        gameResult: 'YOU LOSE',
        score: pre.score - 1,
      }))
    }
  }

  onClickButton = value => {
    const userSelectedTag = choicesList.find(each => each.id === value)

    // const spreadList = [...choicesList]

    //  const newList = spreadList.sort(() => Math.random() - 0.5)

    const number = Math.floor(Math.random() * choicesList.length)

    this.setState(
      {
        opponentOption: choicesList[number],
        userOption: userSelectedTag,
        gameButton: true,
      },
      this.startGame,
    )
  }

  playAgain = () => {
    this.setState({gameButton: false})
  }

  render() {
    const {
      score,
      gameButton,
      gameResult,
      opponentOption,
      userOption,
    } = this.state
    return (
      <div className="con">
        <div className="score-card-con">
          <div className="rock-paper-sci">
            <h1>ROCK PAPER SCISSORS</h1>
          </div>
          <div className="score-card">
            <p className="score-para">score</p>
            <p className="score-card-para">{score}</p>
          </div>
        </div>
        <div className="ul-con">
          {gameButton ? (
            <GameResults
              gameResult={gameResult}
              opponentOption={opponentOption}
              userOption={userOption}
              playAgain={this.playAgain}
            />
          ) : (
            choicesList.map(each => (
              <GameCardButtons
                onClickButton={this.onClickButton}
                each={each}
                key={each.id}
              />
            ))
          )}
        </div>
        <Popup
          position="top center"
          trigger={
            <button className="rules-button" type="button">
              Rules
            </button>
          }
        >
          {close => (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="pop-up-image"
              />
              <button
                className="rules-button"
                aria-label="Rules"
                type="button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
            </>
          )}
        </Popup>
      </div>
    )
  }
}

export default GameCard
