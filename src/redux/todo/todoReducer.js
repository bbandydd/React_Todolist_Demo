import types from './todoConstant';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TODO:
            const { todo } = action;

            return [
                ...state,
                { text: todo },
            ];
        case types.REMOVE_TODO:
            const { index } = action;

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1),
            ];
        default:
            return state;
    }
}
