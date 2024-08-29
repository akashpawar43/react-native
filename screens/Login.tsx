import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native';

type LoginProps = {
    navigation: NavigationProp<any, any>
}
export default function Login({ navigation }: LoginProps) {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    console.log(userId);

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image
                    source={require('../images/login_svg.png')}
                />
                <Text style={styles.titleText}>Hello !!</Text>
                <Text style={styles.des}>Please Login to continue</Text>
            </View>
            <View style={styles.inputContainer}>
                <View >
                    <TextInput
                        style={styles.inputes}
                        placeholder='User ID'
                        onChangeText={setUserId}
                        value={userId}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.inputes}
                        placeholder='Password'
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>
                <Text style={{ textAlign: 'right', color: 'black' }}>Forgot Password?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("HomeRoute")}>
                <Text style={styles.loginButton}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
    },
    titleText: {
        color: '#A51EF7',
        fontSize: 45,
        fontWeight: 'bold',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 1,
        textAlign: 'center'
    },
    des: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        fontSize: 13
    },
    inputContainer: {
        marginHorizontal: 50,
        gap: 20,
        marginVertical: 28
    },
    inputes: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        shadowColor: '#ewe',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderEndColor: 'white',
        borderRadius: 10,
    },
    loginButton: {
        backgroundColor: '#A51EF7',
        color: 'white',
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginHorizontal: 20,
        marginBottom: 40
    },
})