import React, { Component } from 'react';
import Form from './form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

class EditProfile extends Component {
    state = {
        redirectToNewPage: false
    }

    handleSubmit = (data) => {
        this.props.updateProfile(data)
        this.setState({ redirectToNewPage: true })
        var newFormObj  = new FormData(document.getElementById('form'));
    }


    render(){

        if (this.state.redirectToNewPage) {
            return (
            <Redirect to={"/user/"+this.props.user._id}/>
            )
        }
        return(
            <div class="container" style={{maxWidth: '33%'}}>
                <Form onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       user: state.userReducer,
    }
}

export default connect(mapStateToProps, actions)(EditProfile)