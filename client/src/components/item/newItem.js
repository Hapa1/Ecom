import React, {Component} from 'react';
import Form from './form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NewItem extends Component {

    handleSubmit = (data) => {
        console.log(data)
    }

    render(){
        return(
            <div class="container" style={{maxWidth: '33%'}}>
                <Form onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default connect(null, actions)(NewItem)