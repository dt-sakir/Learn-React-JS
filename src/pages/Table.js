import React, { Component } from 'react';
import BootstrapTableNext from '../components/tables/BootstrapTableNext';
import Breadcrumb from "../components/Breadcrumb";

class Table extends Component {
    render() {
        return (
            <div>
                <Breadcrumb title={'Table page'}/>
                <h1>BootstrapTableNext</h1>
                <BootstrapTableNext/>
                <hr/>
                
            </div>
        );
    }
}

export default Table;