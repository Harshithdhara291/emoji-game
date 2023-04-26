import {useState} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const EmojiGame  = (props) => {

  const [clickedEmojisList,setClickedEmojisList] = useState([])
  const [isGameInProgress,setGameInProgress] = useState(true)
  const [topScore,setTopScore] = useState(0)



  const resetGame = () => {
    setClickedEmojisList([])
    setGameInProgress(true)
  }

  const renderScoreCard = () => {
    const {emojisList} = props
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  const finishGameAndSetTopScore = currentScore => {
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    setTopScore(newTopScore)
    setGameInProgress(false)
  }

  const clickEmoji = id => {
    const {emojisList} = props
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        finishGameAndSetTopScore(emojisList.length)
      }
      setClickedEmojisList([...clickedEmojisList,id])
    }
  }

  const getShuffledEmojisList = () => {
    const {emojisList} = props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  const renderEmojisList = () => {
    const shuffledEmojisList = getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={clickEmoji}
          />
        ))}
      </ul>
    )
  }

  return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? renderEmojisList() : renderScoreCard()}
        </div>
      </div>
    )
}

export default EmojiGame
