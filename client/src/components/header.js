import React, { Component } from 'react';
import { Nav, Navbar, handleSelect, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputForm from './input';


class Header extends React.Component{

	render(){

			return (
<div class="bar">
<div class="container">
<form>
    <div class="card-body row no-gutters align-items-center">
        <div class="col-auto">
            <i class="fas fa-search h4 text-body"></i>
        </div>
        <div class="col">
            <input style={{borderRadius:'.3rem 0rem 0rem .3rem'}} class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords"/>
        </div>
        <div class="col-auto">
            <button style={{borderRadius:'0rem .3rem .3rem 0rem'}} class="btn btn-lg btn-primary" type="submit">Search</button>
        </div>
    </div>
</form>
</div>
<div>
  <div class="down">
    <button class="btn">MEN</button>
    <div class="down-content">
        <div>
            <div class="row">
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}}className="baritem"><b>FEATURED</b></a>
                    <a href='/men/popular' className="baritem">Most Popular</a>
                    <a href='/men/newest' className="baritem">Newest</a>
                </div>
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}} className="baritem"><b>CLOTHES</b></a>
                    <a href='/men/pants'className="baritem">Pants</a>
                    <a href='/men/tees' className="baritem">Tees</a>
                    <a href='/men/sleeves' className="baritem">Long Sleeves</a>
                </div>
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}} className="baritem"><b>SHOES</b></a>
                    <a href='/men/running' className="baritem">Running</a>
                    <a href='/men/skate' className="baritem">Skate</a>
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
                </div>
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}} className="baritem"><b>CLOTHES</b></a>
                    <a href='/women/hoodies'className="baritem">Hoodies</a>
                    <a href='/women/leggings' className="baritem">Leggings</a>
                    <a href='/women/flannels' className="baritem">Flannels</a>
                </div>
                <div class="col-sm-4">
                    <a style={{marginBottom:'10px', color:'#212529'}} className="baritem"><b>SHOES</b></a>
                    <a href='/women/running' className="baritem">Running</a>
                    <a href='/wommen/skate' className="baritem">Skate</a>
                </div>
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