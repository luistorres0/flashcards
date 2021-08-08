import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import DeckList from "./DeckList";
import StudyView from "../Study/StudyView";
import NotFound from "../NotFound";
import AddCardView from "../AddCard/AddCardView";
import DeckView from "../ViewDeck/DeckView";
import EditDeckView from "../EditDeck/EditDeckView";
import EditCardView from "../EditCard/EditCardView";
import AddDeckView from "../AddDeck/AddDeckView";

const HomeView = (props) => {
  const { decks, handleDeleteDeck } = props;

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Link className="btn btn-secondary mb-3" to="/decks/new">
            + Create Deck
          </Link>
          <DeckList decks={decks} handleDeleteDeck={handleDeleteDeck} />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCardView />
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <AddCardView />
        </Route>
        <Route path="/decks/:deckId/study">
          <StudyView />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeckView />
        </Route>
        <Route path="/decks/new">
          <AddDeckView />
        </Route>
        <Route path="/decks/:deckId">
          <DeckView handleDeleteDeck={handleDeleteDeck} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default HomeView;
