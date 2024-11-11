import * as React from "react";
import {Text, StyleSheet, View, Pressable, Image} from "react-native";

const BlackThemeStartPage = () => {

  	return (
    		<View style={styles.blackThemeStartPage}>
      			<Pressable style={[styles.signUpWrapper, styles.wrapperLayout]} onPress={()=>{}}>
        				<Text style={styles.signUp}>Sign Up</Text>
      			</Pressable>
      			<View style={[styles.iHaveAnAccountWrapper, styles.wrapperLayout]}>
        				<Text style={styles.signUp}>I have an account</Text>
      			</View>
      			<View style={[styles.atSignParent, styles.parentLayout]}>
        				<Image style={[styles.atSignIcon, styles.iconPosition]} resizeMode="cover" source="At sign.png" />
        				<Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      			</View>
      			<View style={[styles.lockParent, styles.parentLayout]}>
        				<Image style={[styles.lockIcon, styles.iconPosition]} resizeMode="cover" source="Lock.png" />
        				<Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      			</View>
      			<Text style={styles.logInWith}>Log In With Social Media</Text>
      			<Text style={styles.studyhub}>StudyHub</Text>
      			<View style={[styles.blackThemeStartPageChild, styles.rectangleViewLayout]} />
      			<View style={[styles.blackThemeStartPageItem, styles.blackLayout]} />
      			<View style={[styles.blackThemeStartPageInner, styles.blackLayout]} />
      			<View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      			<Image style={[styles.socialIcons, styles.socialLayout]} resizeMode="cover" source="Social Icons.png" />
      			<Image style={[styles.socialIcons1, styles.socialLayout]} resizeMode="cover" source="Social Icons.png" />
      			<Image style={[styles.socialIcons2, styles.socialLayout]} resizeMode="cover" source="Social Icons.png" />
      			<Image style={[styles.facebookIcon, styles.socialLayout]} resizeMode="cover" source="Facebook.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	wrapperLayout: {
    		height: 58,
    		width: 230,
    		borderRadius: 40,
    		left: 104,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	parentLayout: {
    		height: 48,
    		width: 316,
    		left: 57,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iconPosition: {
    		height: 24,
    		left: 10,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	usernameTypo: {
    		height: 23,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		color: "#fff",
    		lineHeight: 22,
    		letterSpacing: 0,
    		fontSize: 15,
    		position: "absolute"
  	},
  	rectangleViewLayout: {
    		height: 56,
    		width: 56,
    		backgroundColor: "#000",
    		borderRadius: 20,
    		top: 605,
    		position: "absolute"
  	},
  	blackLayout: {
    		top: 604,
    		height: 56,
    		width: 56,
    		backgroundColor: "#000",
    		borderRadius: 20,
    		position: "absolute"
  	},
  	socialLayout: {
    		height: 40,
    		width: 40,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	signUp: {
    		top: 18,
    		left: 28,
    		fontFamily: "Inter-Bold",
    		width: 173,
    		height: 21,
    		fontSize: 15,
    		textAlign: "center",
    		color: "#fff",
    		fontWeight: "700",
    		lineHeight: 22,
    		letterSpacing: 0,
    		position: "absolute"
  	},
  	signUpWrapper: {
    		top: 714,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		backgroundColor: "#0aa55a"
  	},
  	iHaveAnAccountWrapper: {
    		top: 800,
    		backgroundColor: "#707070"
  	},
  	atSignIcon: {
    		top: 13,
    		width: 28
  	},
  	username: {
    		top: 35,
    		left: 43,
    		width: 258
  	},
  	atSignParent: {
    		top: 447,
    		borderRadius: 11,
    		backgroundColor: "#707070"
  	},
  	lockIcon: {
    		top: 36,
    		width: 24
  	},
  	password: {
    		top: 34,
    		left: 42,
    		width: 265
  	},
  	lockParent: {
    		top: 534,
    		borderRadius: 7,
    		backgroundColor: "#666"
  	},
  	logInWith: {
    		top: 561,
    		width: 255,
    		left: 89,
    		fontFamily: "Inter-Regular",
    		height: 21,
    		textAlign: "center",
    		color: "#fff",
    		lineHeight: 22,
    		letterSpacing: 0,
    		fontSize: 15,
    		position: "absolute"
  	},
  	studyhub: {
    		top: 99,
    		left: 85,
    		fontSize: 40,
    		fontFamily: "InstrumentSans-Bold",
    		display: "flex",
    		alignItems: "center",
    		justifyContent: "center",
    		width: 260,
    		height: 186,
    		textShadowColor: "rgba(0, 0, 0, 0.25)",
    		textShadowOffset: {
      			width: 16,
      			height: 20
    		},
    		textShadowRadius: 0,
    		textAlign: "center",
    		color: "#fff",
    		fontWeight: "700",
    		lineHeight: 22,
    		letterSpacing: 0,
    		position: "absolute"
  	},
  	blackThemeStartPageChild: {
    		left: 81
  	},
  	blackThemeStartPageItem: {
    		left: 152
  	},
  	blackThemeStartPageInner: {
    		left: 229
  	},
  	rectangleView: {
    		left: 301
  	},
  	socialIcons: {
    		left: 161,
    		top: 612,
    		height: 40,
    		width: 40
  	},
  	socialIcons1: {
    		left: 237,
    		top: 612,
    		height: 40,
    		width: 40
  	},
  	socialIcons2: {
    		top: 613,
    		left: 309
  	},
  	facebookIcon: {
    		top: 612,
    		height: 40,
    		width: 40,
    		left: 89
  	},
  	blackThemeStartPage: {
    		backgroundColor: "rgba(0, 0, 0, 0.8)",
    		flex: 1,
    		width: "100%",
    		height: 932,
    		overflow: "hidden"
  	}
});

export default BlackThemeStartPage;
