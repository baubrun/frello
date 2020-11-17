import React , {useContext}from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import AddNewItem from "./AddNewItem";
import {DataContext} from "../context/DataContext"
import Card from "../components/Card";



const Column = ({ title, index }) => {
    const list = useContext(DataContext)[0]

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
