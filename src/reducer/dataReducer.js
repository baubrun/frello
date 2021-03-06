import { v4 as uuid } from "uuid";
import { findByIndex, moveItem } from "../utils";
import {
  ADD_LIST,
  ADD_TASK,
  MOVE_LIST,
  MOVE_TASK,
  SET_DRAGGED_ITEM,
} from "../reducer/actionTypes";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case ADD_LIST: {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: uuid(),
            text: action.payload,
            tasks: [],
          },
        ],
      };
    }
    case ADD_TASK: {
      const listIdx = findByIndex(state.lists, action.payload.taskId);
      state.lists[listIdx].tasks.push({
        id: uuid(),
        text: action.payload.text,
      });
      return {
        ...state,
      };
    }
    case MOVE_LIST: {
      const { dragIdx, hoverIdx } = action.payload;
      state.lists = moveItem(state.lists, dragIdx, hoverIdx);
      return {
        ...state,
      };
    }
    case MOVE_TASK: {
      const {
        dragIdx,
        hoverIdx,
        sourceColumn,
        targetColumn,
      } = action.payload

      const sourceIdx = findByIndex(state.lists, sourceColumn)
      const targetIdx = findByIndex(state.lists, targetColumn)
      const item = state.lists[sourceIdx].tasks.splice(dragIdx, 1)[0]
      state.lists[targetIdx].tasks.splice(hoverIdx, 0, item)
      return {
        ...state
      }
    }
    case SET_DRAGGED_ITEM: {
      return {
           ...state, 
           draggedItem: action.payload 
        };
    }
    default:
      return state;
  }
};
