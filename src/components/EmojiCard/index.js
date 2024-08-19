// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {itemDetails, onShuffleEmojiList} = props
  const {id, emojiName, emojiUrl} = itemDetails
  const onClickEmoji = () => {
    onShuffleEmojiList(id)
  }
  return (
    <li className="item">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
