import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image, TextInput, Alert, KeyboardAvoidingView, ActivityIndicator, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TextStyles } from "../styles/text.tsx";
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const atIcon = require("../../../../../res/icons-mdpi/green_at_sign.png");
const lockIcon = require("../../../../../res/icons-mdpi/green_lock.png");

const CreateAccount = () => {
    const nav = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const addUserToFirestore = async (username: string, password: string,
        email: string, phoneNumber: string, firstName: firstName, lastName: lastName): Promise<void> => {
      try {
        await firestore().collection('users').doc(user.id).set({
          username: username,
          password: password,
          phoneNumber: phoneNumber,
          email: email,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });
        console.log('User added successfully!');
      } catch (error) {
        console.error('Error adding user: ', error);
      }
    };

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await auth().createUserWithEmailAndPassword(email, password);
            console.log(response);
            alert('Check your emails!');
            if (response.user) {
                nav.navigate("Home");
            }
        } catch (error) {
            console.log(error);
            alert('User info taken: ' + error.message);
        } finally {
            setLoading(false);
        }
    };
const handleInputChange = (input: string) => {
        // Allow only numbers and set the state
        if (/^\d*$/.test(input)) {
            setPhoneNumber(input);
        }
    };
    return (
        <ScrollView style={newStyles.background}>
            <Text style={[newStyles.titleText, TextStyles.appTitle]}>StudyHub</Text>
            <Text style={[newStyles.usernameText, TextStyles.whiteText1]}> Username: </Text>
            <View style={[newStyles.credentialContainer, newStyles.usernameContainer]}>
                <TextInput
                    value={username}
                    style={[newStyles.credentialText, TextStyles.whiteText1]}
                    placeholder="Username"
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <Text style={[newStyles.passwordText, TextStyles.whiteText1]}> Password: </Text>
            <View style={[newStyles.credentialContainer, newStyles.passwordContainer]}>
                <TextInput
                    secureTextEntry={true}
                    value={password}
                    style={[newStyles.credentialText, TextStyles.whiteText1]}
                    placeholder="Password"
                    onChangeText={(text) =>  setPassword(password) }
                />
            </View>
            <Text style={[newStyles.confirmPasswordText, TextStyles.whiteText1]}> Confirm Password: </Text>
                        <View style={[newStyles.credentialContainer, newStyles.confirmPasswordContainer]}>
                            <TextInput
                                secureTextEntry={true}
                                value={confirmPassword}
                                style={[newStyles.credentialText, TextStyles.whiteText1]}
                                placeholder="Confirm Password"
                                onChangeText={(text) => setConfirmPassword(text)}
                            />
                        </View>
            <Text style={[newStyles.emailText, TextStyles.whiteText1]}> Email: </Text>
                        <View style={[newStyles.credentialContainer, newStyles.emailContainer]}>
                            <TextInput
                                value={email}
                                style={[newStyles.credentialText, TextStyles.whiteText1]}
                                placeholder="Email"
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
            <Text style={[newStyles.phoneNumberText, TextStyles.whiteText1]}> Phone number: </Text>
                                    <View style={[newStyles.credentialContainer, newStyles.phoneNumberContainer]}>
                                        <TextInput
                                            value={phoneNumber}
                                            style={[newStyles.credentialText, TextStyles.whiteText1]}
                                            placeholder="Phone number"
                                            keyboardType = 'numeric'
                                            onChangeText={handleInputChange}
                                        />
                                    </View>
                    <KeyboardAvoidingView behavior="padding">
                                    { loading ? <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
                                                   :
                                                   <View>
                                                    <Pressable style={[newStyles.signUpContainer, newStyles.confirmButtonContainer]} onPress={()=>{
                                                                     addUserToFirestore().then(() => signUp())
                                                                }}>
                                                                    <Text style={[TextStyles.whiteText1, newStyles.buttonText]}>Create Account</Text>
                                                    </Pressable>
                                                    </View>
                                    }
                                </KeyboardAvoidingView>
        </ScrollView>
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
    usernameText: {
        top: 180,
        left: 60
    },
    passwordText: {
            top: 245,
            left: 60
        },
    confirmPasswordText: {
             top: 300,
             left: 60
        },
    confirmPasswordContainer: {
            top: 375
        },
    emailText: {
            top:355,
            left: 60
        },
    emailContainer: {
            top: 455
        },
    phoneNumberText: {
            top:410,
            left: 60
        },
    phoneNumberContainer: {
            top:535
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
        top: 575,
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
        top: 210
    },
    passwordContainer: {
        top: 295
    },
    credentialText: {
//         height: 23,
        top: 5,
        left: 10,
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