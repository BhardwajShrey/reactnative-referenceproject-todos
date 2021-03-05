import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header()
{
    return(
        <View style = {styles.header}>
            <Text style = {styles.title}>My To-dos</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        header: {
            height: 100,
            paddingTop: 60,
            backgroundColor: "coral"
        },
        title: {
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold"
        }
    }
);