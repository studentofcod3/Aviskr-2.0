import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavLink,
  MDBNavItem,
  MDBHamburgerToggler,
  MDBNavbarNav,
  MDBCollapse
} from "mdbreact";

import "./hamburger-menu.scss";

class hamburgerMenuPage extends Component {
  state = {
    collapse1: ""
  };

  toggleSingleCollapse = collapseId => () => {
    this.setState({
      [collapseId]: !this.state[collapseId]
    });
  };

  render() {
    return (
      <MDBNavbar>
        <MDBHamburgerToggler
          color='#fff'
          id='hamburger1'
          onClick={this.toggleSingleCollapse("collapse1")}
        />
        <MDBCollapse isOpen={this.state.collapse1} navbar>
          <MDBNavbarNav className='MDBNavbarNav' left>
            <MDBNavItem active>
              <MDBNavLink
                to='/about'
                onClick={this.toggleSingleCollapse("collapse1")}
              >
                About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to='/'
                onClick={this.toggleSingleCollapse("collapse1")}
              >
                Stories
                <MDBNavItem active>
                  <MDBNavLink
                    to='/'
                    onClick={this.toggleSingleCollapse("collapse1")}
                  >
                    Drone Warfare
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active>
                  <MDBNavLink
                    to='/'
                    onClick={this.toggleSingleCollapse("collapse1")}
                  >
                    Story 2
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to='/contact'
                onClick={this.toggleSingleCollapse("collapse1")}
              >
                Contact
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default hamburgerMenuPage;
