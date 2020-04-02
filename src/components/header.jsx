import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBBadge, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import notification from "../assets/illustrations/bell.svg";
import User from "../assets/illustrations/user.svg";


class header extends Component {
    state = {
        collapseID: ""
    };
      
    toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));


    render() {
        return (
            <>
                <Router>
                    <MDBNavbar color="white"  expand="md">
                        <MDBNavbarBrand>
                            <strong className="blue-text">TransMonitor</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />

                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        
                            <MDBNavbarNav left>
                                
                            </MDBNavbarNav>

                            <MDBNavbarNav right style={{ alignItems: "center" }}>
                                <MDBNavItem active>
                                    <MDBNavLink to="#!">Support</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">FAQ</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">
                                        <img src={notification} alt="Notifications" />
                                        <span className="badge ml-2">8</span>
                                    </MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink className="d-flex justify-content-end" to="#!" style={{ fontSize: "1em", width: "100px", wordSpacing: "100px"}}>
                                        <p>Hello</p>
                                    </MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle className="dopdown-toggle" nav>

                                            <img src={User} className="rounded-circle z-depth-0"
                                                style={{ height: "35px", padding: 0 }} alt="" />
                                        </MDBDropdownToggle>

                                        <MDBDropdownMenu className="dropdown-default" right>
                                            <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </Router>
            </>
        );
    }
}

export default header;