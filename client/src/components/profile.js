import React, { Component } from 'react';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';
import Form from './profile/form';
import EditProfile from './profile/editProfile';
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
        return (
            <div class="container">
               <p><h4>{option}</h4></p>
               <a href="/profile/edit"><button type="submit" class="btn btn-primary">Edit Profile</button></a>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer
    }
}
export default connect(mapStateToProps, actions)(profile);