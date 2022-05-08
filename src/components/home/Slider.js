import React, {Component} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slider = (
    <AwesomeSlider animation="cubeAnimation">
        <div data-src="https://images.pexels.com/photos/9869132/pexels-photo-9869132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <div data-src="https://images.pexels.com/photos/11083417/pexels-photo-11083417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <div data-src="https://images.pexels.com/photos/11029040/pexels-photo-11029040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </AwesomeSlider>
);

class Slider extends Component {
    render() {
        return (
            <div>
                {slider}
            </div>
        );
    }
}

export default Slider;