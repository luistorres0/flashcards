import React from "react";
import Deck from "./Deck";

const DeckList = (props) => {
  const { decks, handleDeleteDeck } = props;

  return (
    <ul className="list-group">
      {decks.map((deck) => (
        <Deck
          key={deck.id}
          id={deck.id}
          name={deck.name}
          description={deck.description}
          cards={deck.cards}
          handleDeleteDeck={handleDeleteDeck}
        />
      ))}
    </ul>
  );
};

export default DeckList;
