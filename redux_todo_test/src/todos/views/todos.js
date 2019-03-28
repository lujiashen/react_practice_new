import React, { Component } from 'react';
import TodoList from "./TodoList"
import AddTodo from "./AddTodo"

export default class Todos extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}