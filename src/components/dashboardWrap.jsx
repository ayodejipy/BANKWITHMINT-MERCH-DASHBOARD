import React, { Component } from 'react';
import Sidebar from "./body/sidebar"
import ContentArea from "./body/contentArea";


class dashboard extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}


export default dashboard;