import { combineReducers } from 'redux'

export const modifyTasks = (state=[],action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return [...state,action.payload]
        default:
            return state
    }

}

export const allReducers = combineReducers({
    modifyTasks: modifyTasks,
})