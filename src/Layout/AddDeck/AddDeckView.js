import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import AddDeckForm from "./AddDeckForm";

const AddDeckView = (props) => {
  return (
    <div>
      <Breadcrumb crumbs={["Home", "Create Deck"]} />
      <h2>Create Deck</h2>
      <AddDeckForm />
    </div>
  );
};

export default AddDeckView;
