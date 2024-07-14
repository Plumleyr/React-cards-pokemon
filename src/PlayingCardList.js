import { useAxios } from "./hooks";
import { playingCardFormat } from "./helpers";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards, clearCards] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/",
    "playingCards"
  );
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => setCards(null, playingCardFormat)}>
          Add a playing card!
        </button>
      </div>
      <div>
        <button onClick={() => clearCards()}>Refresh Cards</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
