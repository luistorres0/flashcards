import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { createCard, updateCard } from "../../utils/api";

const CreateEditCardForm = ({ front = "", back = "", isEditing = false }) => {
  const initialFormData = {
    front: "",
    back: "",
  };

  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({ ...initialFormData });

  useEffect(() => {
    if (isEditing) {
      setFormData((currentFormData) => {
        return {
          ...currentFormData,
          front,
          back,
        };
      });
    }
  }, [back, front, isEditing]);

  const handleSaveCard = async (event) => {
    event.preventDefault();

    if (isEditing) {
      await updateCard({ ...formData, id: Number(cardId), deckId: Number(deckId) });

      setFormData({ ...initialFormData });

      history.push(`/decks/${deckId}`);
    } else {
      await createCard(deckId, { ...formData });

      setFormData({ ...initialFormData });
    }
  };

  const handleChange = (event) => {
    const newData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newData);
  };

  return (
    <form onSubmit={handleSaveCard}>
      <div className="mb-3">
        <label htmlFor="front" className="form-label">
          Front
        </label>
        <textarea
          className="form-control"
          id="front"
          name="front"
          aria-describedby="frontFormInput"
          onChange={handleChange}
          value={formData.front}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="back" className="form-label">
          Back
        </label>
        <textarea
          className="form-control"
          id="back"
          name="back"
          aria-describedby="frontFormInput"
          onChange={handleChange}
          value={formData.back}
        />
      </div>

      <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2">
        Done
      </Link>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default CreateEditCardForm;
