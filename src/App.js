import React from "react";
import { AppContainer } from "./styles";
import Column from "./components/Column";
import AddNewItem from "./components/AddNewItem";
import {useAppState} from "./context/AppStateContext"
import {ADD_LIST} from "./context/dataReducer"



const App = () => {
  const {state, dispatch} = useAppState()

  return (
      <AppContainer>
        {state.lists.map((list, idx) => (
          <Column id={list.id} index={idx} key={list.id} text={list.text}   />
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
