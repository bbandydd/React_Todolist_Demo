import types from './todoConstant';

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    todo,
});

export const removeTodo = (index) => ({
    type: types.REMOVE_TODO,
    index,
});
