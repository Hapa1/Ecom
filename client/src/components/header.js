import React, { Component } from 'react';
import { Nav, Navbar, handleSelect, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends React.Component{

	render(){

			return (
            <div className="head">
                <div style={{margin: '20px'}}>
                
                </div>
                    
                
                <div className="tabs" style={{marginBottom: '10px'}}>
                <div class="row" >
                    <div class="col-sm-4">
                    <div>
                        <ul>
                            <li>
                            <a href="#"><b><h5>Men</h5></b></a>
                                <ul>
                                    <li><a href="#">Clothes</a></li>
                                    <li><a href="#">Pants</a></li>
                                    <li><a href="#">Shoes</a></li>
                                    <li><a href="#">Accessories</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div>
                        <ul>
                            <li>
                            <a href="#"><h5>Women</h5></a>
        
                                <ul>
                                    <li><a href="#">Clothes</a></li>
                                    <li><a href="#">Pants</a></li>
                                    <li><a href="#">Shoes</a></li>
                                    <li><a href="#">Accessories</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div>
                        <ul>
                            <li>
                            <a href="#"><h5>Accessories</h5></a>
        
                                <ul>
                                    <li><a href="#">Clothes</a></li>
                                    <li><a href="#">Pants</a></li>
                                    <li><a href="#">Shoes</a></li>
                                    <li><a href="#">Accessories</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            </div>
  
			)
		}

}

export default Header;

