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
                    status: 'Settled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                
            ],
            status: [ 
                {id: "1", value: "All"}, 
                {id: "2", value: "Reconcilled" }, 
                {id: "3", value: "Un-reconcilled" }, 
                {id: "4", value: "Settled" }, 
                {id: "5", value: "Unsettled" },
                {id: "6", value: "Pending" },
            ],
            selectedValue: '',
            Records: [
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Settled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Unsettled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Un-reconcilled'
                },
                {
                    item: 'Apple Mac Book 15" 250 SSD 12GB',
                    price: '$734590',
                    transaction: '1234567890',
                    time: '12:30',
                    status: 'Reconcilled'
                },
                
            ]
        };
    }
    
    filterRecord = (e) => {
        let { value } = e.target;

        alert((value.toString()).toLowerCase())

        if (value !== "All") {
            console.log(value)

            var filteredRecord = this.state.Records.filter(record => (record.status.toString()).toLowerCase() === (value.toString()).toLowerCase() );
            var LabeledRecord = this.AddLabel(filteredRecord);
            this.setState({ rows: LabeledRecord });
        } else {
            this.setState({rows: this.state.Records});
        }

        // // this.setState({ selectedValue: e.target.value });
        // this.setState({ selectedValue:value }, () => this.filterWithStatus());
        // console.log(this.state.rows);
    };

    componentDidMount() {
        var Records = this.state.Records;
        var LabeledRecord = this.AddLabel(Records);
        this.setState({ rows: LabeledRecord });
    }

    AddLabel(records){
        records.forEach(element => {

            if( element.status === "Reconcilled" || element.status === "Settled" ) {
                element.status = <div className="status text-success" value={element.status}> <i className="fas fa-circle "></i> {element.status} </div>
            }
            else if(element.status === "Pending" ) {
                element.status = <div className="status text-warning" value={element.status}> <i className="fas fa-circle "></i> {element.status} </div>
            }
            else {
                element.status = <div className="status" value={element.status}> <i className="fas fa-circle "></i> {element.status} </div>
            }
        });
        return records;
    }

    

    render() {

        return (
            <>
                <div data-test="datatable-select" className="dataTables_length bs-select">
                    <label> Show  
                        {/* <select className="custom-select custom-select-sm form-control form-control-sm"> */}
                        <select 
                        className="browser-default w-75 custom-select filtered" 
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