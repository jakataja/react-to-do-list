/**
 * Created by Katarzyna_Bak on 30.05.2017.
 */

const initialState = {
    type: 'SHOW_ALL',
    pattern: ''
};

const doneFilter = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTER_TASKS':
            return {
                ...state,
                type: action.filter
            };
        case 'SEARCH_TASK':
            return {
                ...state,
                pattern: action.text
            };

        default:
            return state;
    }
};

export default doneFilter;