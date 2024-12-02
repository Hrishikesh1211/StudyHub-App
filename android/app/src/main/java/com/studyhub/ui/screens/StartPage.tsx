import * as React from "react";
import {Text, StyleSheet, View, Pressable, Image, TextInput, Alert, KeyboardAvoidingView, ActivityIndicator} from "react-native";
import { useNavigation, } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {TextStyles} from "../styles/text.tsx"
import { useState }  from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
//import { NativeModules } from 'react-native';
//const { RNTwitterSignIn } = NativeModules;
const googleIcon = require("../../../../../res/icons-mdpi/white_google.png");
const facebookIcon = require("../../../../../res/icons-mdpi/white_facebook.png");
const xIcon = require("../../../../../res/icons-mdpi/white_x.png");
const appleIcon = require("../../../../../res/icons-mdpi/white_apple.png");
const atIcon = require("../../../../../res/icons-mdpi/green_at_sign.png");
const lockIcon = require("../../../../../res/icons-mdpi/green_lock.png");

const BlackThemeStartPage = () => {
    const nav = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
      GoogleSignin.configure({
              webClientId: '662070165912-2sarng7t2rikd2ebjvp6j52rf1t4u5oe.apps.googleusercontent.com',
          });

      /*RNTwitterSignIn.init('TWITTER_CONSUMER_KEY', 'TWITTER_CONSUMER_SECRET').then(() =>
        console.log('Twitter SDK initialized'),
      );*/

  /* async function onTwitterButtonPress(): Promise<any> {
       const { authToken, authTokenSecret }: { authToken: string; authTokenSecret: string } = await RNTwitterSignIn.logIn();

       const twitterCredential: any = auth.TwitterAuthProvider.credential(authToken, authTokenSecret);

       return auth().signInWithCredential(twitterCredential);
   }*/

async function onFacebookButtonPress(): Promise<any> {
  const result: { isCancelled: boolean } = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  const data: { accessToken: string } | null = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  const facebookCredential: any = auth.FacebookAuthProvider.credential(data.accessToken);

  return auth().signInWithCredential(facebookCredential);
}


async function onAppleButtonPress(): Promise<any> {
    const appleAuthRequestResponse: appleAuth.AppleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    if (!appleAuthRequestResponse.identityToken) {
        Alert.alert("Apple Sign-In failed - issue with token");
    }

    const { identityToken, nonce }: { identityToken: string; nonce: string } = appleAuthRequestResponse;
    const appleCredential: firebase.auth.AuthCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

    return auth().signInWithCredential(appleCredential);
}

async function onGoogleButtonPress(): Promise<any> {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const signInResult: { data?: { idToken?: string; token: string } } = await GoogleSignin.signIn();
    let idToken: string | undefined = signInResult.data?.idToken;
    if (!idToken) {
        idToken = signInResult.idToken;
    }
    if (!idToken) {
        throw new Error('No ID token found');
    }

    const googleCredential: any = auth.GoogleAuthProvider.credential(signInResult.data.token);

    return auth().signInWithCredential(googleCredential);
}

    const SignIn = async () => {
        setLoading(true);
        try {
            const response = await auth().signInWithEmailAndPassword(email,password);
            console.log(response);
            if (response.user) {
                nav.navigate("Home");
            }
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
            } finally {
                    setLoading(false);
                }
       }


  	return (
        <View style={newStyles.background}>
            <Text style={[newStyles.titleText, TextStyles.appTitle]}>StudyHub</Text>

            <View style={[newStyles.credentialContainer, newStyles.usernameContainer]}>
                <Image style={newStyles.credentialIcon} resizeMode="cover" source={atIcon} />
                <TextInput value={email} style={[newStyles.credentialText, TextStyles.whiteText1]} placeholder="Email"
                onChangeText={(text) => setEmail(text)}></TextInput>
            </View>
            <View style={[newStyles.credentialContainer, newStyles.passwordContainer]}>
                <Image style={newStyles.credentialIcon} resizeMode="cover" source={lockIcon} />
                <TextInput secureTextEntry={true} value={password} style={[newStyles.credentialText, TextStyles.whiteText1]} placeholder="Password"
                onChangeText={(text) => setPassword(text)}></TextInput>
            </View>

            <Text style={[newStyles.socialText, TextStyles.whiteText1]}>Log In With Social Media</Text>

            <View>
                <Pressable style={[newStyles.socialButton, newStyles.facebookButton]} onPress={() => {
                    onFacebookButtonPress().then(() => nav.navigate("Home"))
                }}>
                    <Image style={newStyles.socialIcon} resizeMode="cover" source={facebookIcon} />
                </Pressable>
                <Pressable style={[newStyles.socialButton, newStyles.xButton]}  onPress={() => {
                    //onTwitterButtonPress.then(() => nav.navigate("Home"))
                }}>
                    <Image style={newStyles.socialIcon} resizeMode="cover" source={xIcon} />
                </Pressable>
                <Pressable style={[newStyles.socialButton, newStyles.appleButton]} onPress={() => {
                    onAppleButtonPress().then(() => nav.navigate("Home"))
                }}>
                    <Image style={newStyles.socialIcon} resizeMode="cover" source={appleIcon} />
                </Pressable>
                <Pressable style={[newStyles.socialButton, newStyles.googleButton]} onPress={() => {
                    onGoogleButtonPress().then(() =>  nav.navigate("Home"))
                }}>
                    <Image style={newStyles.socialIcon} resizeMode="cover" source={googleIcon} />
                </Pressable>
            </View>

            <KeyboardAvoidingView behavior="padding">
                { loading ? <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
                               :
                               <View>
                                <Pressable style={[newStyles.signUpContainer, newStyles.confirmButtonContainer]} onPress={()=>{
                                                 nav.navigate("CreateAcc");
                                            }}>
                                                <Text style={[TextStyles.whiteText1, newStyles.buttonText]}>Sign Up</Text>
                                </Pressable>

                                <Pressable style={[newStyles.signInContainer, newStyles.confirmButtonContainer]} onPress={()=>{
                                     SignIn()
                                }}>
                                    <Text style={[TextStyles.whiteText1, newStyles.buttonText]}> Sign In</Text>
                                </Pressable>
                                </View>
                }
            </KeyboardAvoidingView>
        </View>
    )

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

const OldPage = () => {
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
        </View>
    )
}

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
