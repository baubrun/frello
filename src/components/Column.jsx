import React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import AddNewItem from "./AddNewItem";
import Card from "../components/Card";
import { useAppState } from "../context/AppStateContext";
import { ADD_TASK } from "../reducer/actionTypes";

const Column = ({ text, id, index }) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card key={task.id} text={task.text} />
      ))}
      <AddNewItem
        dark={true}
        onAdd={(text) => {
          dispatch({
            type: ADD_TASK,
            payload: {
              text,
              taskId: id,
            },
          });
        }}
        toggleButtonText="+ Add task"
      />
    </ColumnContainer>
  );
};

export default Column;
