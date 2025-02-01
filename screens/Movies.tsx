import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { NavigationProp } from '@react-navigation/native';
import List from '../components/List';

interface Movie {
    title: string;
    releaseYear: string;
}

interface MovieResponse {
    movies: Movie[];
}

type HistoryProp = {
    navigation: NavigationProp<any, any>
}

const Movies = ({ navigation }: HistoryProp) => {
    const [data, setaData] = useState<MovieResponse | null>(null);
    const getData = async () => {
        const res = await fetch('https://reactnative.dev/movies.json');
        const json = await res.json();
        console.log("data:", json);
        setaData(json);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <SafeAreaView>
            <Header title='Movies' src='history' navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Text style={styles.heading}>Movies</Text>
                    {data?.movies?.map((item: Movie, index: number) => (
                        <View key={index}>
                            <List title={item.title} description={item.releaseYear} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Movies

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingTop: 100, // To provide space below the header
    },
    heading: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
})