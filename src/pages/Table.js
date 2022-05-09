import React, {Component} from 'react';
import axios from 'axios';
import Breadcrumb from "../components/Breadcrumb";

class Table extends Component {
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                // console.log(response.data);
                this.setState({countries: response.data});
            }).catch(error => {
            console.log(error);
            alert('Something went wrong');
        })
    }

    render() {
        return (
            <div>
                <Breadcrumb title={'Table page'}/>
                <ul>
                    {
                        this.state.countries.map(country =>
                            <li>{country.name.common}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Table;