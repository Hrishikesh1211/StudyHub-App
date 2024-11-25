

import firestore from '@react-native-firebase/firestore';

const sendMessageToGroupChat = async (groupId, message) => {
    try {
        await firestore().collection('GroupChats').doc(groupId).collection('Messages').add({
            text: message.text,
            sender: message.sender,
            createdAt: firestore.FieldValue.serverTimestamp(),
        });
        console.log('Message sent successfully!');
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

const fetchGroupChatMessages = (groupId, setMessages) => {
    return firestore()
        .collection('GroupChats')
        .doc(groupId)
        .collection('Messages')
        .orderBy('createdAt', 'asc')
        .onSnapshot((querySnapshot) => {
            const messages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMessages(messages);
        });
};


// Existing content of GroupOpenChat.tsx
import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";

const BlackThemeGroupOpenChat = () => {

  	return (
    		<View style={styles.blackThemeGroupOpenChat}>
      			<View style={[styles.grayEllipseParent, styles.grayEllipseParentPosition]}>
        				<Image style={styles.grayEllipseIcon} resizeMode="cover" source="Gray Ellipse.png" />
        				<Text style={styles.group}>Group</Text>
      			</View>
      			<Image style={[styles.grayEllipseIcon1, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<Pressable style={styles.arrowBack} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="arrow_back.png" />
      			</Pressable>
      			<View style={styles.iphoneKeyboardText}>
        				<View style={[styles.iphoneAlphabetQwerty, styles.iphoneFlexBox]}>
          					<View style={[styles.bottomRow, styles.rowLayout]}>
            						<View style={[styles.keysLetter, styles.keysBg]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>Z</Text>
            						</View>
            						<View style={[styles.keysLetter1, styles.keysShadowBox6]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>X</Text>
            						</View>
            						<View style={[styles.keysLetter2, styles.keysShadowBox5]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>C</Text>
            						</View>
            						<View style={[styles.keysLetter3, styles.keysShadowBox4]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>V</Text>
            						</View>
            						<View style={[styles.keysLetter4, styles.keysShadowBox3]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>B</Text>
            						</View>
            						<View style={[styles.keysLetter5, styles.keysShadowBox2]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>N</Text>
            						</View>
            						<View style={[styles.keysLetter6, styles.keysShadowBox1]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>M</Text>
            						</View>
          					</View>
          					<View style={[styles.middleRow, styles.rowLayout]}>
            						<View style={[styles.keysLetter7, styles.keysBg]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>A</Text>
            						</View>
            						<View style={[styles.keysLetter8, styles.keysShadowBox6]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>S</Text>
            						</View>
            						<View style={[styles.keysLetter9, styles.keysShadowBox5]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>D</Text>
            						</View>
            						<View style={[styles.keysLetter10, styles.keysShadowBox4]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>F</Text>
            						</View>
            						<View style={[styles.keysLetter11, styles.keysShadowBox3]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>G</Text>
            						</View>
            						<View style={[styles.keysLetter12, styles.keysShadowBox2]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>H</Text>
            						</View>
            						<View style={[styles.keysLetter13, styles.keysShadowBox1]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>J</Text>
            						</View>
            						<View style={[styles.keysLetter14, styles.keysBg]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>K</Text>
            						</View>
            						<View style={[styles.keysLetter15, styles.keysBg]}>
              							<Text style={[styles.letter, styles.letterTypo1]}>L</Text>
            						</View>
          					</View>
          					<View style={[styles.topRow, styles.rowLayout]}>
            						<View style={[styles.keysLetter16, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>Q</Text>
            						</View>
            						<View style={[styles.keysLetter17, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>W</Text>
            						</View>
            						<View style={[styles.keysLetter18, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>E</Text>
            						</View>
            						<View style={[styles.keysLetter19, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>R</Text>
            						</View>
            						<View style={[styles.keysLetter20, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>T</Text>
            						</View>
            						<View style={[styles.keysLetter21, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>Y</Text>
            						</View>
            						<View style={[styles.keysLetter22, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>U</Text>
            						</View>
            						<View style={[styles.keysLetter23, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>I</Text>
            						</View>
            						<View style={[styles.keysLetter24, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>O</Text>
            						</View>
            						<View style={[styles.keysLetter25, styles.keysBg]}>
              							<Text style={[styles.letter16, styles.letterTypo1]}>P</Text>
            						</View>
          					</View>
          					<Image style={styles.keysIcon} resizeMode="cover" source="_Keys / Icon.png" />
          					<Image style={styles.keysIcon1} resizeMode="cover" source="_Keys / Icon.png" />
        				</View>
        				<View style={[styles.iphoneControllerPortrait, styles.iphoneFlexBox]}>
          					<View style={styles.homeIndicator} />
          					<Image style={[styles.micIcon, styles.iconPosition]} resizeMode="cover" source="Mic.png" />
          					<Image style={[styles.emojisIcon, styles.iconPosition]} resizeMode="cover" source="Emojis.png" />
          					<View style={[styles.keysLabel, styles.keysShadowBox]}>
            						<Text style={[styles.letter26, styles.letterTypo]}>space</Text>
          					</View>
          					<View style={[styles.keysLabel1, styles.keysLayout]}>
            						<Text style={[styles.letter27, styles.keysLayout]}>return</Text>
          					</View>
          					<View style={[styles.keysLabel2, styles.keysLayout]}>
            						<Text style={[styles.letter27, styles.keysLayout]}>123</Text>
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.blackThemeGroupOpenChatChild, styles.grayEllipseParentPosition]} resizeMode="cover" source="Frame 13.png" />
      			<View style={[styles.messageParent, styles.messageParentLayout]}>
        				<Text style={[styles.message, styles.messageTypo]}>message</Text>
        				<Text style={[styles.pm, styles.pmTypo]}>11:15pm</Text>
      			</View>
      			<Image style={[styles.grayEllipseIcon2, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<View style={[styles.messageGroup, styles.messageParentLayout]}>
        				<Text style={[styles.message, styles.messageTypo]}>message</Text>
        				<Text style={[styles.pm, styles.pmTypo]}>11:15pm</Text>
      			</View>
      			<Image style={[styles.grayEllipseIcon3, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<View style={[styles.messageContainer, styles.messageParentLayout]}>
        				<Text style={[styles.message, styles.messageTypo]}>message</Text>
        				<Text style={[styles.pm, styles.pmTypo]}>11:15pm</Text>
      			</View>
      			<View style={[styles.responseParent, styles.messageParentLayout]}>
        				<Text style={[styles.response, styles.messageTypo]}>{`response `}</Text>
        				<Text style={[styles.pm3, styles.pmTypo]}>11:15pm</Text>
      			</View>
      			<Text style={[styles.johnMan, styles.johnTypo]}>John Man</Text>
      			<Text style={[styles.josephine, styles.johnTypo]}>{`Josephine `}</Text>
      			<Text style={[styles.bobJohn, styles.johnTypo]}>Bob John</Text>
      			<Text style={[styles.you, styles.johnTypo]}>You</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	grayEllipseParentPosition: {
    		width: 398,
    		left: 0,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	grayIconLayout: {
    		height: 30,
    		width: 30,
    		left: 6,
    		position: "absolute"
  	},
  	iphoneFlexBox: {
    		alignSelf: "stretch",
    		overflow: "hidden"
  	},
  	rowLayout: {
    		height: 43,
    		position: "absolute"
  	},
  	keysBg: {
    		backgroundColor: "#646464",
    		position: "absolute"
  	},
  	letterTypo1: {
    		fontFamily: "SF Pro Text",
    		fontWeight: "300",
    		textTransform: "uppercase",
    		top: "50%",
    		marginTop: -14.5,
    		textAlign: "center",
    		color: "#fff",
    		fontSize: 24,
    		left: 0,
    		position: "absolute"
  	},
  	keysShadowBox6: {
    		left: 38,
    		backgroundColor: "#646464",
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		height: 43,
    		position: "absolute"
  	},
  	keysShadowBox5: {
    		left: 76,
    		backgroundColor: "#646464",
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		height: 43,
    		position: "absolute"
  	},
  	keysShadowBox4: {
    		left: 114,
    		backgroundColor: "#646464",
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		height: 43,
    		position: "absolute"
  	},
  	keysShadowBox3: {
    		left: 152,
    		backgroundColor: "#646464",
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		height: 43,
    		position: "absolute"
  	},
  	keysShadowBox2: {
    		left: 190,
    		backgroundColor: "#646464",
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		height: 43,
    		position: "absolute"
  	},
  	keysShadowBox1: {
    		left: 228,
    		backgroundColor: "#646464",
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		height: 43,
    		position: "absolute"
  	},
  	iconPosition: {
    		top: 64,
    		height: 42,
    		width: 42,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	keysShadowBox: {
    		top: 3,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		height: 43
  	},
  	letterTypo: {
    		letterSpacing: -0.3,
    		fontSize: 16,
    		marginTop: -9.5,
    		fontFamily: "SF Pro Text",
    		top: "50%",
    		textAlign: "center",
    		color: "#fff",
    		left: 0
  	},
  	keysLayout: {
    		width: 87,
    		position: "absolute"
  	},
  	messageParentLayout: {
    		height: 55,
    		width: 291,
    		borderRadius: 10,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	messageTypo: {
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		fontSize: 12,
    		color: "#fff",
    		position: "absolute"
  	},
  	pmTypo: {
    		height: 15,
    		width: 49,
    		fontFamily: "Inter-Regular",
    		fontSize: 12,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#fff",
    		position: "absolute"
  	},
  	johnTypo: {
    		height: 12,
    		color: "#5a5858",
    		fontFamily: "Inter-Bold",
    		fontSize: 11,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	grayEllipseIcon: {
    		left: 337,
    		width: 48,
    		height: 48,
    		top: 28,
    		position: "absolute"
  	},
  	group: {
    		left: 75,
    		lineHeight: 22,
    		fontFamily: "InstrumentSans-Bold",
    		width: 234,
    		height: 51,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#fff",
    		fontWeight: "700",
    		fontSize: 24,
    		top: 28,
    		position: "absolute"
  	},
  	grayEllipseParent: {
    		top: 1,
    		height: 104,
    		backgroundColor: "#282828",
    		width: 398
  	},
  	grayEllipseIcon1: {
    		top: 148
  	},
  	icon: {
    		height: "100%",
    		width: "100%"
  	},
  	arrowBack: {
    		left: 8,
    		top: 41,
    		width: 24,
    		height: 24,
    		position: "absolute"
  	},
  	letter: {
    		width: 32
  	},
  	keysLetter: {
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43,
    		right: 228,
    		left: 0
  	},
  	keysLetter1: {
    		right: 190
  	},
  	keysLetter2: {
    		right: 152
  	},
  	keysLetter3: {
    		right: 114
  	},
  	keysLetter4: {
    		right: 76
  	},
  	keysLetter5: {
    		right: 38
  	},
  	keysLetter6: {
    		right: 0
  	},
  	bottomRow: {
    		right: 57,
    		left: 58,
    		top: 116,
    		height: 43
  	},
  	keysLetter7: {
    		right: 304,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43,
    		left: 0
  	},
  	keysLetter8: {
    		right: 266
  	},
  	keysLetter9: {
    		right: 228
  	},
  	keysLetter10: {
    		right: 190
  	},
  	keysLetter11: {
    		right: 152
  	},
  	keysLetter12: {
    		right: 114
  	},
  	keysLetter13: {
    		right: 76
  	},
  	keysLetter14: {
    		left: 266,
    		right: 38,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	keysLetter15: {
    		left: 304,
    		right: 0,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	middleRow: {
    		top: 62,
    		right: 17,
    		left: 22
  	},
  	letter16: {
    		width: 31
  	},
  	keysLetter16: {
    		right: 333,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43,
    		left: 0
  	},
  	keysLetter17: {
    		right: 296,
    		left: 37,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	keysLetter18: {
    		right: 259,
    		left: 74,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	keysLetter19: {
    		right: 222,
    		left: 111,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	keysLetter20: {
    		right: 185,
    		left: 148,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	keysLetter21: {
    		right: 148,
    		left: 185,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	keysLetter22: {
    		right: 111,
    		left: 222,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	keysLetter23: {
    		right: 74,
    		left: 259,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	keysLetter24: {
    		right: 37,
    		left: 296,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	keysLetter25: {
    		left: 333,
    		right: 0,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		top: 0,
    		backgroundColor: "#646464",
    		height: 43
  	},
  	topRow: {
    		top: 8,
    		right: 6,
    		left: 5
  	},
  	keysIcon: {
    		width: 42,
    		left: 3,
    		borderRadius: 5,
    		height: 43,
    		top: 116,
    		position: "absolute"
  	},
  	keysIcon1: {
    		height: 42,
    		right: 3,
    		width: 42,
    		borderRadius: 5,
    		top: 116,
    		position: "absolute"
  	},
  	iphoneAlphabetQwerty: {
    		height: 169
  	},
  	homeIndicator: {
    		width: "35.47%",
    		top: 111,
    		right: "32.27%",
    		left: "32.27%",
    		borderRadius: 3,
    		backgroundColor: "#fff",
    		height: 5,
    		position: "absolute"
  	},
  	micIcon: {
    		right: 18
  	},
  	emojisIcon: {
    		left: 18
  	},
  	letter26: {
    		width: 182,
    		position: "absolute"
  	},
  	keysLabel: {
    		right: 97,
    		left: 96,
    		backgroundColor: "#646464",
    		position: "absolute"
  	},
  	letter27: {
    		letterSpacing: -0.3,
    		fontSize: 16,
    		marginTop: -9.5,
    		fontFamily: "SF Pro Text",
    		top: "50%",
    		textAlign: "center",
    		color: "#fff",
    		left: 0
  	},
  	keysLabel1: {
    		backgroundColor: "#0f77f0",
    		top: 3,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		height: 43,
    		right: 3,
    		width: 87
  	},
  	keysLabel2: {
    		backgroundColor: "#3f3f3f",
    		top: 3,
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.3)",
    		height: 43,
    		left: 3,
    		width: 87
  	},
  	iphoneControllerPortrait: {
    		height: 124
  	},
  	iphoneKeyboardText: {
    		top: 537,
    		left: 11,
    		backgroundColor: "rgba(255, 255, 255, 0.4)",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	blackThemeGroupOpenChatChild: {
    		top: 475,
    		height: 62
  	},
  	message: {
    		top: 10,
    		width: 272,
    		height: 27,
    		left: 6,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		fontSize: 12
  	},
  	pm: {
    		top: 37,
    		left: 4
  	},
  	messageParent: {
    		top: 138,
    		left: 44,
    		width: 291,
    		borderRadius: 10,
    		backgroundColor: "#282828"
  	},
  	grayEllipseIcon2: {
    		top: 324
  	},
  	messageGroup: {
    		top: 314,
    		left: 44,
    		width: 291,
    		borderRadius: 10,
    		backgroundColor: "#282828"
  	},
  	grayEllipseIcon3: {
    		top: 397
  	},
  	messageContainer: {
    		top: 387,
    		left: 44,
    		width: 291,
    		borderRadius: 10,
    		backgroundColor: "#282828"
  	},
  	response: {
    		top: 7,
    		left: 9,
    		width: 275,
    		height: 29
  	},
  	pm3: {
    		top: 40,
    		left: 235
  	},
  	responseParent: {
    		top: 226,
    		left: 93,
    		backgroundColor: "#0cca6e"
  	},
  	johnMan: {
    		top: 126,
    		left: 52,
    		width: 61,
    		height: 12,
    		color: "#5a5858",
    		fontFamily: "Inter-Bold",
    		fontSize: 11
  	},
  	josephine: {
    		top: 302,
    		left: 47,
    		width: 61,
    		height: 12,
    		color: "#5a5858",
    		fontFamily: "Inter-Bold",
    		fontSize: 11
  	},
  	bobJohn: {
    		top: 375,
    		left: 46,
    		width: 61,
    		height: 12,
    		color: "#5a5858",
    		fontFamily: "Inter-Bold",
    		fontSize: 11
  	},
  	you: {
    		top: 214,
    		left: 351,
    		width: 29,
    		height: 12,
    		color: "#5a5858",
    		fontFamily: "Inter-Bold",
    		fontSize: 11
  	},
  	blackThemeGroupOpenChat: {
    		backgroundColor: "#141819",
    		flex: 1,
    		height: 830,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default BlackThemeGroupOpenChat;

