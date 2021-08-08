import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumb from "../Common/Breadcrumb";
import CardDetailsList from "./CardDetailsList";
import DeckDescription from "./DeckDescription";

const DeckView = (props) => {
  const { handleDeleteDeck } = props;
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);

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
      <div className="mb-5">
        <Breadcrumb crumbs={["Home", deck.name]} />
        <DeckDescription
          name={deck.name}
          description={deck.description}
          handleDeleteDeck={handleDeleteDeck}
        />
        <CardDetailsList cards={deck.cards} setDeck={setDeck}/>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default DeckView;
