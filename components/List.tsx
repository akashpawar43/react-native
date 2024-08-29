import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function List({ title, description }: { title: string, description: string }) {
    return (
        <View>
            <View style={[styles.container]}>
                <View style={styles.innerContainer}>
                    <Image source={require('../images/cal.png')} />
                    <Text style={styles.innerText}>{title}</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Image source={require('../images/location.png')} />
                    <Text style={styles.innerText}>{description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    container: {
        gap: 20,
        padding: 20,
        borderRadius: 20,
        marginHorizontal: 20,
        marginBottom: 15,
        backgroundColor: '#D2BBFF47',
        flexDirection: 'column',
    },
    elevation: {
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3
    },
    innerContainer: {
        flexDirection: 'row',
        gap: 20
    },
    innerText: {
        fontSize: 25
    }
})