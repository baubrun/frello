import React, { useState } from "react";
import { AddItemButton } from "../styledComponents";
import NewItemForm from "./NewItemForm";



const AddNewItem = ({onAdd, dark, toggleButtonText }) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton 
    dark={dark}
    onClick={() => setShowForm(true)}
    >
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
