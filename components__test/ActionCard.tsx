import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteUrl: string) {
        Linking.openURL(websiteUrl);
    }
    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Lorem ipsum dolor sit amet.
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2} style={styles.bodyText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus tempora temporibus sint possimus, rerum eaque adipisci itaque pariatur sed fugiat vitae porro optio asperiores minima ullam ipsa, praesentium deserunt!
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        // onPress={() => openWebsite("https://www.blogger.com/about/?bpli=1")}
                    >
                        <Text style={styles.socialLinks}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite("https://github.com/akashpawar43")}
                    >
                        <Text style={styles.socialLinks}>follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    card: {
        margin: 15,
    },
    elevatedCard: {
        backgroundColor: '#0a1012',
        // backgroundColor: '#3b3d631a',
        borderRadius: 10,
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.4
    },
    headingContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e3ebee'
    },
    cardImage: {
        height: 200,
        borderRadius: 8
    },
    bodyContainer: {
        padding: 10
    },
    bodyText: {
        color: '#e3ebee'
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        color: '#e3ebee',
        padding: 15,
        backgroundColor: '#3b3d63',
        borderRadius: 8,
        margin: 14
    }
})