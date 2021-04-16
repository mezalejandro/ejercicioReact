import React from 'react'
import { View, Text,TextInput, StyleSheet } from 'react-native'
import Sliders from './Sliders'

const MonthContainer = (props) => {

    const [ monthCuote, setMonthCuote ] = React.useState('')

    const setMonth = (value) => {
        if(value == ''){
            setMonthCuote('')
            props.onCalculateCuote('month', 3)
        }else{
            let isNumber = /^\d+$/.test(value);
            if(isNumber) {
                setMonthCuote(value.toString())
                props.onCalculateCuote('month', value)
            }
        }
    }
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Text style={{color:'#fff', fontSize:14, fontWeight: 'bold',marginTop:10}}>PLAZO</Text>
                </View>
                <View style={styles.box2} />
                <View style={styles.box3}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={monthCuote}
                            keyboardType='number-pad'
                            onChangeText={setMonth}
                            style={{width: 100, height:40, color: '#fff', fontSize:18, fontWeight:'bold', textAlign:'center' }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.sliderContainer}>
                    <Sliders
                        min={3}
                        max={24}
                        step={1}
                        onChange={setMonth}
                        value={monthCuote == '' ? 3 : parseInt(monthCuote)}
                    />
            </View>
            <View style={styles.row}>
                <View style={styles.row1}>
                    <Text style={{color:'#fff', fontSize:16, fontWeight:'bold', marginLeft:20}}>3</Text>
                </View>
                <View style={styles.row2} />
                <View style={styles.row3}>
                    <Text style={{color:'#fff', fontSize: 16, fontWeight:'bold', marginRight:20}}>24</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    selectorContainer: {
        marginLeft: 20,
        marginRight: 20
    },
    container: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft:10
    },
    box1: {
        width: '30%', 
        marginLeft:10
    },
    box2: {
        width:'30%'
    },
    box3: {
        width:'10%'
    },
    inputContainer: {
        borderWidth:1, 
        borderColor:'#fff', 
        width:100, 
        height:40
    },
    sliderContainer: {
        marginLeft: 20, 
        marginRight: 20, 
        marginTop: 20
    },
    row: {
        flexDirection: 'row'
    },
    row1: {
        width: '20%',
        marginLeft:20
    },
    row2: {
        width:'50%'
    },
    row3: {
        width:'25%'
    }
})
export default MonthContainer;