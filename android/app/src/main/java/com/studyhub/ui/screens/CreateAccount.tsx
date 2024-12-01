import * as React from "react";
import {Text, StyleSheet, View, Pressable, Image,
    TextInput, Alert, KeyboardAvoidingView, ActivityIndicator} from "react-native";
import { useNavigation, } from '@react-navigation/native';
import {TextStyles} from "../styles/text.tsx";
import { useState }  from 'react';


const CreateAccount = () => {
    const nav = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const signUp = async () => {
                 setLoading(true);
                 try {
                     const response = await auth().createUserWithEmailAndPassword(username,password);
                     console.log(response);
                     alert('Check your emails!');
                     if (response.user) {
                         nav.navigate("Home");
                     }
                 } catch (error: any) {
                     console.log(error);
                     alert('User info taken: ' + error.message);
                     } finally {
                             setLoading(false);

                         }
                }
            return (
                <View style={newStyles.background}>
                            <Text style={[newStyles.titleText, TextStyles.appTitle]}>StudyHub</Text>

                            <View style={[newStyles.credentialContainer, newStyles.usernameContainer]}>
                                <Image style={newStyles.credentialIcon} resizeMode="cover" source={atIcon} />
                                <TextInput value={username} style={[newStyles.credentialText, TextStyles.whiteText1]} placeholder="Username"
                                onChangeText={(text) => setUsername(text)}></TextInput>
                            </View>
                            <View style={[newStyles.credentialContainer, newStyles.passwordContainer]}>
                                <Image style={newStyles.credentialIcon} resizeMode="cover" source={lockIcon} />
                                <TextInput secureTextEntry={true} value={password} style={[newStyles.credentialText, TextStyles.whiteText1]} placeholder="Password"
                                onChangeText={(text) => setPassword(text)}></TextInput>
                            </View>
                );
            };
const newStyles = StyleSheet.create({
    background: {
        backgroundColor: "#000000cc",
        flex: 1,
//         width: "100%",
//         height: 932,
//         overflow: "hidden",
    },
    confirmButtonContainer: {
        shadowColor: "rgba(0, 0, 0, 0.25)",
    	shadowOffset: {
            width: 0,
            height: 4
    	},
    	shadowRadius: 4,
    	elevation: 4,
    	shadowOpacity: 1,
    	height: 58,
        width: 230,
        borderRadius: 40,
        position: "absolute",
        overflow: "hidden",
    },
    signUpContainer: {
        top: 610,
    	backgroundColor: "#0aa55a",
        left: 104,
    },
    signInContainer: {
        top: 700,
        top: 700,
    	backgroundColor: "#707070",
    	left: 104,
    },
    buttonText: {
        top: 18,
    	left: 28,
//     	fontFamily: "Inter-Bold",
    	width: 173,
//     	height: 21,
//     	fontSize: 15,
    	textAlign: "center",
//     	color: "#fff",
    	fontWeight: "700",
//     	lineHeight: 22,
//     	letterSpacing: 0,
    	position: "absolute"
    },
    credentialContainer: {
    	borderRadius: 11,
    	backgroundColor: "#707070",
    	height: 48,
    	width: 316,
    	left: 57,
    	position: "absolute",
    	overflow: "hidden"
    },
    usernameContainer: {
        top: 315
    },
    passwordContainer: {
        top: 400
    },
    credentialText: {
//         height: 23,
        top: 5,
        left: 45,
//     	textAlign: "left",
//     	fontFamily: "Inter-Regular",
//     	color: "#fff",
//     	letterSpacing: 0,
//     	fontSize: 15,
    	position: "absolute"
    },
    credentialIcon: {
        top: 13,
        left: 10,
        position: "absolute"
    },
    socialText: {
        top: 480,
    	width: 255,
    	left: 115,
   		fontFamily: "Inter-Regular",
//    		height: 21,
   		textAlign: "center",
//    		color: "#fff",
//    		lineHeight: 22,
//    		letterSpacing: 0,
//    		fontSize: 15,
   		position: "relative"
    },
    socialButton: {
        height: 56,
    	width: 56,
    	backgroundColor: "#000",
    	borderRadius: 20,
    	top: 500,
    	position: "absolute"
    },
    facebookButton: {
        left: 80
    },
    xButton: {
        left: 150
    },
    appleButton: {
        left: 220
    },
    googleButton: {
        left: 290
    },
    socialIcon: {
    	height: 40,
   		width: 40,
   		left: 7,
   		top: 7,
   		position: "relative"
    },
    titleText: {
        top: 100,
    	left: 85,
//     	fontSize: 40,
//    		fontFamily: "InstrumentSans-Bold",
   		display: "flex",
   		alignItems: "center",
   		justifyContent: "center",
   		width: 260,
   		height: 186,
//    		textShadowColor: "#00000040",
//    		textShadowOffset: {
//             width: 16,
//      		height: 20
//    		},
//         textShadowRadius: 1,
//     	textAlign: "center",
//    		color: "#fff",
//    		fontWeight: "700",
//    		letterSpacing: 0,
   		position: "absolute"
    }
});
export default CreateAccount;