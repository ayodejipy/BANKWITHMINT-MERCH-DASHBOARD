import React, { Component } from 'react';
import { MDBNavbar, MDBIcon, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import notification from "../assets/illustrations/bell.svg";
import User from "../assets/illustrations/user.svg";


class header extends Component {
    state = {
        collapseID: "",
        msg: "Hello",
        user: "Oluwaleke Ojo",
    };
      
    toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));


    render() {
        return (
            <>
                <Router>
                    <MDBNavbar color="white" expand="md" fixed="top">
                        <MDBNavbarBrand style={{ width: "12.88rem" }}>
                            <strong className="blue-text font-weight-bold">TransMonitor</strong>
                        </MDBNavbarBrand>

                        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />

                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        
                            <MDBNavbarNav left>
                                <form className="form-inline">
                                    <MDBIcon icon="search" className="text-grey" />
                                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search..." aria-label="Search" />
                                </form>
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
                                        <span className="badge">8</span>
                                    </MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem style={{ clear: 'both' }}>
                                    

                                    <MDBDropdown className="float-md-right">
                                        <MDBDropdownToggle className="dopdown-toggle" nav>

                                            <div className="float-md-left user-details mr-3">
                                                <span>{this.state.msg}</span>
                                                <span>{this.state.user}</span>
                                            </div>
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