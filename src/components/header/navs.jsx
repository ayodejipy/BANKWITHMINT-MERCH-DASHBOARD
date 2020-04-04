import React, { Component } from 'react';
import bell from "../../assets/illustrations/bell.svg";
import user from "../../assets/illustrations/user.svg";

class navs extends Component {
    render() {
        return (
            <div className="sidebar-container">
  <div className="sidebar-logo">
    Project Name
  </div>
  <ul className="sidebar-navigation">
    <li className="header">Navigation</li>
    <li>
      <a href="#">
        <i className="fa fa-home" aria-hidden="true"></i> Homepage
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard
      </a>
    </li>
    <li className="header">Another Menu</li>
    <li>
      <a href="#">
        <i className="fa fa-users" aria-hidden="true"></i> Friends
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-cog" aria-hidden="true"></i> Settings
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-info-circle" aria-hidden="true"></i> Information
      </a>
    </li>
  </ul>
</div>
        );
    }
}


export default navs;

