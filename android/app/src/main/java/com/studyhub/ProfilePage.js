import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable} from "react-native";

const BlackThemeProfile = () => {

  	return (
    		<View style={styles.blackThemeProfile}>
      			<View style={[styles.blackThemeProfileChild, styles.personIconPosition1]} />
      			<Image style={styles.personIconPosition1} resizeMode="cover" source="person.png" />
      			<Text style={[styles.profileName, styles.profileNameTypo]}>Profile Name</Text>
      			<Text style={[styles.username, styles.profileTypo]}>@username</Text>
      			<View style={styles.blackThemeProfileItem} />
      			<View style={styles.blackThemeProfileInner} />
      			<Text style={[styles.dfasdfhlskajdfhJskdhfLskjadf, styles.profileNameTypo]}>{`dfasdfhlskajdfh jskdhf lskjadfh ljksdfh lkjasdfh ljaskdfh ljkh
askljdfh laskjdfh lakjsdfh lajskdfh laskjdfh laksjfh lakjsfh
skdjfh lkjsadfh lasjkdfh lkajsdfh lkjasdfh lsakjdfh laskjf
lasdkjfh alsdkjfh lakjsdfh lskajdfh aslkjdfh
      			lasdhflkjsadhf ls.`}</Text>
    		<Text style={[styles.bioDescription, styles.bioDescriptionTypo]}>Bio Description</Text>
    		<Image style={styles.messageSquareIcon} resizeMode="cover" source="Message square.png" />
    		<View style={styles.rectangleView} />
    		<Pressable style={[styles.person, styles.personIconLayout]} onPress={()=>{}}>
      			<Image style={styles.iconLayout1} resizeMode="cover" source="person.png" />
    		</Pressable>
    		<Text style={[styles.profileSettings, styles.bioDescriptionTypo]}>Profile Settings</Text>
    		<Text style={[styles.deviceManagement, styles.signOutTypo]}>Device Management</Text>
    		<Text style={[styles.signOut, styles.signOutTypo]}>Sign Out</Text>
    		<Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
    		<Image style={[styles.personIcon1, styles.personIconLayout]} resizeMode="cover" source="person.png" />
    		<Image style={[styles.personIcon2, styles.personIconLayout]} resizeMode="cover" source="person.png" />
    		<View style={[styles.blackThemeProfileChild1, styles.blackChildLayout1]} />
    		<View style={[styles.blackThemeProfileChild2, styles.blackChildLayout]} />
    		<View style={[styles.blackThemeProfileChild3, styles.blackChildLayout]} />
    		<View style={[styles.blackThemeProfileChild4, styles.blackChildLayout1]} />
    		<Image style={[styles.socialIcons, styles.iconLayout]} resizeMode="cover" source="Social Icons.png" />
    		<Image style={[styles.socialIcons1, styles.iconLayout]} resizeMode="cover" source="Social Icons.png" />
    		<Image style={[styles.socialIcons2, styles.iconLayout]} resizeMode="cover" source="Social Icons.png" />
    		<Image style={[styles.facebookIcon, styles.iconLayout]} resizeMode="cover" source="Facebook.png" />
    		<View style={styles.homeParent}>
      			<Pressable style={[styles.home, styles.iconPosition]} onPress={()=>{}}>
        				<Image style={[styles.icon1, styles.iconLayout1]} resizeMode="cover" source="Home.png" />
      			</Pressable>
      			<Text style={[styles.home1, styles.home1FlexBox]}>Home</Text>
      			<Text style={[styles.games, styles.gamesTypo]}>Games</Text>
      			<Image style={[styles.boxIcon, styles.iconPosition]} resizeMode="cover" source="Box.png" />
      			<Image style={[styles.personIcon3, styles.iconPosition]} resizeMode="cover" source="person.png" />
      			<Text style={[styles.profile1, styles.gamesTypo]}>Profile</Text>
      			<Image style={[styles.chatBubbleIcon, styles.chatsPosition]} resizeMode="cover" source="chat_bubble.png" />
      			<Text style={[styles.chats, styles.chatsPosition]}>Chats</Text>
      			<Image style={[styles.frameChild, styles.iconPosition]} resizeMode="cover" source="Ellipse 3.png" />
      			<Image style={[styles.plusCircleIcon, styles.personIconLayout]} resizeMode="cover" source="Plus circle.png" />
    		</View>
  	</View>);
};

const styles = StyleSheet.create({
personIconPosition1: {
  	height: 100,
  	width: 100,
  	top: 135,
  	left: 164,
  	position: "absolute"
},
profileNameTypo: {
  	textAlign: "center",
  	fontFamily: "Inter-Medium",
  	fontWeight: "500",
  	position: "absolute"
},
profileTypo: {
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	textAlign: "center",
  	position: "absolute"
},
bioDescriptionTypo: {
  	color: "#d9d9d9",
  	fontSize: 13,
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	textAlign: "center",
  	position: "absolute"
},
personIconLayout: {
  	width: 24,
  	height: 24,
  	position: "absolute"
},
signOutTypo: {
  	width: 161,
  	color: "#d9d9d9",
  	fontSize: 13,
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	textAlign: "center",
  	position: "absolute"
},
blackChildLayout1: {
  	height: 56,
  	width: 56,
  	backgroundColor: "#000",
  	borderRadius: 20,
  	top: 313,
  	position: "absolute"
},
blackChildLayout: {
  	top: 312,
  	height: 56,
  	width: 56,
  	backgroundColor: "#000",
  	borderRadius: 20,
  	position: "absolute"
},
iconLayout: {
  	height: 40,
  	width: 40
},
iconPosition: {
  	top: 30,
  	position: "absolute"
},
iconLayout1: {
  	height: "100%",
  	width: "100%"
},
home1FlexBox: {
  	justifyContent: "center",
  	alignItems: "center",
  	display: "flex",
  	letterSpacing: 0,
  	color: "#fff"
},
gamesTypo: {
  	width: 53,
  	fontFamily: "InstrumentSans-Bold",
  	lineHeight: 22,
  	fontSize: 14,
  	fontWeight: "700",
  	textAlign: "center",
  	position: "absolute"
},
chatsPosition: {
  	left: 288,
  	position: "absolute"
},
blackThemeProfileChild: {
  	backgroundColor: "#fff"
},
profileName: {
  	top: 244,
  	left: 142,
  	fontSize: 24,
  	color: "#fff"
},
username: {
  	top: 273,
  	left: 169,
  	fontSize: 16,
  	color: "#7a7878"
},
blackThemeProfileItem: {
  	top: 409,
  	left: 15,
  	borderRadius: 30,
  	backgroundColor: "#131718",
  	width: 400,
  	height: 497,
  	position: "absolute"
},
blackThemeProfileInner: {
  	top: 423,
  	left: 30,
  	borderRadius: 17,
  	backgroundColor: "#162f29",
  	width: 367,
  	height: 180,
  	position: "absolute"
},
dfasdfhlskajdfhJskdhfLskjadf: {
  	top: 501,
  	left: 42,
  	fontSize: 12,
  	color: "#c9c9c9"
},
bioDescription: {
  	left: 60,
  	width: 148,
  	height: 16,
  	top: 445
},
messageSquareIcon: {
  	left: 50,
  	width: 26,
  	height: 19,
  	top: 445,
  	position: "absolute",
  	overflow: "hidden"
},
rectangleView: {
  	top: 693,
  	left: 46,
  	borderRadius: 9,
  	backgroundColor: "#19302a",
  	width: 351,
  	height: 59,
  	position: "absolute"
},
person: {
  	top: 645,
  	height: 24,
  	left: 53,
  	width: 24
},
profileSettings: {
  	top: 650,
  	left: 70,
  	width: 128,
  	height: 20
},
deviceManagement: {
  	top: 716,
  	left: 71,
  	height: 15
},
signOut: {
  	top: 783,
  	left: 41,
  	height: 13
},
profile: {
  	top: 81,
  	left: 16,
  	fontSize: 20,
  	width: 124,
  	height: 23,
  	color: "#fff"
},
personIcon1: {
  	top: 778,
  	height: 24,
  	left: 53,
  	width: 24
},
personIcon2: {
  	top: 711,
  	height: 24,
  	left: 53,
  	width: 24
},
blackThemeProfileChild1: {
  	left: 84
},
blackThemeProfileChild2: {
  	left: 155
},
blackThemeProfileChild3: {
  	left: 232
},
blackThemeProfileChild4: {
  	left: 304
},
socialIcons: {
  	top: 320,
  	width: 40,
  	position: "absolute",
  	overflow: "hidden",
  	left: 164
},
socialIcons1: {
  	left: 240,
  	top: 320,
  	width: 40,
  	position: "absolute",
  	overflow: "hidden"
},
socialIcons2: {
  	top: 321,
  	left: 312,
  	position: "absolute",
  	overflow: "hidden"
},
facebookIcon: {
  	left: 92,
  	top: 320,
  	width: 40,
  	position: "absolute",
  	overflow: "hidden"
},
icon1: {
  	overflow: "hidden"
},
home: {
  	left: 39,
  	height: 40,
  	width: 40
},
home1: {
  	top: 70,
  	left: 26,
  	width: 65,
  	height: 36,
  	fontFamily: "InstrumentSans-Bold",
  	lineHeight: 22,
  	fontSize: 14,
  	fontWeight: "700",
  	textAlign: "center",
  	position: "absolute"
},
games: {
  	top: 75,
  	left: 113,
  	height: 29,
  	justifyContent: "center",
  	alignItems: "center",
  	display: "flex",
  	letterSpacing: 0,
  	color: "#fff"
},
boxIcon: {
  	left: 120,
  	height: 40,
  	width: 40,
  	overflow: "hidden"
},
personIcon3: {
  	left: 353,
  	height: 40,
  	width: 40
},
profile1: {
  	top: 80,
  	left: 348,
  	color: "#0cca6e",
  	height: 24
},
chatBubbleIcon: {
  	top: 33,
  	height: 40,
  	width: 40
},
chats: {
  	top: 79,
  	width: 46,
  	height: 21,
  	fontFamily: "InstrumentSans-Bold",
  	lineHeight: 22,
  	fontSize: 14,
  	fontWeight: "700",
  	textAlign: "center",
  	color: "#fff"
},
frameChild: {
  	left: 185,
  	width: 60,
  	height: 60
},
plusCircleIcon: {
  	top: 49,
  	left: 203,
  	height: 24,
  	overflow: "hidden"
},
homeParent: {
  	top: 894,
  	left: 2,
  	backgroundColor: "#282828",
  	width: 430,
  	height: 122,
  	position: "absolute",
  	overflow: "hidden"
},
blackThemeProfile: {
  	backgroundColor: "#141819",
  	flex: 1,
  	height: 1018,
  	overflow: "hidden",
  	width: "100%"
}
});

export default BlackThemeProfile;