import React from 'react';

const TodoItem = ({id,completed,text,toggleTodo,removeTodo}) => {
    return (
        <li>
           <p>当前id：{id}</p>
           <p>当前名称：{text}</p>
           <p>当前状态: {completed?"完成":"未完成"}</p>
           <button onClick={toggleTodo}>改变状态</button>
           <button onClick={removeTodo}>删除</button> 
        </li>
    )
}

export default TodoItem;