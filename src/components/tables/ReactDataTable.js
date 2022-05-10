import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import axios from "axios";

const columns = [
    {
        name: 'Brand',
        selector: row => row.brand,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
    },
    {
        name: 'Price sign',
        selector: row => row.price_sign,
        sortable: true,
    },
];

class ReactDataTable extends Component {
    state = {
        apiData: []
    }

    componentDidMount() {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
            .then(response => {
                console.log(response.data);
                this.setState({ apiData:response.data });
            }).catch(error => {
            console.log(error);
            alert('Something went wrong');
        })
    }

    render() {
        return (
            <div>
                <DataTable
                    title="Google Sheets-esque"
                    columns={columns}
                    data={this.state.apiData}
                    selectableRows
                    dense
                    direction="auto"
                    fixedHeaderScrollHeight="300px"
                    pagination
                    responsive
                    subHeaderAlign="right"
                    subHeaderWrap
                    // customStyles={customStyles}
                    highlightOnHover
                    pointerOnHover
                />
            </div>
        );
    }
}

export default ReactDataTable;