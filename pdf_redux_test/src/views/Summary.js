import React from 'react';
import {connect} from 'react-redux';


const Summary = ({sum}) => {
  return <div>
            <span>Total count: {sum}</span>
         </div>
}

const mapStateToProps = (state) => {
  var sum = 0;
  Object.keys(state).map((item,index) => {
    sum = sum + state[item]
  })
  return {
    sum: sum
  }
}

export default connect(mapStateToProps)(Summary);