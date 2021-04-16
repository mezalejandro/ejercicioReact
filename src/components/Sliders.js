import React from 'react'
import Slider from '@react-native-community/slider';

const Sliders = (props) => {
    const { min, max, step, value, onChange } = props;
    return (
        <Slider
            style={{width: '100%', height: 40}}
            minimumValue={min}
            maximumValue={max}
            step={step}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor='#fff'
            onValueChange={onChange}
            value={value}
        />
    )
}

export default Sliders;