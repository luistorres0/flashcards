import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumb from "../Common/Breadcrumb";
import EditDeckForm from "./EditDeckForm";

const EditDeckView = (props) => {
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
        <Breadcrumb crumbs={["Home", deck.name, "Edit Deck"]} />
        <h2>Edit Deck</h2>
        <EditDeckForm name={deck.name} description={deck.description} />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default EditDeckView;
