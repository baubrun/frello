import React, { useState } from "react";
import { AddItemButton } from "../styles";
import NewItemForm from "./NewItemForm";



const AddNewItem = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText } = props;

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
    dark={true} 
    onClick={() => setShowForm(true)}
    >
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
