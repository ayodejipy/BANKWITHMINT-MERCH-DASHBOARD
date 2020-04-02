import React, { Component } from 'react';
import Col from "../Col";
import DataTable from "../body/datatable";

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
                        <div className="col-sm-8">hello</div>
                        
                        <div className="col-md-4">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs mb-1"> jdbjdjdjd</div>
                                    <div className="h6 text-gray-800"> djkvsbdsvsdvsb </div>
                                </div>
                                
                                <div class="col">
                                    xhsdcdhdbdhj
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-sm-12 bg-white">
                            <h2 clss>Payments</h2>
                            <DataTable />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default mainDash;