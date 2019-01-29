import React, { Component } from 'react';
import './App.css';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';
import InputForm from './input';

const Thread = (comments) => {
    const row = []
    comments.comments.forEach((comment) => {
       row.push(<Comment comment={comment} key={comment._id}/>)
    });
    return(<div>{row}</div>)
}

const Comment = (comment) => {
    return (
        <div>
            <p>{comment.comment.text}</p>
        </div>
    )
}

class item extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getItem(this.props.match.params._id);
        this.props.fetchComments(this.props.match.params._id)
    }

    handleSubmit = (data) => {
        this.props.createComment(data.comment,this.props.match.params._id)
        this.props.fetchComments(this.props.match.params._id)
    }

    renderFields(){
        let commented = 0
        this.props.comments.forEach(comment => {
            if(comment._user == this.props.user._id){
                commented = 1;
            }
        })
        if(commented == 1){
            return(<div>
                
            </div>)
        }
        else{
            return(
                <InputForm id={this.props.item._id} onSubmit={this.handleSubmit}/> 
            )
        }
    }
    

    render(){
        if (this.props.item){
            return(
            
                <div>
                    <div style={{marginTop:"50px"}} class="container">     
                        <div class="row">
                        <div class="col-sm-2">
                            
                        </div>
                        <div class="col-sm-4">
                            <div><img src={this.props.item.imgUrl}/></div>
                        </div>
                        <div style={{textAlign:'left'}}class="col-sm-4">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div><b><h4>{this.props.item.name}</h4></b></div>
                                </div>
                                <div style={{paddingTop:'5px',textAlign:'right'}} class="col-sm-6">
                                    <div><b>${this.props.item.price}</b></div>
                              
                                    
                                </div>
                            </div>
                            <div style={{marginTop:'15px',marginBottom:'15px'}}>
                                <button type="button" class="btn btn-primary">Add to Cart</button>
                            </div>                
                            <div style={{color:'#5d5b5b'}}>{this.props.item.description}</div>
                        </div>
                        <div class="col-sm-2">
                        
                        </div>
                        </div>
                    </div>
                <div> 
                {this.renderFields()}
                </div>
                    <Thread comments={this.props.comments}/>
                    <div>
                    <h1>Hello!</h1>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div>
                    Loading
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.singleItemReducer,
        comments: state.commentReducer,
        user: state.userReducer
    }
}

export default connect(mapStateToProps, actions)(item);