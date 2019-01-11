import React, { Component } from 'react';
import { Nav, Navbar, handleSelect, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class nav extends React.Component{

	render(){
		let name = ''
		if(this.props.user){
			name = <a href={"/user/" + this.props.user._id}>{this.props.user.name}</a>
		}
		let option
		if (this.props.user){
			option =
			<NavItem href="/api/logout">
					Logout
			</NavItem>
		}
		else if(this.props.user == null){
			
		}
		else {
			option = 
			<NavItem eventKey={1} href="/auth/google">
			Sign In
			</NavItem>
		}
		return(
			<div>
			{name}
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
					<a href='/'>React-Bootstrap</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav className="Nav">
					{option}
				</Nav>
			</Navbar>
			
			</div>
		)
	}
}

/** 
const nav = props => {
	console.log(props)
	let Greeting
	if (props.user === null) {
		Greeting = <p>Hello</p>
	} else if (props.user.firstName) {
		console.log(props.user.firstName)
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.firstName}</strong>
			</p>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.local.username} </strong>
			</p>
		)
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}
*/
/**
class nav extends React.Component {
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
	}

    render() {
		const user = (JSON.stringify(this.props.user));
		console.log(user)
			  return(
				
				<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand >
							<a className="HeaderText" href="/">Case 1 </a>
							<div></div>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav className="Nav">
						<NavItem className='NavItem' eventKey={1} href="/auth/google">
						<div className="NavItem">Link1</div>
						</NavItem>
					</Nav>
					
				</Navbar>
				</div>
			  )
		  }
        ////if (this.state.redirectTo) {
		//	return <Redirect to={{ pathname: this.state.redirectTo }} />
		//} else {
        //return(
		
        //);
    
}
 */

 const mapStatetoProps = (state) => {
	console.log("state", state);
	 return {
		user: state.userReducer,
	 }
 }

export default connect(mapStatetoProps)(nav);

