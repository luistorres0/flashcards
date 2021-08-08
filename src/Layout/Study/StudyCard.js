import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const StudyCard = (props) => {
  const [isFrontSideUp, setIsFrontSideUp] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const history = useHistory();

  const { cards } = props;
  const { front, back } = cards[cardIndex];
  const totalCards = cards.length;

  const handleFlipCard = () => {
    setIsFrontSideUp((currentState) => !currentState);
  };

  const handleNextCard = () => {
    setIsFrontSideUp((currentState) => !currentState);
    const newIndex = cardIndex + 1;

    if (newIndex >= cards.length) {
      const result = window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page.");
      if (result) {
        setCardIndex(0);
      } else {
        history.push("/");
      }
    } else {
      setCardIndex(newIndex);
    }
  };

  return (
    <div className="card w-100">
      <div className="card-body">
        <h5 className="card-title">{`Card ${cardIndex + 1} of ${totalCards}`}</h5>
        <p className="card-text">{isFrontSideUp ? front : back}</p>
        <button className="btn btn-secondary mr-2" onClick={handleFlipCard}>
          Flip
        </button>

        {!isFrontSideUp && (
          <button className="btn btn-primary" onClick={handleNextCard}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default StudyCard;
