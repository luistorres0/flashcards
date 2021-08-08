import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateDeck } from "../../utils/api";

const EditDeckForm = ({ name = "", description = "" }) => {
  const initialFormData = {
    name: "",
    description: "",
  };
  const { deckId } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({ ...initialFormData });

  useEffect(() => {
    setFormData({
      name,
      description,
    });
  }, [description, name]);

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await updateDeck({ ...formData, id: deckId });

    history.goBack();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          id="name"
          name="name"
          aria-describedby="nameFormInput"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          aria-describedby="descriptionFormInput"
          onChange={handleChange}
          value={formData.description}
        />
      </div>

      <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2">
        Cancel
      </Link>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default EditDeckForm;
