import React from "react";
import { useParams } from "react-router-dom";
import { deleteCard, readDeck } from "../../utils/api";
import CardDetails from "./CardDetails";

const CardDetailsList = (props) => {
  const { cards, setDeck } = props;
  const { deckId } = useParams();

  const handleDeleteCard = async (id) => {
    const result = window.confirm(
      "Delete this card?\n\nYou will not be able to recover after deletion."
    );
    if (result) {
      await deleteCard(id);
      const response = await readDeck(deckId);
      setDeck(response.data);
    }
  };

  return (
    <div className="mt-4">
      <h2>Cards</h2>
      <ul className="list-group">
        {cards.map((card) => (
          <CardDetails key={card.id} card={card} handleDeleteCard={handleDeleteCard} />
        ))}
      </ul>
    </div>
  );
};

export default CardDetailsList;
