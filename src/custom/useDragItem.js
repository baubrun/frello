import { useDrag } from "react-dnd";
import { useAppState } from "../context/AppStateContext";
import { SET_DRAGGED_ITEM } from "../reducer/actionTypes";

export const useDragItem = (item) => {
  const { dispatch } = useAppState();
  const [drag] = useDrag({
    item,
    begin: () => {
      dispatch({
        type: SET_DRAGGED_ITEM,
        payload: item,
      });
    },
    end: () => {
      dispatch({
        type: SET_DRAGGED_ITEM,
        payload: undefined,
      });
    },
  });
  return {
    drag,
  };
};
