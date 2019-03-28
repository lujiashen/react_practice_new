import React from 'react';
import {setFilter} from "../actions"
import {connect} from "react-redux"

const Link = ({active,children,onClick}) => {
    if(active) {
        return <span>{children}</span>
    }else {
        return <button onClick={() => {
            onClick();
        }}>{children}</button>
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onClick: () => {
            dispatch(setFilter(ownProps.filter));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Link);