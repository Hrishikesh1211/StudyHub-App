/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import {useEffect} from 'react';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import BlackThemeHomePage from "./android/app/src/main/java/com/studyhub/ui/screens/HomePage.tsx";
import BlackThemeProfile from './android/app/src/main/java/com/studyhub/ui/screens/ProfilePage.tsx';
import BlackThemeCreateGroup from './android/app/src/main/java/com/studyhub/ui/screens/CreateGroup.tsx';
import BlackThemeSingleChats from './android/app/src/main/java/com/studyhub/ui/screens/SingleChats.tsx';
import BlackThemeStartPage from './android/app/src/main/java/com/studyhub/ui/screens/StartPage.tsx';
import BlackThemeEditProfile from './android/app/src/main/java/com/studyhub/ui/screens/edit_profile.tsx';
import CreateAccount from './android/app/src/main/java/com/studyhub/ui/screens/CreateAccount.tsx';

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button } from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { User } from 'firebase/auth';
import {auth, onAuthStateChanged} from '@react-native-firebase/auth';
import { useState }  from 'react';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator({
    screens: {
        Home: BlackThemeHomePage,
        Profile: BlackThemeProfile,
        CreateGroup: BlackThemeCreateGroup,
        Chats: BlackThemeSingleChats,
        Start: BlackThemeStartPage,
        EditProfile: BlackThemeEditProfile,
        CreateAcc: CreateAccount
    },
    initialRouteName: "Start"
  });

function App(): React.JSX.Element {
  const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//                 console.log('user',user);
//             });
//       }, [])


  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <Navigation/>
  )
}

const Navigation = createStaticNavigation(Stack);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
