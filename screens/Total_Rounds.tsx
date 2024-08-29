import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { NavigationProp } from '@react-navigation/native'

type RoundProp = {
    navigation: NavigationProp<any, any>
}
export default function Total_Rounds({ navigation}: RoundProp) {
    const data = [
        { id: 1, round: "Round 1", time: "12 PM - 1 PM" },
        { id: 2, round: "Round 2", time: "3 PM - 5 PM " },
        { id: 3, round: "Round 3", time: "8 PM - 12 PM" },
    ]
    return (
        <>
            <Header title='Total Rounds' src='' navigation={navigation}/>
            <View style={styles.container}>
                <View style={[styles.innerContainer, styles.elevation]}>
                    {data.map((item, index) => (
                        <View key={index}>
                            <View style={styles.row}>
                                <Image
                                    style={styles.img}
                                    source={require('../images/cal_purple.png')}
                                />
                                <Text style={styles.text}>{item.round}</Text>
                                <Text style={[styles.text, styles.textpurple]}>({item.time})</Text>
                            </View>
                            {index != (data.length - 1) &&
                                <View style={styles.line}></View>
                            }
                        </View>
                    ))}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10
    },
    elevation: {
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10
    },
    row: {
        flexDirection: "row",
        gap: 10,
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingVertical: 15
    },
    img: {
        // width: '10%' 
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    textpurple: {
        color: "#BA98F2"
    },
    line: {
        backgroundColor: 'black',
        height: 1
    },
})