import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Nav from './components/nav.js';
import Landing from './components/landing.js'
import axios from 'axios'
import { throws } from 'assert';

function handleErrors(res) {
	
	if (!res.ok) {
			
			throw Error(res.statusText);
	}
	console.log("handle error");
	return res;
}

class App extends Component {
  constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null,
		}
	}
	
	

	componentDidMount() {
		/** 
				fetch('/api/current_user')
        .then(handleErrors)
          .then(res => {
                return res.json()
          })
          .then(user => {
            this.setState({ user })
          });
      */      				
		axios.get('/api/current_user').then(res => {
			if (!!res.data) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: res.data
				})
			} else {
				console.log('THERE IS NOOOO USER')
				this.setState({
					loggedIn: false,
					user: null
				})
			}		
		})
	}

  render() { 
		let option
		if (!!this.state.user){
			option =
			
				this.state.user.name
			
		}
    return (
        <div className="App">
				<BrowserRouter>
          <Nav user={this.state.user}/>
					<Route path="/auth/profile/:_id" component={Profile} />
          <Landing/>
					</BrowserRouter>
        </div>
      
    );
  }
}

export default App;
