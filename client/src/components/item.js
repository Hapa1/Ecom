import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import './App.css';
import Axios from 'axios';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';
import InputForm from './input';
import { initialize } from 'redux-form';

class item extends React.Component{

    componentDidMount(){
        this.props.getItem(this.props.match.params._id);
    }

    handleSubmit(data) {
        console.log('Submission received!', data);
        
    }

    render(){
        
        if (this.props.item){
            console.log(this.props.item)
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
                        
                <InputForm/>  

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
    }
}

export default connect(mapStateToProps, actions)(item);