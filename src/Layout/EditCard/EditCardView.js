import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumb from "../Common/Breadcrumb";
import CreateEditCardForm from "../Common/CreateEditCardForm";

const EditCardView = (props) => {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const loadDeck = async () => {
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response.data);
    };

    loadDeck();

    return () => abortController.abort();
  }, [deckId, cardId]);

  if (deck) {
    const card = deck.cards.find((card) => `${card.id}` === cardId);

    return (
      <div>
        <Breadcrumb crumbs={["Home", `Deck ${deck.name}`, `Edit Card ${cardId}`]} />
        <h2>Edit Card</h2>
        <CreateEditCardForm front={card.front} back={card.back} isEditing={true} />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default EditCardView;
