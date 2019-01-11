import React, { Component } from 'react';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';

class profile extends React.Component{
    componentDidMount(){
        this.props.getUser(this.props.match.params._id);
       
    }
    render(){
        let option = ''
        console.log(this.props);
        if(this.props.profile) {
            option = this.props.profile.name
        }
        //if(this.props.stagesData.length === 0){
        //    return null
        //}
        return (
            <div>
                Profile!
               {option}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        profile: state.profileReducer
    }
}
export default connect(mapStateToProps, actions)(profile);