import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

const field = ({input,label,type,
    meta: { touched, error, warning }
}) => (
    <div>
      <div>
        <label>{label}</label>
        <input class="form-control" {...input} placeholder={label} type={type} />
      </div>
      <div>
        {touched && ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
      </div>
    </div>
)

const adaptFileEventToValue = delegate =>
  e => delegate(e.target.files[0])

const FileInput = ({
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps,
  },
  meta: omitMeta,
  ...props,
}) =>
  <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}
  />

class ItemForm extends Component{
    render(){
        return(
            <div>
                <form id="form" onSubmit={this.props.handleSubmit} enctype="multipart/form-data">
                    <div class="form-group">
                        <Field label="Name" type="text" name="name" component={field}/>
                        <Field label="Description" type="text" name="description" component={field}/>
                        <Field label="Price" type="text" name="price" component={field}/>
                        <Field label="Image" name="url" component={FileInput}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

ItemForm = reduxForm({
    form: 'ItemForm'
})(ItemForm)

export default ItemForm