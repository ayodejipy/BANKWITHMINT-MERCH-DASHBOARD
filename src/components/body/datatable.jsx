import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';

class datatable extends Component {
    constructor() {
        super();
        this.state  = {
            columns: [
                {
                    label: 'Item Type',
                    field: 'item',
                    sort: 'asc',
                    width: 150
                },
                {
                label: 'Price',
                field: 'price',
                sort: 'asc',
                width: 270
                },
                {
                label: 'Transaction No',
                field: 'transaction',
                sort: 'asc',
                width: 200
                },
                {
                label: 'Time',
                field: 'time',
                sort: 'asc',
                width: 150
                },
                {
                label: 'Status',
                field: 'status',
                sort: 'asc',
                width: 100
                }
            ],
            rows: [
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Settled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-grey"> <i class="fas fa-circle mr-2"></i> Un-reconsiled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled </span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status"> <i class="fas fa-circle mr-2"></i> Un-reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status"> <i class="fas fa-circle mr-2"></i> Un-reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
            ],
            status: [ 
                {id: "1", value: "All"}, 
                {id: "2", value: "Reconcilled" }, 
                {id: "3", value: "Un-reconcilled" }, 
                {id: "4", value: "Reconcilled" }, 
                {id: "5", value: "UnReconcilled" },
                {id: "6", value: "Pending" },
            ],
            selectedValue: '',
            Records: [
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Settled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-grey"> <i class="fas fa-circle mr-2"></i> Un-reconsiled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled </span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status"> <i class="fas fa-circle mr-2"></i> Un-reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status"> <i class="fas fa-circle mr-2"></i> Un-reconcilled</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-warning"> <i class="fas fa-circle mr-2"></i> Pending</span>
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: <span className="status text-success"> <i class="fas fa-circle mr-2"></i> Reconcilled</span>
                },
            ]
        };
    }
    
    filterRecord = (e) => {
        let { value } = e.target;
        // console.log(value);

        if (value !== "All") {
            var filteredRecord = this.state.Records.filter(record => record.status.toLowerCase() === value.toLowerCase());
            this.setState({ rows: filteredRecord});
        } else {
            this.setState({rows: this.state.Records});
        }

        // // this.setState({ selectedValue: e.target.value });
        // this.setState({ selectedValue:value }, () => this.filterWithStatus());
        // console.log(this.state.rows);
    };


    render() {
        // const { data } = this.props;
        // console.log(data);
        return (
            <>
                <div data-test="datatable-select" className="dataTables_length bs-select">
                    <label> Show  
                        {/* <select className="custom-select custom-select-sm form-control form-control-sm"> */}
                        <select 
                        className="browser-default w-50 custom-select filtered" 
                        defaultValue={this.state.value}
                        onChange={this.filterRecord}
                        style={{ marginLeft: "0.5rem"}}>

                            {this.state.status.map((status, index) => 
                            <option key={index} value={status.value}> {status.value} </option> )}
                        </select>
                    </label>
                </div>

                <MDBDataTable
                    tbodyColor="white"
                    hover
                    responsive
                    noBottomColumns
                    sortable= {false}
                    data={this.state}
                /> 
            </>
        );
    }
}


export default datatable;