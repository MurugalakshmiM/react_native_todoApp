import * as actionTypes from '../action/actionTypes';

let i = 0;
let todo = [], completed = [], deleted = [];
const storeCopy = {todo: [], completed:[], deleted:[]};
const reducer = (state = {todo: [], completed:[], deleted:[]}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TODO : 
            let tempTodo = {
                id: i,
                todo: action.data
            }
            todo.push(tempTodo);
            i++;
            return {todo,completed,deleted};
        case actionTypes.ADD_TO_COMPLETE:
            console.log(action);
            return state;
        case actionTypes.ADD_TO_DELETE:
            console.log(action);
            return state;
    }

}

export default reducer;