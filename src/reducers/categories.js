/**
 * Created by Katarzyna_Bak on 18.05.2017.
 */

const initialState = [
    {id: 1, name: "Category 1", parentId: null },
    {id: 2, name: "Category 2", parentId: null },
    {id: 3, name: "Category 3", parentId: null },
    {id: 4, name: "Category 4", parentId: null },
    {id: 5, name: "Category 5", parentId: 1 },
    {id: 6, name: "Category 6", parentId: 1 },
    {id: 7, name: "Category 7", parentId: 2 },
    {id: 8, name: "Category 8", parentId: 4 },
    {id: 9, name: "Category 9", parentId: 4 },
    {id: 10, name: "Category 10", parentId: 4 },
];

let nextCategoryId = 11;

const categories = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            return [
                {
                    id: nextCategoryId++,
                    name: action.name,
                    parentId: null
                }, ...state
            ];
        case 'ADD_SUBCATEGORY':
            return [
                {
                    id: nextCategoryId++,
                    name: action.name,
                    parentId: action.parentId
                }, ...state
            ];
        case 'EDIT_CATEGORY':
             return state.map(category =>
                    category.id === action.id ?
                        {...category, name: action.name } :
                        category
                );
        case 'DELETE_CATEGORY':
            return state.filter(category =>
                category.id !== action.id
            );

        default:
            return state;
    }
};

export default categories;