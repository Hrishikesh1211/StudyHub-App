import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";

const BlackThemeMembership = () => {

  	return (
    		<View style={styles.blackThemeMembership}>
      			<View style={styles.getStartedWrapper}>
        				<Text style={[styles.getStarted, styles.basic5moLayout]}>Get Started</Text>
      			</View>
      			<Text style={[styles.chooseYourPlan, styles.basic5moFlexBox]}>{`Choose Your

      			Plan`}</Text>
    		<Pressable style={styles.arrowBack} onPress={()=>{}}>
      			<Image style={styles.icon} resizeMode="cover" source="arrow_back.png" />
    		</Pressable>
    		<View style={[styles.ellipseParent, styles.ellipseLayout]}>
      			<Image style={[styles.frameChild, styles.frameLayout]} resizeMode="cover" source="Ellipse 15.png" />
      			<Text style={[styles.text, styles.textLayout]}>1</Text>
      			<View style={[styles.frameItem, styles.frameItemLayout]} />
      			<Text style={[styles.basic5mo, styles.basic5moTypo]}>Basic - $5/mo</Text>
      			<Text style={[styles.removedPopupAds, styles.removedLayout]}>{`removed popup ads
        				more file space`}</Text>
    		</View>
    		<View style={[styles.ellipseGroup, styles.ellipseLayout]}>
      			<Image style={[styles.frameInner, styles.frameLayout]} resizeMode="cover" source="Ellipse 16.png" />
      			<Text style={[styles.text1, styles.textLayout]}>2</Text>
      			<View style={[styles.rectangleView, styles.frameItemLayout]} />
      			<Text style={[styles.intermediate10mo, styles.intermediate10moTypo]}>Intermediate  - $10/mo</Text>
      			<Text style={[styles.removedPopupAds1, styles.intermediate10moTypo]}>{`removed popup ads
        				even more file space`}</Text>
      			<Image style={[styles.checkIcon, styles.textLayout]} resizeMode="cover" source="check.png" />
    		</View>
  	</View>);
};

const styles = StyleSheet.create({
basic5moLayout: {
  	height: 21,
  	fontSize: 15
},
basic5moFlexBox: {
  	alignItems: "center",
  	display: "flex",
  	color: "#fff"
},
ellipseLayout: {
  	height: 101,
  	width: 316,
  	backgroundColor: "#5a5858",
  	borderRadius: 20,
  	left: 57,
  	position: "absolute",
  	overflow: "hidden"
},
frameLayout: {
  	height: 40,
  	width: 40,
  	top: 31,
  	position: "absolute"
},
textLayout: {
  	height: 22,
  	width: 22,
  	top: 40,
  	position: "absolute"
},
frameItemLayout: {
  	height: 20,
  	width: 20,
  	borderWidth: 1,
  	borderColor: "#0cca6e",
  	borderStyle: "solid",
  	borderRadius: 10,
  	position: "absolute"
},
basic5moTypo: {
  	textAlign: "left",
  	left: 60,
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	lineHeight: 22,
  	letterSpacing: 0,
  	position: "absolute"
},
removedLayout: {
  	width: 180,
  	color: "#bdbdbd",
  	fontSize: 12
},
intermediate10moTypo: {
  	left: 65,
  	textAlign: "left",
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	lineHeight: 22,
  	letterSpacing: 0,
  	position: "absolute"
},
getStarted: {
  	top: 18,
  	left: 28,
  	width: 173,
  	textAlign: "center",
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	lineHeight: 22,
  	color: "#fff",
  	letterSpacing: 0,
  	position: "absolute"
},
getStartedWrapper: {
  	top: 581,
  	left: 100,
  	shadowColor: "rgba(0, 0, 0, 0.25)",
  	shadowOffset: {
    		width: 0,
    		height: 4
  	},
  	shadowRadius: 4,
  	elevation: 4,
  	shadowOpacity: 1,
  	borderRadius: 40,
  	backgroundColor: "#0aa55a",
  	width: 230,
  	height: 58,
  	position: "absolute",
  	overflow: "hidden"
},
chooseYourPlan: {
  	top: 20,
  	left: 77,
  	fontSize: 40,
  	letterSpacing: 1,
  	justifyContent: "center",
  	width: 276,
  	height: 152,
  	textAlign: "center",
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	lineHeight: 22,
  	display: "flex",
  	position: "absolute"
},
icon: {
  	height: "100%",
  	width: "100%"
},
arrowBack: {
  	left: 29,
  	top: 72,
  	width: 24,
  	height: 24,
  	position: "absolute"
},
frameChild: {
  	left: 14
},
text: {
  	left: 23,
  	textAlign: "center",
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	lineHeight: 22,
  	color: "#fff",
  	letterSpacing: 0,
  	fontSize: 15,
  	height: 22,
  	width: 22,
  	top: 40
},
frameItem: {
  	top: 42,
  	left: 263
},
basic5mo: {
  	top: 15,
  	width: 131,
  	alignItems: "center",
  	display: "flex",
  	color: "#fff",
  	height: 21,
  	fontSize: 15
},
removedPopupAds: {
  	top: 36,
  	height: 50,
  	textAlign: "left",
  	left: 60,
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	lineHeight: 22,
  	letterSpacing: 0,
  	position: "absolute"
},
ellipseParent: {
  	top: 227
},
frameInner: {
  	left: 18
},
text1: {
  	left: 27,
  	textAlign: "center",
  	fontFamily: "Inter-Bold",
  	fontWeight: "700",
  	lineHeight: 22,
  	color: "#fff",
  	letterSpacing: 0,
  	fontSize: 15,
  	height: 22,
  	width: 22,
  	top: 40
},
rectangleView: {
  	top: 41,
  	left: 264,
  	backgroundColor: "#0cca6e"
},
intermediate10mo: {
  	top: 10,
  	width: 185,
  	alignItems: "center",
  	display: "flex",
  	color: "#fff",
  	height: 21,
  	fontSize: 15
},
removedPopupAds1: {
  	height: 65,
  	width: 180,
  	color: "#bdbdbd",
  	fontSize: 12,
  	top: 31,
  	left: 65
},
checkIcon: {
  	left: 263
},
ellipseGroup: {
  	top: 399
},
blackThemeMembership: {
  	backgroundColor: "#000",
  	flex: 1,
  	height: 856,
  	overflow: "hidden",
  	width: "100%"
}
});

export default BlackThemeMembership;
