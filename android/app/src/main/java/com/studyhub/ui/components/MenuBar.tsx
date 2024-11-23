import * as React from "react";
import {Image, StyleSheet, Text, Pressable, View, FlatList, ImageBackground} from "react-native";
import {useNavigation} from "@react-navigation/native";
const homeIcon = require("../../../../../res/icons-mdpi/white_home.png")
const gameIcon = require("../../../../../res/icons-mdpi/white_box.png")
const addIcon = require("../../../../../res/icons-mdpi/green_add_button.png")
const chatIcon = require("../../../../../res/icons-mdpi/white_chat_bubble.png")
const profileIcon = require("../../../../../res/icons-mdpi/white_person.png")

export const MenuBar = () => {
    const nav = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable style={styles.homeIcon} onPress={() => {
                nav.navigate("Home")
            }}>
                <Image source={homeIcon}/>
                <Text>Home</Text>
            </Pressable>
            <Pressable style={styles.gameIcon}>
                <Image source={gameIcon}/>
                <Text>Games</Text>
            </Pressable>
            <Pressable style={styles.groupIcon} onPress={() => {
                nav.navigate("CreateGroup")
            }}>
                <Image source={addIcon}/>
            </Pressable>
            <Pressable style={styles.chatIcon} onPress={() => {
                nav.navigate("Chats")
            }}>
                <Image source={chatIcon}/>
                <Text>Chats</Text>
            </Pressable>
            <Pressable style={styles.profileIcon} onPress={() => {
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
        alignItems: "center",
//         justifyContent: "space-between"
     },
     ImageBackground: {
//        flex: 1,
       resizeMode: "cover",
       width: "100%",
       alignItems: "center",
     },
    homeIcon: {
        left: 30
    },
    gameIcon: {
        left: 60
    },
    groupIcon: {
        left: 90
    },
    chatIcon: {
        left: 120
    },
    profileIcon: {
        left: 150
    }
});