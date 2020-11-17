import React, { useContext, } from "react";
import { AppContainer } from "./styles";
import Column from "./components/Column";
import AddNewItem from "./components/AddNewItem";
import {useAppState} from "./context/AppStateContext"

const App = () => {
  const {state: list} = useAppState()

  return (
      <AppContainer>
        {list.map((list, idx) => (
          <Column title={list.text} key={list.id} index={idx} />
        ))}
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
      </AppContainer>
  );
};

export default App;
