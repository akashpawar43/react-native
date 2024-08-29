import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'

type HomeProps = {
    navigation: NavigationProp<any, any>
}

export default function Home({ navigation }: HomeProps) {
    return (
        <View>
            <View style={[styles.header, styles.row]}>
                <View style={[styles.row]}>
                    <Image
                        source={require('../images/logo.png')}
                    />
                    <View>
                        <Text style={styles.titleText}>Patrolling</Text>
                        <Text style={styles.titleText}>Master</Text>
                    </View>
                </View>
                <View>
                    <Image
                        source={require('../images/profile.png')}
                    />
                </View>
            </View>

            {/* Overview */}
            <View style={styles.mainContainer}>
                <Text style={styles.mainTitle}>Daily Overview</Text>
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={require('../images/stat.png')}
                        />
                    </View>
                    <View style={[styles.row, styles.rowContainer]}>
                        <TouchableOpacity style={[styles.card, styles.card1]} onPress={() => navigation.navigate("TotalRounds")}>
                            <Text style={[styles.cardText, styles.cardNum]}>24</Text>
                            <View>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>Total</Text>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>Rounds</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.card, styles.card2]} onPress={() => navigation.navigate("MissedCheckPoints")}>
                            <Text style={[styles.cardText, styles.cardNum]}>8</Text>
                            <View>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>Missed</Text>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>CheckPoints</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => {}}> */}
                        <View style={[styles.card, styles.card3]}>
                            <Text style={[styles.cardText, styles.cardNum]}>4</Text>
                            <View>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>Past</Text>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>Rounds</Text>
                            </View>
                        </View>
                        {/* </TouchableOpacity> */}
                    </View>
                </View>
            </View>

            <View style={{margin: 20, marginTop: 10}}>
                <View style={styles.innerContainer}>
                    <View style={[styles.row, styles.rowContainer]}>
                        <View style={[styles.card, styles.cardBlue]}>
                            <Text style={[styles.cardText, styles.cardNum]}>24</Text>
                            <View>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>Incident</Text>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>Reporting</Text>
                            </View>
                        </View>
                        <View style={[styles.card, styles.cardBlue]}>
                            <Text style={[styles.cardText, styles.cardNum]}>8</Text>
                            <View>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>Scan</Text>
                                {/* <Text style={[styles.cardText, styles.cardTextWidth]}>CheckPoints</Text> */}
                            </View>
                        </View>
                        <View style={[styles.card, styles.cardBlue]}>
                            <Text style={[styles.cardText, styles.cardNum]}>4</Text>
                            <View>
                                <Text style={[styles.cardText, styles.cardTextWidth]}>FlashLight</Text>
                                {/* <Text style={[styles.cardText, styles.cardTextWidth]}>Rounds</Text> */}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        color: '#4600B8',
        fontSize: 23,
        fontWeight: '500'
    },
    mainContainer: {
        padding: 20,
        gap: 10
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black'
    },
    innerContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        flexDirection: 'column',
        gap: 15,
        elevation: 5
    },
    rowContainer: {

    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 8,
    },
    cardBlue: {
        backgroundColor: '#A51EF7'
    },
    cardNum: {
        fontSize: 35,
        fontWeight: '500'
    },
    cardText: {
        color: 'white',
        textAlign: 'center'
    },
    cardTextWidth: {
        fontWeight: '500'
    },
    card1: {
        backgroundColor: '#563AFF'
    },
    card2: {
        backgroundColor: '#FF0000'
    },
    card3: {
        backgroundColor: '#20CA98'
    },
})