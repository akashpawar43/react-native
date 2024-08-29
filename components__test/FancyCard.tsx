import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>FancyCard</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://picsum.photos/seed/picsum/200/300'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Lorem ipsum dolor sit amet.</Text>
                    <Text style={styles.cardLabel}>Lorem ipsum dolor sit amet consectetur.</Text>
                    <Text style={styles.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti.
                    </Text>
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
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        // backgroundColor: '#5670cd'
        backgroundColor: '#cc9da6'
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        elevation: 4,
        shadowOffset: {
            height: 1,
            width: 2
        }
    },
    cardBody: {
        paddingHorizontal: 10,
        paddingBottom: 11
    },
    cardTitle: {
        // color: '#f4f8fb'
        fontWeight: 'bold',
        fontSize: 22
    },
    cardLabel: {
        color: '#f4f8fb',
        fontSize: 15
    },
    cardDescription: {
        color: '#f4f8fb'
    }
})