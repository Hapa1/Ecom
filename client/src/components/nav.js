import React, { Component } from 'react';
import { Nav, Navbar, handleSelect, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import '../App.css';


class nav extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: null,
		}
	}

	render(){
		console.log(this.props.user)
		let option
		if (!!this.props.user){
			option =
			<NavItem href="/api/logout">
					Logout
			</NavItem>
		}
		else {
			option = 
			<NavItem eventKey={1} href="/auth/google">
			Sign In
			</NavItem>
		}
		return(
			<div>
			
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

export default nav;

