import {ADD_TODO,TOGGLE_TODO,REMOVE_TOOD} from "./actilonTypes"

let id = 0;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text: text,
        id: id++,
        completed: false
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TOOD,
        id: id
    }
}