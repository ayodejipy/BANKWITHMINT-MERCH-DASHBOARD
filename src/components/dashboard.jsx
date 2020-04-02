import React, { Component } from 'react';
import overview from "../assets/illustrations/dashboard.svg";
import wallet from "../assets/illustrations/wallet.svg";
import Reconsile from "../assets/illustrations/wallet-rc.svg";
import Unreconsile from "../assets/illustrations/wallet-notrc.svg";
import Manual from "../assets/illustrations/manual.svg";
import Profile from "../assets/illustrations/profile.svg";
import Img from "./Image";
import ContentArea from "./body/mainDash";


class dashboard extends Component {
    render() {
        return (
            <>
                <aside class="container-fluid">
                    <div class="row">
                        <div class="col-md-2 sidebar">
                            <div className="cta--btn">
                                <button class="gen-invoice">GENERATE INVOICE</button>
                            </div>

                            <nav class="quick--link">
                                <div className="sub-links">
                                    <label>Main</label>

                                    <ul class="quick--link-list">
                                        <li>
                                            <Img src={overview} desc={"Dashboard"} />
                                            <a href="http://google.com">Overview</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sub-links">
                                    <label>Payments</label>
                                    <ul class="quick--link-list">
                                        <li>
                                            <Img src={wallet} desc={"All Payments"} />
                                            <a href="http://google.com">All Payments</a>
                                        </li>
                                        <li>
                                            <Img src={Reconsile} desc={"Reconciled Payments"} />
                                            <a href="http://google.com">Reconciled Payments</a>
                                        </li>
                                        <li>
                                            <Img src={Unreconsile} desc={"Un - Reconciled Payments"} />
                                            <a href="http://google.com">Un - Reconciled Payments</a>
                                        </li>
                                        <li>
                                            <Img src={Manual} desc={"Manual Settlement"} />
                                            <a href="http://google.com">Manual Settlement</a>
                                        </li>
                                    </ul> 
                                </div>

                                <div className="sub-links">
                                    <label>Orders</label>
                                    <ul class="quick--link-list">
                                        <li>
                                            <Img src={wallet} desc={"All Orders"} />
                                            <a href="http://google.com">All Orders</a>
                                        </li>
                                        <li>
                                            <Img src={Reconsile} desc={"Pending Orders"} />
                                            <a href="http://google.com">Pending Orders</a>
                                        </li>
                                        <li>
                                            <Img src={Unreconsile} desc={"Reconciled Orders"} />
                                            <a href="http://google.com">Reconciled Orders</a>
                                        </li>
                                    </ul> 
                                </div>

                                <div className="sub-links">
                                    <ul class="quick--link-list">
                                        <li>
                                            <Img src={Profile} desc={"Merchant Profile"} />
                                            <a href="http://google.com">Merchant Profile</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div class="col-md-10">
                            <ContentArea />
                        </div>
                    </div>
                </aside>  
            </>
        );
    }
}


export default dashboard;