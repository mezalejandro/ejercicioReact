import React from 'react'
import {  View, Text, TextInput, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import AmountSelector from './components/Amount'
import MonthSelector from './components/Month'

const App = () => {

    const [ amountTotal, setAmountTotal ] = React.useState('')
    const [ monthCoute, setMonthCoute ] = React.useState('')
    const [ price, setPrice ] = React.useState(0)

    const calculateCuote = (type, value) => {
        if(type == 'amount') {
            setAmountTotal( value)
        }
        if(type == 'month') {
            setMonthCoute( value)
        }
        setPrice(( amountTotal / monthCoute))
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={{color:'#fff', textAlign:'center', fontWeight:'bold', marginTop:20, fontSize:20}}>Simulá tu crédito</Text>
                    <AmountSelector onCalculateCuote={calculateCuote} />
                    <MonthSelector onCalculateCuote={calculateCuote}/>
                    <View style={{marginTop:40, marginLeft:20}}>
                        <View style={{flexDirection:'row',backgroundColor: '#003b67', borderColor:'red', marginLeft: 10, marginRight: 10 }}>
                            <View style={{width:'60%'}}>
                                <Text style={{color: '#fff', fontWeight:'bold', fontSize: 17}}>COUTA FIJA POR MES</Text>
                            </View>
                            <View style={{width:'30%'}}>
                                <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>$ {price.toFixed(2)}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',backgroundColor: '#003b67',marginTop:10,marginLeft: 10, marginRight: 10 }}>
                            <View style={{width:'60%', height:50, backgroundColor: '#17aa8d'}}>
                                <Text style={{color: '#fff', fontWeight:'bold', textAlignVertical:'center', marginTop:10, textAlign:'center', fontSize: 17}}>OBTENÉ CRÉDITO</Text>
                            </View>
                            <View style={{width:'40%', height:50, backgroundColor: '#0b548b'}}>
                                <Text style={{color: '#fff', fontWeight:'bold', textAlignVertical:'center', marginTop:10, textAlign:'center', fontSize: 15}} numberOfLines={2}>VER DETALLE CUOTA</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#084e82',
        flex: 1,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    subContainer: {
        backgroundColor: '#003b67',
        flex: 1,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    },
    content: {
        paddingTop: 20
    }
})

export default App;