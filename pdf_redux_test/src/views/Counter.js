
import React from 'react';
import * as Actions from '../Actions.js';
import { connect } from 'react-redux';


const Counter = ({caption, onIncrement, onDecrement, value}) => {
  return <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <span>{caption} count:</span>
            <span>{value}</span>
         </div>
}

const mapStateToProps = (state,ownProps) => {
  return {
    value: state[ownProps.caption]
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);