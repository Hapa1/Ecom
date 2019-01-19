import React, { Component } from 'react';
import * as actions from '../actions';
import {reducer as formReducer, reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {}
  if(!values.comment){
    errors.comment = 'Required'
  }
}


const createRenderer = render => ({ input, meta, label, ...rest }) =>
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label>
      {label}
    </label>
    {render(input, label, rest)}
    {meta.error &&
      meta.touched &&
      <span>
        {meta.error}
      </span>}
  </div>

const RenderInput = createRenderer((input, label) =>
  <input {...input} placeholder={label} />
)

const RenderSelect = createRenderer((input, label, { children }) =>
  <select {...input}>
    {children}
  </select>
)


class InputForm extends Component {
    //this.props.handleSubmit(values => (this.props.createComment(values,this.props.id)))
  
    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <label>Comment</label>
          <Field name="comment" component={RenderInput}></Field>
        </form>
      );
    }


}

InputForm = reduxForm({
    validate,
    form: 'commentForm',
    field: 'comment',
})(InputForm);

export default connect(null, actions)(InputForm);
