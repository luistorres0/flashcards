import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";

const AddDeckForm = (props) => {
  const initialFormData = {
    name: "",
    description: "",
  };

  const history = useHistory();
  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await createDeck({ ...formData });

    history.push(`/decks/${result.data.id}`);
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
          type="text"
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

      <Link to="/" className="btn btn-secondary mr-2">
        Cancel
      </Link>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddDeckForm;
