import React from "react";

import {
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import FlatCards from "./components__test/FlatCards";
import ElevatedCards from "./components__test/ElevatedCards";
import FancyCard from "./components__test/FancyCard";
import ActionCard from "./components__test/ActionCard";
import ContactList from "./components__test/ContactList";

function AppPro(): JSX.Element {
    // const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>App </Text>
                <FlatCards />
                <ElevatedCards />
                <FancyCard />
                <FancyCard />
                <ActionCard />
                <ContactList />
            </ScrollView>
        </SafeAreaView>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     whiteText: {
//         color: '#FFFFFF'
//     },
//     darkText: {
//         color: '#000000'
//     }
// })

export default AppPro;