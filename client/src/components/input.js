import React, { Component } from 'react';
import * as actions from '../actions';
import {reducer as formReducer, reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import Form from './profile/form';

const validate = values => {
  const errors = {}
  if(!values.comment){
    errors.comment = 'Required'
  }
}

//const maxLength = max => value =>
//  value && value.length > max ? `Must be ${max} characters or less` : undefined
//const maxLength = maxLength(255)
//const required = value => value ? undefined : 'Required'

  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} class="form-control" placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

class InputForm extends Component {
    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <label>Comment</label>
          <Field 
          name="comment" 
          component={renderField}
          ></Field>
        </form>
      );
    }
}

InputForm = reduxForm({
    validate,
    form: 'commentForm',
})(InputForm);

export default connect(null, actions)(InputForm);
