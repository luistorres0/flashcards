import React from "react";
import { Link, useParams } from "react-router-dom";

const NotEnoughView = (props) => {
  const { deck } = props;
  const { deckId } = useParams();

  return (
    <div>
      <h3>Not enough cards.</h3>
      <p>You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
      <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
        + Add Cards
      </Link>
    </div>
  );
};

export default NotEnoughView;
