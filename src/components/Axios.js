import React, {Component} from 'react';
import axios from 'axios';

class Axios extends Component {
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                // console.log(response.data);
                this.setState({ countries:response.data });
            }).catch(error => {
            console.log(error);
            alert('Something went wrong');
        })
    }

    render() {
        return (
            <div>
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

export default Axios;