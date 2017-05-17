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

const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            return {

            };
        case 'ADD_SUBCATEGORIES':
            return {

            };
        case 'EDIT_CATEGORY':
            return {

            };

        case 'DELETE_CATEGORY':
            return {

            };

        case 'ADD_TASK':
            return [
                ...state, {
                id: action.id,
                name: action.name,
                categoryId: action.parent,
                isDone: action.done
            }];

        case 'EDIT_TASK':
            return {

            };

        case 'MOVE_TASK':
            return {

            };

        case 'DELETE_TASK':
            return {

            };

        case 'FILTER_DONE':
            return {

            };

        case 'SEARCH_TASK':
            return {

            };

        default:
            return state;
    }
};

// const todo = () => {};
export default todos;