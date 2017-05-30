/**
 * Created by Katarzyna_Bak on 16.05.2017.
 */

const initialState = [
    {id: 1, name: "To-do item 1", categoryId: 1, isDone: false},
    {id: 2, name: "To-do item 2", categoryId: 2, isDone: false},
    {id: 3, name: "To-do item 3", categoryId: 4, isDone: false},
    {id: 4, name: "To-do item 4", categoryId: 4, isDone: true},
    {id: 5, name: "To-do item 5", categoryId: 4, isDone: false}
];

let nextTaskId = 6;

const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [
                ...state, {
                id: nextTaskId++,
                name: action.name,
                categoryId: action.parent,
                isDone: false
            }];

        case 'UPDATE_TASK':
            return state.map(task =>
                task.id === action.id ?
                    {...task, name: action.name, isDone: action.done } :
                    task
            );

        case 'MOVE_TASK':
            return state.map(task =>
                task.id === parseInt(action.id, 10) ?
                    {...task, categoryId: action.parentId } :
                    task
            );

        case 'DELETE_TASK':
            return state.filter(task =>
                task.categoryId !== action.parent
            );

        case 'DONE_TASK':
            return state.map(task =>
                task.id === action.id ?
                {...task, isDone: !task.isDone } :
                task
            );

        default:
            return state;
    }
};

export default todos;