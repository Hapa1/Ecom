import React, { Component } from 'react';
import * as actions from '../actions';
import {reducer as formReducer, reduxForm, Field} from 'redux-form';

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
  
    render() {
      return (
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <label>Comment</label>
          <Field name="comment" label="comment" component={RenderInput}></Field>
          <button type="submit">Submit</button>
        </form>
      );
    }
}
/** 

let InputForm = (props) => {
  console.log(props)
  const { handleSubmit } = props
  return(
  <form onSubmit={handleSubmit(submit)}>
    <Field name="comment" label="Comment" component={RenderInput} />
    <button type="submit">
      Submit
    </button>
  </form>
  )
}

*/

const mapStateToProps = (state) => {
  console.log(state)
  return  {
    user: state.userReducer,
    item: state.singleItemReducer
  }
  
}

export default InputForm = reduxForm({
    validate,
    form: 'commentForm',
    field: 'comment'
})(InputForm);
