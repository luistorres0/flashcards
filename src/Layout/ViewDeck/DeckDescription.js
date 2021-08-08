import React from "react";
import { Link, useParams } from "react-router-dom";

const DeckDescription = (props) => {
  const { name, description, handleDeleteDeck } = props;
  const { deckId } = useParams();

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>

      <div className="d-flex justify-content-between">
        <div>
          <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary mr-2">
            Edit
          </Link>
          <Link to={`/decks/${deckId}/study`} className="btn btn-primary mr-2">
            Study
          </Link>
          <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
            +Add Cards
          </Link>
        </div>
        <div>
          <button className="btn btn-danger" onClick={() => handleDeleteDeck(deckId)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeckDescription;
