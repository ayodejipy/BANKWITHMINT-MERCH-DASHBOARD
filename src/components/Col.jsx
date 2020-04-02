import React from 'react';
import Chart from "../assets/illustrations/chart.svg";
import Img from "./Image";

const Col = props => {
    return (
        <>
            <div class="col-xl-3 col-md-6 mb-2">
                <div class="card">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs mb-1">{props.heading}</div>
                                <div class="h6 text-gray-800">{props.value}</div>
                            </div>
                            
                            <div class="col-auto">
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