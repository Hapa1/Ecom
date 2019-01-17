
import React, { Component } from 'react';
import {reducer as formReducer, reduxForm, Field} from 'redux-form';
import field from './field'
import * as actions from '../../actions'
import { connect } from 'react-redux';

class ProfileForm extends Component {
    renderfield(){
        return(
            <div>
                <Field label="Name"type="text" name="name" component={field}></Field>
                <Field label="Email"type="text" name="email" component={field}></Field>
                <Field label="Address"type="text" name="address" component={field}></Field>
            </div>
        )
    }
    render() {
       console.log(this.props) 
      return (
        <form onSubmit={this.props.handleSubmit(values => (this.props.updateProfile(values)))}>
          {this.renderfield()}
          <button>Submit</button>
        </form>
      );
    }
}

function validate(values) {
    const errors = {}
    return errors
}

ProfileForm = reduxForm({
    validate,
    form: 'profileForm',
    field: 'comment'
})(ProfileForm);

export default connect(null, actions)(ProfileForm)