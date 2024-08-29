import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    src: 'history' | 'settings' | '';
    navigation: NavigationProp<any, any>
}

const HeaderImg: { [key: string]: any } = {
    'history': require('../images/history.png'),
    'settings': require('../images/setting.png'),
}

export default function Header({ title, src, navigation }: HeaderProps) {
    return (
        <View style={styles.header}>
            <View style={styles.headContainerOne}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <View>
                {src != "" &&
                    <Image source={HeaderImg[src]} />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#A51EF7',
        paddingVertical: 25,
        paddingLeft: 10,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    headContainerOne: {
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignSelf: 'center'
        alignItems: 'flex-start'
    },
    headerTitle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'right',
    },
})