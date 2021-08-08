import React from "react";
import { Link } from "react-router-dom";

const Deck = (props) => {
  const { id, name, description, cards, handleDeleteDeck } = props;

  return (
    <li className="list-group-item">
      <div className="row d-flex justify-content-between px-3">
        <h3>{name}</h3>
        <p>{cards.length} cards</p>
      </div>
      <div className="row px-3">
        <p>{description}</p>
      </div>
      <div className="row d-flex justify-content-between px-3">
        <div>
          <Link className="btn btn-secondary mr-2" to={`/decks/${id}`}>
            View
          </Link>
          <Link className="btn btn-primary" to={`/decks/${id}/study`}>
            Study
          </Link>
        </div>
        <div>
          <button className="btn btn-danger" onClick={() => handleDeleteDeck(id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default Deck;
