import React from 'react'
import { View, Text,TextInput, StyleSheet } from 'react-native'
import Sliders from './Sliders'

const AmountContainer = (props) => {

    const [ amountTotal, setAmountTotal ] = React.useState('')

    const setAmount = (value) => {
        if(value == ''){
            setAmountTotal('')
            props.onCalculateCuote('amount', 3)
        }else{
            let isNumber = /^\d+$/.test(value);
            if(isNumber) {
                setAmountTotal(value.toString())
                props.onCalculateCuote('amount', value)
            }
        }
    }
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Text style={{color:'#fff', fontSize:14}}>MONTO TOTAL</Text>
                </View>
                <View style={styles.box2} />
                <View style={styles.box3}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={amountTotal}
                            keyboardType='number-pad'
                            onChangeText={setAmount}
                            style={{width: 100, height:40, color: '#fff', fontSize:14, fontWeight:'bold', textAlign:'center'}}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.sliderContainer}>
                            <Sliders
                                min={5000}
                                max={50000}
                                step={500}
                                value={amountTotal == '' ? 5000 : parseInt(amountTotal)}
                                onChange={setAmount}
                            />
                        </View>
                        <View style={styles.row}>
                            <View style={styles.row1}>
                                <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>$ 5.000</Text>
                            </View>
                            <View style={styles.row2} />
                            <View style={styles.row3}>
                                <Text style={{color:'#fff', fontSize: 16, fontWeight:'bold', marginRight:20}}>$ 50.000</Text>
                            </View>
                        </View>
                    </View>
    )
}

const styles = StyleSheet.create({
    selectorContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    container: {
        flexDirection: 'row',
        paddingTop: 20,
        marginLeft: 10,
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
export default AmountContainer;