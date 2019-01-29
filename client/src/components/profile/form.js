
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
//import field from './field'
import * as actions from '../../actions'
import { connect } from 'react-redux';

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const field = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
      }) => (
        <div>
          
          <div>
          
          <label>{label}</label>
            <input class="form-control" {...input} placeholder={label} type={type} />
            
            
          </div>
          <div>
            {touched &&
              ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
        </div>
)

class ProfileForm extends Component {
    renderfield(){
        return(
            <div class="form-group">
                <Field label="Name"t ype="text" name="name" component={field}></Field>
                <Field validate={email} label="Email"type="text" name="email" component={field}></Field>
                <Field label="Location"type="text" name="address" component={field}></Field>
            </div>
        )
    }


   

    render() { 
      return (
        <form onSubmit={this.props.handleSubmit}>
          {this.renderfield()}
          <button type="submit" class="btn btn-primary">Submit</button>
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
})(ProfileForm);

export default connect(null, actions)(ProfileForm)