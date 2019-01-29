import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import { Button } from 'react-bootstrap';
import Nav from './nav.js';
import Header from './header.js';
import Item from './item.js'
import Landing from './landing.js'
import axios from 'axios'
import { throws } from 'assert';
import * as actions from '../actions';
import Profile from './profile.js';
import EditProfile from './profile/editProfile';
import InputForm from './input.js';
import { reduxForm, Field } from 'redux-form'

function handleErrors(res) {
	
	if (!res.ok) {
			
			throw Error(res.statusText);
	}
	console.log("handle error");
	return res;
}



class App extends Component {

	componentDidMount() {
		this.props.fetchUser();
	}
	
  render() { 
    return (
        <div className="App">
			<BrowserRouter>
				<div>		
				<Nav/>
				<Header/> 
				<Route path="/items/:_id" component={Item} />
				<Route exact path="/" component={Landing}/>
				<Route path="/user/:_id" component={Profile} />
				<Route path="/profile/edit" component={EditProfile} />
				</div>
				</BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);
