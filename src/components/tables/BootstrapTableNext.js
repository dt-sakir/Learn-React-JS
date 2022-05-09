import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const products = [ 
    {'id': 1, 'name': 'P 1' }, {'id': 2, 'name': 'P 3' }, {'id': 3, 'name': 'P 3' }
 ];
 
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}];

// export default () =>
//   <BootstrapTable keyField='id' data={ products } columns={ columns } />
  
export default function BootstrapTableNext() {
  return (
    <BootstrapTable 
    keyField='id' 
    data={ products } 
    columns={ columns } 
    striped
    hover
    condensed/>

  )
}
