import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import '../App.css';

class nav extends React.Component {

    render() {
        return(
        <Navbar>
        <Navbar.Header>
            <Navbar.Brand >
            <a className="HeaderText" href="#home">Ecom</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav className="Nav">
            <NavItem className='NavItem' eventKey={1} href="#">
            <div className="NavItem">Link1</div>
            </NavItem>
            <NavItem className="Item" eventKey={2} href="#">
            <div className="NavItem">Link2</div>
            </NavItem>
        </Nav>
        </Navbar>
        );
    }
}

export default nav;

