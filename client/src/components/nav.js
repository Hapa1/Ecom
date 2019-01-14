import React, { Component } from 'react';
import { Nav, Navbar, handleSelect, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class nav extends React.Component{

	render(){
		if (this.props.user){
			
			return (
				<nav class="navbar navbar-expand-sm bg-primary navbar-primary">
					<a class="navbar-brand" href="/"><img className="Logo" src={require('./Logo.svg')}></img></a>
					<div class="collapse navbar-collapse" style={{marginTop:"5%"}}>
						<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a style={{color:"white"}} class="nav-link" href={"/user/" + this.props.user._id}>Welcome back&nbsp;{this.props.user.name}</a>
						</li>
						<li class="nav-item">
							<a style={{color:"white"}} class="nav-link" href="/api/logout">Logout</a>
						</li>
						</ul>
					</div>		
				</nav>
			)
		}
		else if(this.props.user == null){
			return(
				<nav class="navbar navbar-expand-sm bg-primary navbar-primary">
				</nav>
			)
		}
		else {
			return(
				<nav class="navbar navbar-expand-sm bg-primary navbar-primary">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
					<a style={{color:"white"}} class="nav-link" href="/auth/google">Sign In</a>
					</li>
				</ul>
				</nav>
			
			)
			
			
		}
		
	}
}

 const mapStatetoProps = (state) => {
	console.log("state", state);
	 return {
		user: state.userReducer,
	 }
 }

export default connect(mapStatetoProps)(nav);

