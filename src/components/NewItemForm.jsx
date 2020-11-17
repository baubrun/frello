import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "../styles";



const NewItemForm = ({onAdd}) => {
  const [text, setText] = useState("");

  return (
    <NewItemFormContainer>
      <NewItemInput
        onChange={(evt) => setText(evt.target.value)}
        value={text}
      />
      <NewItemButton 
      onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
