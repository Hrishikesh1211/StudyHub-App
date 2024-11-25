import * as React from "react";
import {Image, StyleSheet, Text, Pressable, View, FlatList, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";

const homeIcon = require("../../../../../res/icons-mdpi/white_home.png");
const gameIcon = require("../../../../../res/icons-mdpi/white_box.png");
const addIcon = require("../../../../../res/icons-mdpi/green_add_button.png");
const chatIcon = require("../../../../../res/icons-mdpi/white_chat_bubble.png");
const profileIcon = require("../../../../../res/icons-mdpi/white_person.png");

export const MenuBar = () => {
    const nav = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable style={styles.iconContainer} onPress={() => nav.navigate("Home")} accessibilityLabel="Home">
                <Image source={homeIcon} />
                <Text style={styles.iconText}>Home</Text>
            </Pressable>
            <Pressable style={styles.iconContainer} onPress={() => nav.navigate("Games")} accessibilityLabel="Games">
                <Image source={gameIcon} />
                <Text style={styles.iconText}>Games</Text>
            </Pressable>
            <Pressable style={styles.iconContainer} onPress={() => nav.navigate("CreateGroup")} accessibilityLabel="Create Group">
                <Image source={addIcon} />
            </Pressable>
            <Pressable style={styles.iconContainer} onPress={() => nav.navigate("Chats")} accessibilityLabel="Chats">
                <Image source={chatIcon} style={styles.icon} />
                <Text style={styles.iconText}>Chats</Text>
            </Pressable>
            <Pressable style={styles.iconContainer} onPress={() => nav.navigate("Profile")} accessibilityLabel="Profile">
                <Image source={profileIcon} />
                <Text style={styles.iconText}>Profile</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#282828",
        flexDirection: "row",
        justifyContent: "space-around",

        alignItems: "center",
        paddingVertical: 10,
    },
    iconContainer: {
        alignItems: "center",
    },
    iconText: {
        color: "#fff",
        fontSize: 12,
    }

});