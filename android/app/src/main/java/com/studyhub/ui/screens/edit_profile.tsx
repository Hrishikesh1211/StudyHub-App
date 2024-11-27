

import firestore from '@react-native-firebase/firestore';

const updateUserProfile = async (userId, profileData) => {
    try {
        await firestore().collection('Users').doc(userId).update(profileData);
        console.log('Profile updated successfully!');
    } catch (error) {
        console.error('Error updating profile:', error);
    }
};


// Existing content of EditProfile.tsx
import * as React from "react";
import {ScrollView, Image, StyleSheet, Text, View, Pressable} from "react-native";

const BlackThemeEditProfile = () => {

  	return (
    		<ScrollView style={styles.blackThemeEditProfile}>
      			<View style={[styles.arrowBackParent, styles.atSignIconPosition]}>
        				<Image style={[styles.arrowBackIcon, styles.listIconLayout]} resizeMode="cover" source="arrow_back.png" />
        				<Image style={styles.grayEllipseIcon} resizeMode="cover" source="Gray Ellipse.png" />
        				<Text style={[styles.profileName, styles.profileTypo]}>Profile Name</Text>
        				<Image style={styles.plusIcon} resizeMode="cover" source="Plus.png" />
      			</View>
      			<View style={[styles.arrowBackParent, styles.atSignIconPosition]}>
        				<Pressable style={[styles.arrowBackIcon, styles.listIconLayout]} onPress={()=>{}}>
          					<Image style={styles.icon} resizeMode="cover" source="arrow_back.png" />
        				</Pressable>
        				<Image style={styles.grayEllipseIcon} resizeMode="cover" source="Ellipse 4.png" />
        				<Text style={[styles.profileName, styles.profileTypo]}>Profile Name</Text>
        				<Image style={styles.plusIcon} resizeMode="cover" source="Plus.png" />
      			</View>
      			<Text style={[styles.profileSettings, styles.listIconPosition]}>Profile Settings</Text>
      			<Text style={[styles.profileInfo, styles.securityTypo]}>Profile info</Text>
      			<Text style={[styles.profileInfo, styles.securityTypo]}>Profile info</Text>
      			<Image style={[styles.listIcon, styles.listIconPosition]} resizeMode="cover" source="list.png" />
      			<Image style={[styles.listIcon, styles.listIconPosition]} resizeMode="cover" source="list.png" />
      			<Text style={[styles.security, styles.securityTypo]}>Security</Text>
      			<Text style={[styles.security, styles.securityTypo]}>Security</Text>
      			<Image style={[styles.listIcon2, styles.blackChildPosition1]} resizeMode="cover" source="list.png" />
      			<Image style={[styles.listIcon2, styles.blackChildPosition1]} resizeMode="cover" source="list.png" />
      			<Text style={[styles.fullName, styles.emailTypo]}>Full Name</Text>
      			<Text style={[styles.fullName, styles.emailTypo]}>Full Name</Text>
      			<View style={[styles.blackThemeEditProfileChild, styles.blackChildLayout3]} />
      			<View style={[styles.blackThemeEditProfileChild, styles.blackChildLayout3]} />
      			<Image style={[styles.personIcon, styles.listIconLayout]} resizeMode="cover" source="person.png" />
      			<Image style={[styles.personIcon, styles.listIconLayout]} resizeMode="cover" source="person.png" />
      			<Text style={[styles.fullName2, styles.email2Typo]}>Full Name</Text>
      			<Text style={[styles.fullName2, styles.email2Typo]}>Full Name</Text>
      			<Text style={[styles.username, styles.emailTypo]}>Username</Text>
      			<Text style={[styles.username, styles.emailTypo]}>Username</Text>
      			<View style={[styles.blackThemeEditProfileInner, styles.blackChildLayout3]} />
      			<View style={[styles.blackThemeEditProfileInner, styles.blackChildLayout3]} />
      			<Text style={[styles.username2, styles.email2Typo]}>Username</Text>
      			<Text style={[styles.username2, styles.email2Typo]}>Username</Text>
      			<View style={styles.blackThemeEditProfileChild1} />
      			<View style={styles.blackThemeEditProfileChild1} />
      			<Text style={styles.profileBio}>Profile Bio</Text>
      			<Text style={styles.profileBio}>Profile Bio</Text>
      			<Text style={[styles.email, styles.emailTypo]}>Email</Text>
      			<Text style={[styles.email, styles.emailTypo]}>Email</Text>
      			<Text style={[styles.membership, styles.membershipTypo]}>Membership</Text>
      			<Text style={[styles.membership, styles.membershipTypo]}>Membership</Text>
      			<View style={[styles.blackThemeEditProfileChild3, styles.blackChildLayout3]} />
      			<View style={[styles.blackThemeEditProfileChild3, styles.blackChildLayout3]} />
      			<Text style={[styles.email2, styles.email2Typo]}>Email</Text>
      			<Text style={[styles.email2, styles.email2Typo]}>Email</Text>
      			<Image style={[styles.atSignIcon, styles.listIconLayout]} resizeMode="cover" source="At sign.png" />
      			<Image style={[styles.atSignIcon, styles.listIconLayout]} resizeMode="cover" source="At sign.png" />
      			<Image style={[styles.mailIcon, styles.listIconLayout]} resizeMode="cover" source="mail.png" />
      			<Image style={[styles.mailIcon, styles.listIconLayout]} resizeMode="cover" source="mail.png" />
      			<Text style={[styles.linkSocialMedia, styles.blackChildPosition1]}>Link Social Media</Text>
      			<Text style={[styles.linkSocialMedia, styles.blackChildPosition1]}>Link Social Media</Text>
      			<Text style={[styles.phoneNumber, styles.blackChildPosition]}>Phone Number</Text>
      			<Text style={[styles.phoneNumber, styles.blackChildPosition]}>Phone Number</Text>
      			<View style={[styles.blackThemeEditProfileChild5, styles.blackChildPosition]} />
      			<View style={[styles.blackThemeEditProfileChild5, styles.blackChildPosition]} />
      			<Text style={[styles.email4, styles.email4Typo]}>Email</Text>
      			<Text style={[styles.email4, styles.email4Typo]}>Email</Text>
      			<Image style={[styles.mailIcon2, styles.listIconLayout]} resizeMode="cover" source="mail.png" />
      			<Image style={[styles.mailIcon2, styles.listIconLayout]} resizeMode="cover" source="mail.png" />
      			<View style={[styles.blackThemeEditProfileChild5, styles.blackChildPosition]} />
      			<View style={[styles.blackThemeEditProfileChild5, styles.blackChildPosition]} />
      			<Text style={[styles.email4, styles.email4Typo]}>Phone Number</Text>
      			<Text style={[styles.email4, styles.email4Typo]}>Phone Number</Text>
      			<Text style={[styles.password, styles.passwordPosition]}>Password</Text>
      			<Text style={[styles.password, styles.passwordPosition]}>Password</Text>
      			<View style={[styles.blackThemeEditProfileChild9, styles.passwordPosition]} />
      			<View style={[styles.blackThemeEditProfileChild9, styles.passwordPosition]} />
      			<Text style={[styles.password2, styles.email2Typo]}>Password</Text>
      			<Text style={[styles.password2, styles.email2Typo]}>Password</Text>
      			<Text style={[styles.confirmPassword, styles.blackChildPosition]}>Confirm Password</Text>
      			<Text style={[styles.confirmPassword, styles.blackChildPosition]}>Confirm Password</Text>
      			<View style={[styles.blackThemeEditProfileChild11, styles.blackChildPosition]} />
      			<View style={[styles.blackThemeEditProfileChild11, styles.blackChildPosition]} />
      			<Text style={[styles.confirmPassword2, styles.email4Typo]}>Confirm Password</Text>
      			<Text style={[styles.confirmPassword2, styles.email4Typo]}>Confirm Password</Text>
      			<Image style={[styles.phoneIcon, styles.lockIconPosition]} resizeMode="cover" source="Phone.png" />
      			<Image style={[styles.phoneIcon, styles.lockIconPosition]} resizeMode="cover" source="Phone.png" />
      			<Image style={[styles.lockIcon, styles.lockIconPosition]} resizeMode="cover" source="Lock.png" />
      			<Image style={[styles.lockIcon, styles.lockIconPosition]} resizeMode="cover" source="Lock.png" />
      			<Image style={[styles.lockIcon2, styles.lockIconPosition]} resizeMode="cover" source="Lock.png" />
      			<Image style={[styles.lockIcon2, styles.lockIconPosition]} resizeMode="cover" source="Lock.png" />
      			<View style={styles.blackThemeEditProfileChild13} />
      			<Pressable style={styles.blackThemeEditProfileChild13} onPress={()=>{}} />
      			<View style={[styles.blackThemeEditProfileChild14, styles.blackChildLayout2]} />
      			<View style={[styles.blackThemeEditProfileChild14, styles.blackChildLayout2]} />
      			<Text style={[styles.buy, styles.buyFlexBox]}>Buy</Text>
      			<Text style={[styles.buy, styles.buyFlexBox]}>Buy</Text>
      			<Text style={[styles.cancel, styles.buyFlexBox]}>Cancel</Text>
      			<Text style={[styles.cancel, styles.buyFlexBox]}>Cancel</Text>
      			<View style={[styles.blackThemeEditProfileChild16, styles.blackChildLayout2]} />
      			<Pressable style={[styles.blackThemeEditProfileChild16, styles.blackChildLayout2]} onPress={()=>{}} />
      			<Text style={[styles.change, styles.buyFlexBox]}>Change</Text>
      			<Text style={[styles.change, styles.buyFlexBox]}>Change</Text>
      			<View style={[styles.blackThemeEditProfileChild18, styles.blackChildLayout1]} />
      			<View style={[styles.blackThemeEditProfileChild18, styles.blackChildLayout1]} />
      			<View style={[styles.blackThemeEditProfileChild20, styles.blackChildLayout]} />
      			<View style={[styles.blackThemeEditProfileChild20, styles.blackChildLayout]} />
      			<View style={[styles.blackThemeEditProfileChild22, styles.blackChildLayout]} />
      			<View style={[styles.blackThemeEditProfileChild22, styles.blackChildLayout]} />
      			<View style={[styles.blackThemeEditProfileChild24, styles.blackChildLayout1]} />
      			<View style={[styles.blackThemeEditProfileChild24, styles.blackChildLayout1]} />
      			<Image style={[styles.socialIcons, styles.socialLayout]} resizeMode="cover" source="Social Icons.png" />
      			<Image style={[styles.socialIcons, styles.socialLayout]} resizeMode="cover" source="Social Icons.png" />
      			<Image style={[styles.socialIcons2, styles.socialLayout]} resizeMode="cover" source="Social Icons.png" />
      			<Image style={[styles.socialIcons2, styles.socialLayout]} resizeMode="cover" source="Social Icons.png" />
      			<Image style={[styles.socialIcons4, styles.socialLayout]} resizeMode="cover" source="Social Icons.png" />
      			<Image style={[styles.socialIcons4, styles.socialLayout]} resizeMode="cover" source="Social Icons.png" />
      			<Image style={[styles.facebookIcon, styles.socialLayout]} resizeMode="cover" source="Facebook.png" />
      			<Image style={[styles.facebookIcon, styles.socialLayout]} resizeMode="cover" source="Facebook.png" />
    		</ScrollView>);
};

const styles = StyleSheet.create({
  	atSignIconPosition: {
    		overflow: "hidden",
    		position: "absolute"
  	},
  	listIconLayout: {
    		height: 24,
    		width: 24
  	},
  	profileTypo: {
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		fontSize: 20
  	},
  	listIconPosition: {
    		left: 21,
    		position: "absolute"
  	},
  	securityTypo: {
    		height: 18,
    		width: 81,
    		fontSize: 15,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	blackChildPosition1: {
    		left: 22,
    		position: "absolute"
  	},
  	emailTypo: {
    		width: 78,
    		fontSize: 15,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		height: 24
  	},
  	blackChildLayout3: {
    		height: 56,
    		width: 365,
    		backgroundColor: "#000",
    		borderRadius: 10
  	},
  	email2Typo: {
    		height: 40,
    		width: 312,
    		alignItems: "center",
    		display: "flex",
    		color: "#5a5858",
    		fontSize: 15,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	membershipTypo: {
    		fontSize: 15,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		height: 24
  	},
  	blackChildPosition: {
    		left: 25,
    		position: "absolute"
  	},
  	email4Typo: {
    		left: 61,
    		height: 40,
    		width: 312,
    		alignItems: "center",
    		display: "flex",
    		color: "#5a5858",
    		fontSize: 15,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	passwordPosition: {
    		left: 23,
    		position: "absolute"
  	},
  	lockIconPosition: {
    		left: 31,
    		height: 24,
    		width: 24,
    		overflow: "hidden",
    		position: "absolute"
  	},
  	blackChildLayout2: {
    		top: 618,
    		height: 42,
    		width: 117,
    		backgroundColor: "#000",
    		borderRadius: 10,
    		position: "absolute"
  	},
  	buyFlexBox: {
    		width: 79,
    		justifyContent: "center",
    		textAlign: "center",
    		top: 623,
    		alignItems: "center",
    		display: "flex",
    		fontSize: 15,
    		height: 30,
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	blackChildLayout1: {
    		width: 56,
    		top: 523,
    		height: 56,
    		backgroundColor: "#000",
    		borderRadius: 20,
    		position: "absolute"
  	},
  	blackChildLayout: {
    		top: 522,
    		width: 56,
    		height: 56,
    		backgroundColor: "#000",
    		borderRadius: 20,
    		position: "absolute"
  	},
  	socialLayout: {
    		width: 40,
    		height: 40,
    		overflow: "hidden",
    		position: "absolute"
  	},
  	arrowBackIcon: {
    		left: 29,
    		width: 24,
    		position: "absolute",
    		top: 32
  	},
  	grayEllipseIcon: {
    		top: 13,
    		left: 79,
    		width: 60,
    		height: 60,
    		position: "absolute"
  	},
  	profileName: {
    		width: 184,
    		height: 35,
    		left: 150,
    		top: 32,
    		position: "absolute"
  	},
  	plusIcon: {
    		top: 28,
    		left: 94,
    		width: 30,
    		height: 30,
    		overflow: "hidden",
    		position: "absolute"
  	},
  	arrowBackParent: {
    		top: 0,
    		left: 0,
    		backgroundColor: "#202c2a",
    		width: 430,
    		height: 96,
    		borderRadius: 20,
    		overflow: "hidden"
  	},
  	icon: {
    		height: "100%",
    		width: "100%"
  	},
  	profileSettings: {
    		top: 116,
    		width: 157,
    		height: 31,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		fontSize: 20
  	},
  	profileInfo: {
    		top: 147,
    		left: 58
  	},
  	listIcon: {
    		top: 144,
    		height: 24,
    		width: 24
  	},
  	security: {
    		top: 679,
    		left: 59
  	},
  	listIcon2: {
    		top: 676,
    		height: 24,
    		width: 24
  	},
  	fullName: {
    		top: 200,
    		left: 22,
    		position: "absolute"
  	},
  	blackThemeEditProfileChild: {
    		top: 224,
    		left: 22,
    		position: "absolute"
  	},
  	personIcon: {
    		top: 240,
    		left: 29,
    		width: 24,
    		position: "absolute"
  	},
  	fullName2: {
    		top: 232,
    		left: 58
  	},
  	username: {
    		top: 288,
    		left: 22,
    		position: "absolute"
  	},
  	blackThemeEditProfileInner: {
    		top: 312,
    		left: 22,
    		position: "absolute"
  	},
  	username2: {
    		top: 320,
    		left: 58
  	},
  	blackThemeEditProfileChild1: {
    		top: 384,
    		width: 365,
    		backgroundColor: "#000",
    		borderRadius: 10,
    		left: 21,
    		height: 96,
    		position: "absolute"
  	},
  	profileBio: {
    		top: 389,
    		left: 33,
    		width: 344,
    		height: 85,
    		color: "#5a5858",
    		fontSize: 15,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	email: {
    		top: 716,
    		left: 22,
    		position: "absolute"
  	},
  	membership: {
    		top: 592,
    		width: 99,
    		left: 21,
    		position: "absolute"
  	},
  	blackThemeEditProfileChild3: {
    		top: 740,
    		left: 22,
    		position: "absolute"
  	},
  	email2: {
    		top: 748,
    		left: 58
  	},
  	atSignIcon: {
    		top: 328,
    		left: 30,
    		overflow: "hidden",
    		position: "absolute"
  	},
  	mailIcon: {
    		top: 756,
    		left: 29,
    		width: 24,
    		position: "absolute"
  	},
  	linkSocialMedia: {
    		top: 496,
    		width: 145,
    		fontSize: 15,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		height: 24
  	},
  	phoneNumber: {
    		top: 804,
    		width: 126,
    		fontSize: 15,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		height: 24
  	},
  	blackThemeEditProfileChild5: {
    		top: 828,
    		height: 56,
    		width: 365,
    		backgroundColor: "#000",
    		borderRadius: 10
  	},
  	email4: {
    		top: 836
  	},
  	mailIcon2: {
    		left: 32,
    		top: 844,
    		position: "absolute"
  	},
  	password: {
    		top: 892,
    		width: 78,
    		fontSize: 15,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		height: 24
  	},
  	blackThemeEditProfileChild9: {
    		top: 916,
    		height: 56,
    		width: 365,
    		backgroundColor: "#000",
    		borderRadius: 10
  	},
  	password2: {
    		top: 924,
    		left: 59
  	},
  	confirmPassword: {
    		top: 980,
    		width: 142,
    		fontSize: 15,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		height: 24
  	},
  	blackThemeEditProfileChild11: {
    		top: 1004,
    		height: 56,
    		width: 365,
    		backgroundColor: "#000",
    		borderRadius: 10
  	},
  	confirmPassword2: {
    		top: 1012
  	},
  	phoneIcon: {
    		top: 844
  	},
  	lockIcon: {
    		top: 932
  	},
  	lockIcon2: {
    		top: 1020
  	},
  	blackThemeEditProfileChild13: {
    		top: 617,
    		height: 42,
    		width: 117,
    		backgroundColor: "#000",
    		borderRadius: 10,
    		left: 22,
    		position: "absolute"
  	},
  	blackThemeEditProfileChild14: {
    		left: 281
  	},
  	buy: {
    		left: 38
  	},
  	cancel: {
    		left: 300
  	},
  	blackThemeEditProfileChild16: {
    		left: 150
  	},
  	change: {
    		left: 169
  	},
  	blackThemeEditProfileChild18: {
    		left: 297
  	},
  	blackThemeEditProfileChild20: {
    		left: 225
  	},
  	blackThemeEditProfileChild22: {
    		left: 148
  	},
  	blackThemeEditProfileChild24: {
    		left: 77
  	},
  	socialIcons: {
    		left: 157,
    		top: 530,
    		width: 40
  	},
  	socialIcons2: {
    		left: 233,
    		top: 530,
    		width: 40
  	},
  	socialIcons4: {
    		top: 531,
    		left: 305
  	},
  	facebookIcon: {
    		left: 85,
    		top: 530,
    		width: 40
  	},
  	blackThemeEditProfile: {
    		backgroundColor: "#282828",
    		flex: 1,
    		maxWidth: "100%",
    		width: "100%"
  	}
});

export default BlackThemeEditProfile;
