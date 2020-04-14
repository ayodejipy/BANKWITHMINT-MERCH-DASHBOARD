import React, { Component } from 'react';
import Col from "../Col";
import DataTable from "./datatable";
// import BSDataTable from "./BSDataTable";
import Progress from "../progressBar";
import Chart from "./Chart";

class mainDash extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row my-4 stats-tab">
                        <Col heading={"Daily Transaction Volume"} value={"2,342"} />
                        <Col heading={"Daily Transaction Value"} value={"4,000,000"} />
                        <Col heading={"Total Transaction Volume"} value={"452,000"} />
                        <Col heading={"Total Transaction Value"} value={"4,000,000"} />
                    </div>

                    <div className="row my-4 ml-0 h-100">
                        <div className="col-md-8 bg-white"> 
                            <Chart />
                        </div>
                        
                        <div className="col-md-4">
                            <div className="d-flex flex-column h-100">
                                <div className="mb-1 orders-tab">
                                        <h4>Orders</h4>
                                        <Progress />
                                        <p>Pending Orders: <span className="yellow-text font-weight-bold">20</span> </p>
                                        <p>Reconsile Orders: <span className="green-text font-weight-bold">80</span> </p>
                                        <p>Total Orders: <span className="blue-text font-weight-bold">100</span> </p>
                                </div>
                                
                                <div className="mt-1 payments-tab ">
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
                        <div className="col-sm-12">
                            <h3 className="my-4">Payments</h3>
                            <DataTable />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default mainDash;