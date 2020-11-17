import React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import AddNewItem from "./AddNewItem";
import Card from "../components/Card";
import {useAppState} from "../context/AppStateContext"



const Column = ({ title, index }) => {
  const {state: list} = useAppState()

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {list[index].tasks.map((task) => (
        <Card key={task.id} text={task.text} />
      ))}
      <AddNewItem 
        dark={true}
        onAdd={() => {}} 
        toggleButtonText="+ Add task" />
    </ColumnContainer>
  );
};

export default Column;
