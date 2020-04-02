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
                    status: 'settled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unreconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unreconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unreconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unreconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'unreconcile'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'reconcile'
                },
                
            ],
            status: [ 
                {id: "1", value: "All"}, 
                {id: "2", value: "Reconsiled" }, 
                {id: "3", value: "Unreconsiled" }, 
                {id: "4", value: "Settled" }, 
                {id: "5", value: "unsettled" },
            ],
            selectedValue: ''
        };
    }
    
    filterRecord = (e) => {
        let { value } = e.target;
        // this.setState({ selectedValue: e.target.value });
        this.setState({ selectedValue:value }, () => this.filterWithStatus());
    };

    filterWithStatus = () => {
        this.setState( prevState => {
            
        });
    }

    render() {
        // const { status } = this.state;

        return (
            <>
                <select 
                className="browser-default custom-select" 
                defaultValue={this.state.value}
                onChange={this.filterRecord}>

                    {this.state.status.map((status, index) => 
                    <option key={index} value={status.value}> {status.value} </option> )}
                </select>

                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={this.state}
                    /> 
            </>
        );
    }
}


export default datatable;