/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], isGameEnd: false, score: 0, topScore: 0}

  onShuffleEmojiList = id => {
    const {clickedEmojisList, score, topScore} = this.state
    const {emojisList} = this.props
    const clickedEmojisListLength = clickedEmojisList.length
    if (clickedEmojisList.includes(id)) {
      if (score > topScore) {
        this.setState({
          topScore: score,
          isGameEnd: true,
        })
      } else {
        this.setState({
          isGameEnd: true,
        })
      }
    } else {
      if (clickedEmojisListLength === emojisList.length - 1) {
        this.setState({
          isGameEnd: true,
          topScore: 12,
        })
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
        score: previousState.score + 1,
      }))
    }
  }

  onClickPlayAgainGame = () => {
    this.setState({
      isGameEnd: false,
      score: 0,
      clickedEmojisList: [],
    })
  }

  render() {
    const {score, isGameEnd, topScore} = this.state
    const {emojisList} = this.props
    emojisList.sort(() => Math.random() - 0.5)
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isGameEnd={isGameEnd} />
        <div className="emoji-game-container">
          {isGameEnd ? (
            <WinOrLoseCard
              score={score}
              onClickPlayAgainGame={this.onClickPlayAgainGame}
            />
          ) : (
            <ul className="emoji-list">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  itemDetails={each}
                  onShuffleEmojiList={this.onShuffleEmojiList}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
