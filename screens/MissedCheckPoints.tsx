import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import List from '../components/List'
import Header from '../components/Header'
import { NavigationProp } from '@react-navigation/native'

type MissedCheckPointsProp = {
    navigation: NavigationProp<any, any>
}

export default function MissedCheckPoints({ navigation}: MissedCheckPointsProp) {
    const data1 = [
        { id: 1, title: "Round 1", description: 'Front Gate' },
        { id: 2, title: "Round 2", description: 'Front Gate' },
        { id: 3, title: "Round 3", description: 'Front Gate' },
    ]
    return (
        <SafeAreaView>
            <Header title='Missed Check Points' src='' navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Text style={styles.heading}>Today</Text>
                    {data1.map((item, i) => (
                        <List key={i} title={item.title} description={item.description} />
                    ))}
                    <Text style={styles.heading}>Yesterday</Text>
                    {data1.map((item, i) => (
                        <List key={i} title={item.title} description={item.description} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'relative'
    },
    scrollViewContent: {
        paddingTop: 100, // To provide space below the header
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    heading: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
})