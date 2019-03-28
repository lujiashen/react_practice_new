import React from 'react';
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { toggleTodo, removeTodo } from "../actions"
import { FilterTypes } from "../../constants"

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
    console.log(todos);
    return (
        <ul>
            {
                todos.map((item) => {
                    return <TodoItem 
                        id={item.id}
                        key={item.id} 
                        text={item.text}
                        completed={item.completed} 
                        toggleTodo={() => toggleTodo(item.id)} 
                        removeTodo={() => removeTodo(item.id)} 
                    />
                })
            }
        </ul>
    )
}
const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            // throw new Error('unsupported filter');
    }
}

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        removeTodo: (id) => {
            dispatch(removeTodo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);