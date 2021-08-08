import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "./Header";
import HomeView from "./Home/HomeView";
import { listDecks, deleteDeck } from "../utils/api/index";

function Layout() {
  const [decks, setDecks] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();

    const loadDecks = async () => {
      const response = await listDecks(abortController.signal);
      setDecks(response.data);
    };

    loadDecks();

    return () => {
      abortController.abort();
    };
  }, [location]);

  const handleDeleteDeck = async (deckId) => {
    const result = window.confirm("Delete this deck?\n\nYou will not be able to recover it.");
    if (result) {
      await deleteDeck(deckId, new AbortController().signal);
      const response = await listDecks(new AbortController().signal);
      setDecks(response.data);
      history.push("/");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <HomeView decks={decks} handleDeleteDeck={handleDeleteDeck} />
      </div>
    </>
  );
}

export default Layout;
