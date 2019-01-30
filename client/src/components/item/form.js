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

class ItemForm extends Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div class="form-group">
                        <Field label="Name" type="text" component={field}/>
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