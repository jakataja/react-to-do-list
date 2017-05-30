/**
 * Created by Katarzyna_Bak on 16.05.2017.
 */

const initialState = {
    categoryId: null,
    isActive: false,
    type: null
};

const modal = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_MODAL':
            return {
                categoryId: action.id,
                isActive: true,
                type: action.mode
            };


        case 'HIDE_MODAL':
            return {
                categoryId: null,
                isActive: false,
                type: null
            };

        default:
            return state;
    }
};

export default modal;