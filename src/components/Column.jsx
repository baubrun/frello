import React, { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "../styledComponents";
import AddNewItem from "./AddNewItem";
import Card from "../components/Card";
import { useAppState } from "../context/AppStateContext";
import { ADD_TASK, CARD, COLUMN, MOVE_TASK } from "../reducer/actionTypes";
import useDragItem from "../customHooks/useDragItem";
import { useDrop } from "react-dnd";

const Column = ({ id, index, text,}) => {
  const { state, dispatch } = useAppState();
  const ref = useRef();
  const [, drop] = useDrop({
    accept: CARD,
    hover(item) {
      const dragIdx = item.index;
      const hoverIdx = 0;
      const sourceColumn = item.id
      const targetColumn = id
      if (sourceColumn === targetColumn) {
        return;
      }
      dispatch({
        type: MOVE_TASK,
        payload: {
          dragIdx, hoverIdx, sourceColumn, targetColumn
        }
    });
    item.index = hoverIdx
    item.id = targetColumn
  },
});

  const { drag } = useDragItem({
    type: COLUMN,
    id,
    index,
    text,
  });

  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, idx) => (
        <Card id={id} index={idx} key={task.id} text={task.text} />
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
