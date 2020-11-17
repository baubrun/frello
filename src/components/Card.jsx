import React, {useRef} from "react";
import { CardContainer } from "../styledComponents";
import { useDrop } from "react-dnd";
import { CARD, MOVE_TASK } from "../reducer/actionTypes";
import { useAppState } from "../context/AppStateContext";
import useDragItem from "../customHooks/useDragItem";

const Card = ({ id, index, text }) => {
  const { dispatch } = useAppState();
  const ref = useRef();

  const [, drop] = useDrop({
    accept: CARD,
    hover(item) {
      if (item.id === id) {
        return;
      }
      console.log('item :>> ', item);
      const dragIdx = item.index;
      const hoverIdx = index;
      const sourceColumn = item.id;
      const targetColumn = id;
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


  const {drag} = useDragItem({
      type: CARD,
      id,
      index,
      text,
  })

  drag(drop(ref))

  return <CardContainer ref={ref} >{text}</CardContainer>;
};

export default Card;

