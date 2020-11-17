import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "../styles";
// import { useFocus } from "../utils/useFocus";



const NewItemForm = ({onAdd}) => {
  const [text, setText] = useState("");
  // const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        // ref={inputRef}
        onChange={(evt) => setText(evt.target.value)}
        value={text}
      />
      <NewItemButton 
      onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
