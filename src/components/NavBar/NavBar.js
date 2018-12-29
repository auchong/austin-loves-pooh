import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

import './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  scrollToComponent = (e, componentId) => {
    e.preventDefault();
    
    const ele = document.getElementById(componentId);
    ele.scrollIntoView(true);
  }

  render() {
    return (
      <Navbar light expand='md'>
        <NavbarBrand>#AustinsGotPooh</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <a className='nav-link' href='/' onClick={(e) => {this.scrollToComponent(e, 'our-story')}}>Our Story</a>
            </NavItem>
            <NavItem>
              <a className='nav-link' href='/' onClick={(e) => {this.scrollToComponent(e, 'wedding')}}>Wedding</a>
            </NavItem>
            <NavItem>
              <a className='nav-link' href='/' onClick={(e) => {this.scrollToComponent(e, 'our-photos')}}>Photos</a>
            </NavItem>
            <NavItem>
            <a className='nav-link' href='/' onClick={(e) => {this.scrollToComponent(e, 'registry')}}>Registry</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
};