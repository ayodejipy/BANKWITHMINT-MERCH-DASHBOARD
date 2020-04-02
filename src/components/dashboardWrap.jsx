import React, { Component } from 'react';
import Sidebar from "./body/sidebar"
import ContentArea from "./body/contentArea";


class dashboard extends Component {
    render() {
        return (
            <>
                <section class="container-fluid">
                    <div class="row">
                        <div class="col-md-2 sidebar"> 
                            <Sidebar />
                        </div>

                        <div class="col-md-10">
                            <ContentArea />
                        </div>
                    </div>
                </section>  
            </>
        );
    }
}


export default dashboard;