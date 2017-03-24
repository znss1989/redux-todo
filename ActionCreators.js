import AppConstants from './AppConstants'

export const addTodo = (text) => {
    return {
        type: AppConstants.ADD_TODO,
        text
    };
};

export const toggleTodo = (index) => {
    return {
        type: AppConstants.TOGGLE_TODO,
        index
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: AppConstants.SET_VISIBILITY_FILTER,
        filter
    };
};