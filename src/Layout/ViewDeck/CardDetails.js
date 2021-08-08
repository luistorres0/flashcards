import React from "react";
import { Link, useParams } from "react-router-dom";

const CardDetails = (props) => {
  const { deckId } = useParams();
  const { card, handleDeleteCard } = props;
  const { front, back, id } = card;

  return (
    <li className="list-group-item">
      <div className="row p-3">
        <div className="col"><p>{front}</p></div>
        <div className="col"><p>{back}</p></div>
      </div>
      <div className="row p-3">
        <div className="col d-flex justify-content-end">
          <Link to={`/decks/${deckId}/cards/${id}/edit`} className="btn btn-secondary mr-3">
            Edit
          </Link>
          <button className="btn btn-danger" onClick={() => handleDeleteCard(id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default CardDetails;
