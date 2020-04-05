import React, { Component } from 'react';
import Sidebar from "./body/sidebar";
// import SideNav from "./header/navs";
import ContentArea from "./body/contentArea";


class dashboard extends Component {
    render() {
        return (
            <>
                {/* <SideNav /> */}
                <div>
                    <section className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 sidebar"> 
                                <Sidebar /> 
                            </div>

                            <div className="col-md-10">
                                <ContentArea />
                            </div>
                        </div>
                    </section> 
                </div> 
            </>
        );
    }
}


export default dashboard;