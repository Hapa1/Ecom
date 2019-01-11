import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Nav from './nav.js';
import Item from './item.js'
import Landing from './landing.js'
import axios from 'axios'
import { throws } from 'assert';
import * as actions from '../actions';
import Profile from './profile.js';

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
						<Route path="/items/:_id" component={Item} />
						<Route exact path="/" component={Landing}/>
						<Route path="/user/:_id" component={Profile} />
						</div>
					</BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);
