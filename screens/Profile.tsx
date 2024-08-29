import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SettingLink from '../components/SettingLink'
import { NavigationProp } from '@react-navigation/native'

type ProfileProps = {
    navigation: NavigationProp<any, any>
}

export default function Profile({navigation}: ProfileProps) {
  return (
    <>
        <Header title={'Settings'} src={'settings'} navigation={navigation} />
        <View style={styles.container}> 
            <View style={styles.innerContainer}>
                <SettingLink img={'account'} title={'Accounts'} navigation={navigation}/>
                <SettingLink img={'app'} title={'App Updates'} navigation={navigation}/>
                <SettingLink img={'privacy'} title={'Privacy'} navigation={navigation}/>
                <SettingLink img={'help'} title={'Help'} navigation={navigation}/>
                <SettingLink img={'logout'} title={'Logout'} navigation={navigation}/>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 25
    },
    innerContainer: {
        gap: 20
    }
})