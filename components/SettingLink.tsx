import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';

interface SettingProp {
    img: 'account' | 'app' | 'privacy' | 'help' | 'logout';
    title: string;
    navigation: NavigationProp<any, any>;
}

const LinksImg: { [key: string]: any } = {
    'account': require('../images/user2.png'),
    'app': require('../images/app.png'),
    'privacy': require('../images/privacy.png'),
    'help': require('../images/help.png'),
    'logout': require('../images/exit.png'),
    'forword': require('../images/front.png'),
}

export default function SettingLink({ img, title, navigation }: SettingProp) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={img == "app" || img == "help" ? styles.row2 : styles.row}>
                <View style={styles.innerBox}>
                    <Image
                        source={LinksImg[img]}
                    />
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <Image
                    source={LinksImg['forword']}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderColor: '#4600B8',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row2: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderColor: '#4600B8',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    innerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25
    },
    titleText: {
        fontSize: 22,
        color: 'black',
        fontWeight: '500'
    }
})