import types from './todoConstant';

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    todo,
});

export const removeTodo = (index) => ({
    type: types.REMOVE_TODO,
    index,
});

const getData = (url) => fetch(url).then(response => response.json());

export const loadFromServer = () => async (dispatch) => {
    const url = 'https://bbandydd.github.io/React_Redux_Todolist/initial.json';
    const data = await getData(url);
    data.forEach(todo => dispatch(addTodo(todo.text)));
}
