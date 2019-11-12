import * as actionTypes from './actionTypes';
export const addToComplete = (data) => {
    return {
    type:    actionTypes.ADD_TO_COMPLETE,
    data
    }
}

export const addToDelete = (data) => {
    return {
        type: actionTypes.ADD_TO_DELETE,
        data
    }
}

export const addToTodo = (data) => {
    return{
        type:actionTypes.ADD_TODO,
        data
    }
}