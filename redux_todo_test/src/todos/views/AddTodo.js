import React from 'react';
import {connect} from "react-redux"
import {addTodo} from "../actions"

var ipt;
const AddTodo = ({addTodo}) => {
    
    return (
        <div>
            <input type="text" onChange={(e) => {
                ipt = e.target.value;
            }} />
            <button onClick={() => {
                addTodo(ipt);
            }}>添加</button>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text));
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTodo)