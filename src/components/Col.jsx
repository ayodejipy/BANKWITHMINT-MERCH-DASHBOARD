import React from 'react';
import Chart from "../assets/illustrations/chart.svg";
import Img from "./Image";

const Col = props => {
    return (
        <>
            <div className="col-xl-3 col-md-6 mb-2">
                <div className="card">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center" >
                            <div className="col mr-1">
                                <div className="text-xs mb-1">{props.heading}</div>
                                <div className="h6 text-gray-800">{props.value}</div>
                            </div>
                            
                            <div className="col-auto">
                                <Img src={Chart} desc={"Statistic Chart"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Col;