import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumb from "../Common/Breadcrumb";

import NotEnoughView from "./NotEnoughView";
import StudyCard from "./StudyCard";

const StudyView = (props) => {
  const [deck, setDeck] = useState(null);
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    const loadDeck = async () => {
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response.data);
    };

    loadDeck();

    return () => abortController.abort();
  }, [deckId]);

  if (deck) {
    return (
      <div>
        <Breadcrumb crumbs={["Home", deck.name, "Study"]} />
        <h2>Study: {deck.name}</h2>
        {deck.cards.length > 2 ? <StudyCard cards={deck.cards} /> : <NotEnoughView deck={deck} />}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }

  // } else if (deck && deck.cards.length <= 2) {
  //   return <NotEnoughView deck={deck} />;
};

export default StudyView;
