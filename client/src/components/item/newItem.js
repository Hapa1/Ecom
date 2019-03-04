import React, {Component} from 'react';
import Form from './form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NewItem extends Component {

    handleSubmit = (data) => {
        console.log(data)
        this.props.newItem(data)
        
    }

    render(){
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

export default connect(mapStateToProps, actions)(NewItem)