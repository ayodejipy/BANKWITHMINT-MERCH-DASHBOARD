import React, { Component } from 'react';
import Col from "../Col";
import DataTable from "./datatable";
import Progress from "../progressBar";

class mainDash extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row my-4">
                        <Col heading={"Daily Transaction Volume"} value={"4000"} />
                        <Col heading={"Daily Transaction Value"} value={"4,000,000"} />
                        <Col heading={"Total Transaction Volume"} value={"452,000"} />
                        <Col heading={"Total Transaction Value"} value={"4,000,000"} />
                    </div>

                    <div className="row my-4">
                        <div className="col-md-8"> Chart goes in here </div>
                        
                        <div className="col-md-4">
                            <div className="row align-items-center">
                                <div className="col-md-12 my-1 orders-tab">
                                        <h4>Orders</h4>
                                        <Progress />
                                        <p>Pending Orders: <span className="yellow-text font-weight-bold">20</span> </p>
                                        <p>Reconsile Orders: <span className="green-text font-weight-bold">80</span> </p>
                                        <p>Total Orders: <span className="blue-text font-weight-bold">100</span> </p>
                                </div>
                                
                                <div class="col-md-12 my-1 payments-tab">
                                    <h4>Payment</h4>
                                    <Progress />
                                    <p>Un-reconsiled Payments: <span className="yellow-text font-weight-bold">20</span> </p>
                                    <p>Reconsile Payments: <span className="green-text font-weight-bold">80</span> </p>
                                    <p>Total Payments: <span className="blue-text font-weight-bold">100</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-sm-12 bg-white">
                            <h2>Payments</h2>
                            <DataTable />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default mainDash;