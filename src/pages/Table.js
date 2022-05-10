import React, { Component } from 'react';
import BootstrapTableNext from '../components/tables/BootstrapTableNext';
import Breadcrumb from "../components/Breadcrumb";
import ReactDataTable from "../components/tables/ReactDataTable";

class Table extends Component {
    render() {
        return (
            <div>
                <Breadcrumb title={'Table page'}/>
                <h1>BootstrapTableNext</h1>
                <BootstrapTableNext/>
                <hr/>
                <h1>ReactDatatable</h1>
                <ReactDataTable/>
                <hr/>
                
            </div>
        );
    }
}

export default Table;