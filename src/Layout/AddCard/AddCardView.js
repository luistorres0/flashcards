import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumb from "../Common/Breadcrumb";
import CreateEditCardForm from "../Common/CreateEditCardForm";

const AddCardView = (props) => {
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
      <div>
        <Breadcrumb crumbs={["Home", deck.name, "Add Card"]} />
        <h2>{deck.name}: Add Card</h2>
        <CreateEditCardForm />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default AddCardView;
