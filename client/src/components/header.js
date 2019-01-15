import React, { Component } from 'react';
import { Nav, Navbar, handleSelect, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends React.Component{

	render(){

			return (
<div class="bar">
  <div class="down">
    <button class="btn">MEN</button>
    <div class="down-content">
        <div>
            <div class="row">
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}}className="baritem"><b>FEATURED</b></a>
                    <a className="baritem">Most Popular</a>
                    <a className="baritem">Newest</a>
                    <a className="baritem">Sale Items</a>
                </div>
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}} className="baritem"><b>CLOTHES</b></a>
                    <a className="baritem">Pants</a>
                    <a className="baritem">Hoodies</a>
                    <a className="baritem">Shorts</a>
                    <a className="baritem">Tees</a>
                    <a className="baritem">Long Sleeves</a>
                </div>
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}} className="baritem"><b>SHOES</b></a>
                    <a className="baritem">Running</a>
                    <a className="baritem">Skateboard</a>
                    <a className="baritem">Sandals</a>
                </div>
            </div>
        </div>   
    </div>
  </div>
  <div class="down">
    <button class="btn">WOMEN</button>
    <div class="down-content">
        <div>
            <div class="row">
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}}className="baritem"><b>FEATURED</b></a>
                    <a className="baritem">Most Popular</a>
                    <a className="baritem">Newest</a>
                    <a className="baritem">Sale Items</a>
                </div>
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}} className="baritem"><b>CLOTHES</b></a>
                    <a className="baritem">Hoodies</a>
                    <a className="baritem">Leggings</a>
                    <a className="baritem">Flannels</a>
                </div>
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}} className="baritem"><b>SHOES</b></a>
                    <a className="baritem">Running</a>
                    <a className="baritem">Skateboard</a>
                    <a className="baritem">Sandals</a>
                </div>
            </div>
        </div>   
    </div>
  </div>
</div>
			)
		}

}

export default Header;

/**
 *                     <div class="col-sm-4">
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
 */