import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from "yup";

const formSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required("Required"),
    password: yup.string()
});

export default function TestLogin() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Test Login</Text>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={formSchema}
                onSubmit={values => {
                    console.log(values);
                    setData(values);
                }}
            >
                {({
                    values,
                    isValid,
                    handleChange,
                    handleSubmit
                }) => (
                    <>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputRow}>
                                <Text style={styles.inputText}>Email: </Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={values.email}
                                onChangeText={handleChange("email")}
                                placeholder='Enter Email'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputRow}>
                                <Text style={styles.inputText}>Password: </Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                placeholder='Enter Password'
                            />
                        </View>
                        <TouchableOpacity
                            disabled={!isValid}
                            onPress={() => handleSubmit()}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
            {data.email != "" &&
                <>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{data.email}</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{data.password}</Text>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        // backgroundColor: '#fff', // Optional: adds a background to the form
        backgroundColor: '#fff', // Optional: adds a background to the form
        borderRadius: 10 // Optional: adds rounded corners
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    inputContainer: {
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputRow: {
        width: "40%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    inputText: {
        fontSize: 20,
        width: 120,
        alignItems: 'flex-start',
        textAlign: 'left'
    },
    input: {
        fontSize: 20,
        width: '50%',
        borderBottomWidth: 1, // Optional: Adds an underline to input
        paddingBottom: 5
    },
    button: {
        padding: 15,
        backgroundColor: 'orange',
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '900',
        textAlign: 'center'
    }
});
