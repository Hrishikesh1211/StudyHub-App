import * as React from "react";
import {Text, StyleSheet, Image, Pressable, View} from "react-native";

const BlackThemeSingleChats = () => {

  	return (
    		<View style={styles.blackThemeSingleChats}>
      			<Text style={styles.chats}>Chats</Text>
      			<View style={styles.homeParent}>
        				<Image style={[styles.homeIcon, styles.iconLayout]} resizeMode="cover" source="Home.png" />
        				<Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
        				<Text style={[styles.games, styles.gamesTypo]}>Games</Text>
        				<Image style={[styles.boxIcon, styles.iconLayout]} resizeMode="cover" source="Box.png" />
        				<Pressable style={[styles.person, styles.iconLayout]} onPress={()=>{}}>
          					<Image style={styles.icon} resizeMode="cover" source="person.png" />
        				</Pressable>
        				<Text style={[styles.profile, styles.profileLayout]}>Profile</Text>
        				<Image style={[styles.chatBubbleIcon, styles.iconLayout]} resizeMode="cover" source="chat_bubble.png" />
        				<Text style={[styles.chats1, styles.homeTypo]}>Chats</Text>
        				<Image style={styles.frameChild} resizeMode="cover" source="Ellipse 3.png" />
        				<Image style={[styles.plusCircleIcon, styles.profileLayout]} resizeMode="cover" source="Plus circle.png" />
      			</View>
      			<Pressable style={[styles.johnManParent, styles.johnParentLayout]} onPress={()=>{}}>
        				<Text style={[styles.johnMan, styles.johnManTypo]}>John Man</Text>
        				<Image style={styles.frameItem} resizeMode="cover" source="Ellipse 9.png" />
        				<Image style={[styles.frameInner, styles.frameInnerLayout]} resizeMode="cover" source="Ellipse 10.png" />
        				<Text style={[styles.lastMessageSent, styles.johnManTypo]}>last message sent by other</Text>
      			</Pressable>
      			<View style={[styles.manJohnParent, styles.johnParentLayout]}>
        				<Text style={[styles.johnMan, styles.johnManTypo]}>Man John</Text>
        				<Image style={styles.frameItem} resizeMode="cover" source="Ellipse 9.png" />
        				<Image style={[styles.frameInner, styles.frameInnerLayout]} resizeMode="cover" source="Ellipse 10.png" />
        				<Text style={[styles.lastMessageSent, styles.johnManTypo]}>last message sent by other</Text>
      			</View>
      			<Image style={[styles.blackThemeSingleChatsChild, styles.frameInnerLayout]} resizeMode="cover" source="Frame 11.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	iconLayout: {
    		height: 40,
    		width: 40,
    		position: "absolute"
  	},
  	homeFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0,
    		position: "absolute"
  	},
  	gamesTypo: {
    		width: 53,
    		fontFamily: "InstrumentSans-Bold",
    		lineHeight: 22,
    		fontSize: 14,
    		textAlign: "center",
    		color: "#fff",
    		fontWeight: "700"
  	},
  	profileLayout: {
    		height: 24,
    		position: "absolute"
  	},
  	homeTypo: {
    		fontFamily: "InstrumentSans-Bold",
    		lineHeight: 22,
    		fontSize: 14,
    		textAlign: "center",
    		fontWeight: "700"
  	},
  	johnParentLayout: {
    		height: 104,
    		width: 391,
    		borderRadius: 20,
    		left: 19,
    		backgroundColor: "#282828",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	johnManTypo: {
    		height: 28,
    		textAlign: "left",
    		left: 76,
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "InstrumentSans-Bold",
    		lineHeight: 22,
    		fontWeight: "700",
    		position: "absolute"
  	},
  	frameInnerLayout: {
    		width: 56,
    		position: "absolute"
  	},
  	chats: {
    		left: 16,
    		fontSize: 20,
    		fontFamily: "Inter-Bold",
    		width: 124,
    		height: 23,
    		textAlign: "center",
    		fontWeight: "700",
    		color: "#fff",
    		top: 81,
    		position: "absolute"
  	},
  	homeIcon: {
    		left: 39,
    		top: 30,
    		overflow: "hidden"
  	},
  	home: {
    		top: 70,
    		left: 26,
    		width: 65,
    		height: 36,
    		fontFamily: "InstrumentSans-Bold",
    		lineHeight: 22,
    		fontSize: 14,
    		textAlign: "center",
    		fontWeight: "700",
    		color: "#fff",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0
  	},
  	games: {
    		top: 75,
    		left: 113,
    		height: 29,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0,
    		position: "absolute"
  	},
  	boxIcon: {
    		left: 120,
    		top: 30,
    		overflow: "hidden"
  	},
  	icon: {
    		height: "100%",
    		width: "100%"
  	},
  	person: {
    		left: 353,
    		top: 30
  	},
  	profile: {
    		top: 80,
    		left: 348,
    		width: 53,
    		fontFamily: "InstrumentSans-Bold",
    		lineHeight: 22,
    		fontSize: 14,
    		textAlign: "center",
    		color: "#fff",
    		fontWeight: "700"
  	},
  	chatBubbleIcon: {
    		top: 33,
    		left: 288
  	},
  	chats1: {
    		left: 282,
    		color: "#0cca6e",
    		width: 46,
    		height: 21,
    		fontFamily: "InstrumentSans-Bold",
    		lineHeight: 22,
    		top: 81,
    		position: "absolute"
  	},
  	frameChild: {
    		left: 185,
    		width: 60,
    		height: 60,
    		top: 30,
    		position: "absolute"
  	},
  	plusCircleIcon: {
    		top: 49,
    		left: 203,
    		width: 24,
    		overflow: "hidden"
  	},
  	homeParent: {
    		top: 894,
    		left: 2,
    		width: 430,
    		height: 122,
    		backgroundColor: "#282828",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	johnMan: {
    		top: 18,
    		width: 147,
    		fontSize: 14,
    		height: 28,
    		textAlign: "left",
    		left: 76,
    		color: "#fff"
  	},
  	frameItem: {
    		top: 46,
    		left: 343,
    		width: 16,
    		height: 16,
    		position: "absolute"
  	},
  	frameInner: {
    		top: 24,
    		left: 12,
    		height: 56
  	},
  	lastMessageSent: {
    		top: 38,
    		fontSize: 12,
    		color: "#868686",
    		width: 227
  	},
  	johnManParent: {
    		top: 152
  	},
  	manJohnParent: {
    		top: 274
  	},
  	blackThemeSingleChatsChild: {
    		top: 66,
    		left: 342,
    		borderRadius: 10,
    		height: 53,
    		overflow: "hidden"
  	},
  	blackThemeSingleChats: {
    		backgroundColor: "#141819",
    		flex: 1,
    		height: 1018,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default BlackThemeSingleChats;
