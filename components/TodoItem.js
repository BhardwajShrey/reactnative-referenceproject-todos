import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

export default function TodoItem({item, pressHandler}) //or use props without destructuring
{
    return(
        <TouchableOpacity onPress = {() => pressHandler(item.key)}>
            <View style = {styles.item}>
                <MaterialIcons name = "delete" size = {18} colour = "#333" />
                <Text style = {styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create(
    {
        item: {
            padding: 16,
            marginTop: 16,
            marginRight: 30,
            borderColor: "#bbb",
            borderWidth: 1,
            borderStyle: "dashed",
            borderRadius: 10,
            flexDirection: "row"
        },
        itemText: {
            marginLeft: 10
        }
    }
);