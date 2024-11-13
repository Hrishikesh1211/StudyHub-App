import * as React from "react";
import {Image, StyleSheet, Text, Pressable, View, FlatList, ImageBackground} from "react-native";
import {useNavigation} from "@react-navigation/native";
const homeIcon = require("../../../../../res/icons/white_home.png")
const gameIcon = require("../../../../../res/icons/white_box.png")
const addIcon = require("../../../../../res/icons/green_add_button.png")
const chatIcon = require("../../../../../res/icons/white_chat_bubble.png")
const profileIcon = require("../../../../../res/icons/white_person.png")

export const MenuBar = () => {
    const nav = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                nav.navigate("Home")
            }}>
                <Image source={homeIcon}/>
                <Text>Home</Text>
            </Pressable>
            <Pressable>
                <Image source={gameIcon}/>
                <Text>Games</Text>
            </Pressable>
            <Pressable onPress={() => {
                nav.navigate("CreateGroup")
            }}>
                <Image source={addIcon}/>
            </Pressable>
            <Pressable onPress={() => {
                nav.navigate("Chats")
            }}>
                <Image source={chatIcon}/>
                <Text>Chats</Text>
            </Pressable>
            <Pressable onPress={() => {
                nav.navigate("Profile")
            }}>
                <Image source={profileIcon}/>
                <Text>Profile</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
     container: {
//        flex: 1,

    	backgroundColor: "#282828",
        flexDirection: "row",
        backgroundColor: "#282828",
        alignItems: "center"
     },
     ImageBackground: {
//        flex: 1,
       resizeMode: "cover",
       width: "100%",
       alignItems: "center",
     },
});