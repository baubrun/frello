import React from "react";
import { AppContainer } from "./styledComponents";
import Column from "./components/Column";
import AddNewItem from "./components/AddNewItem";
import {useAppState} from "./context/AppStateContext"
import {ADD_LIST} from "./reducer/actionTypes"
import CustomDragLayer from "./components/CustomDragLayer"


const App = () => {
  const {state, dispatch} = useAppState()

  return (
      <AppContainer>
        <CustomDragLayer />
        {state.lists.map((list, idx) => (
          <Column 
          id={list.id} 
          index={idx}
          key={list.id} 
          text={list.text}   />
        ))}
        <AddNewItem
        onAdd={text => dispatch({
          type: ADD_LIST,
          payload: text,
        })} 
        toggleButtonText="+ Add another list" 

        />
      </AppContainer>
  );
};

export default App;
