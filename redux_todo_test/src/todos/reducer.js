import {ADD_TODO,TOGGLE_TODO,REMOVE_TOOD } from "./actilonTypes"

export function todoReducer(state = [], action) {
    switch(action.type) {
        case ADD_TODO: 
            return [...state,{id: action.id,text: action.text,completed: false}];
        case TOGGLE_TODO:
            return state.map((item) => {
                if(item.id === action.id) {
                    return {...item, completed: !item.completed}
                }else {
                    return item;
                }
            })
        case REMOVE_TOOD:
            return state.filter((item,index) => {
                return item.id !== action.id;
            })
        default:
            return state;
    }
}