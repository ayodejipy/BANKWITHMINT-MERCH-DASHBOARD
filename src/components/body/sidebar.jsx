import React, { Component } from 'react';
import overview from "../../assets/illustrations/dashboard.svg";
import wallet from "../../assets/illustrations/wallet.svg";
import Reconsile from "../../assets/illustrations/wallet-rc.svg";
import Unreconsile from "../../assets/illustrations/wallet-notrc.svg";
import Manual from "../../assets/illustrations/manual.svg";
import Profile from "../../assets/illustrations/profile.svg";
import Img from "../Image";

class sidebar extends Component {
    render() {
        return (
            <>
                <div className="cta--btn">
                    <button className="gen-invoice">GENERATE INVOICE</button>
                </div>

                <nav className="quick--link">
                    <div className="sub-links">
                        <label>Main</label>
                        <ul className="quick--link-list">
                            <li>
                                <Img src={overview} desc={"Dashboard"} className={"quick--link-icon"} />
                                <a href="http://google.com">Overview</a>
                            </li>
                        </ul>
                    </div>

                    <div className="sub-links">
                        <label>Payments</label>
                        <ul className="quick--link-list">
                            <li>
                                <Img src={wallet} desc={"All Payments"} className={"quick--link-icon"} />
                                <a href="http://google.com">All Payments</a>
                            </li>
                            <li>
                                <Img src={Reconsile} desc={"Reconciled Payments"} className={"quick--link-icon"} />
                                <a href="http://google.com">Reconciled Payments</a>
                            </li>
                            <li>
                                <Img src={Unreconsile} desc={"Un - Reconciled Payments"} className={"quick--link-icon"} />
                                <a href="http://google.com">Un - Reconciled Payments</a>
                            </li>
                            <li>
                                <Img src={Manual} desc={"Manual Settlement"} className={"quick--link-icon"} />
                                <a href="http://google.com">Manual Settlement</a>
                            </li>
                        </ul> 
                    </div>

                    <div className="sub-links">
                        <label>Orders</label>
                        <ul className="quick--link-list">
                            <li>
                                <Img src={wallet} desc={"All Orders"} className={"quick--link-icon"} />
                                <a href="http://google.com">All Orders</a>
                            </li>
                            <li>
                                <Img src={Reconsile} desc={"Pending Orders"} className={"quick--link-icon"} />
                                <a href="http://google.com">Pending Orders</a>
                            </li>
                            <li>
                                <Img src={Unreconsile} desc={"Reconciled Orders"} className={"quick--link-icon"} />
                                <a href="http://google.com">Reconciled Orders</a>
                            </li>
                        </ul> 
                    </div>

                    <div className="sub-links">
                        <ul className="quick--link-list">
                            <li>
                                <Img src={Profile} desc={"Merchant Profile"} className={"quick--link-icon"} />
                                <a href="http://google.com">Merchant Profile</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default sidebar;