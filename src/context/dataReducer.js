import {
    v4 as uuid
} from "uuid"
import {
    findByIndex
} from "../utils"


const ADD_LIST = "ADD_LIST"
const ADD_TASK = "ADD_TASK"


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
                        tasks: []
                    }
                ]
            }
        }
        case ADD_TASK: {
            const listIdx = findByIndex(
                state.lists,
                action.payload.taskId
            )
            state.lists[listIdx].tasks.push({
                id: uuid(),
                text: action.payload.text
            })
            return {
                ...state
            }
        }
        default:
            return state
    }
}