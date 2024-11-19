import React from "react";
import { ScrollView, View, Text, Image, Pressable, StyleSheet } from "react-native";

// Header Component
const Header = () => (
  <View style={headerStyles.container}>
    <Image style={headerStyles.backIcon} source={require("arrow_back.png")} resizeMode="cover" />
    <Image style={headerStyles.avatarIcon} source={require("Gray Ellipse.png")} resizeMode="cover" />
    <Text style={headerStyles.profileName}>Profile Name</Text>
    <Image style={headerStyles.addIcon} source={require("Plus.png")} resizeMode="cover" />
  </View>
);

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#202c2a",
    height: 96,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  backIcon: { width: 24, height: 24, marginRight: 16 },
  avatarIcon: { width: 60, height: 60, marginRight: 16 },
  profileName: { flex: 1, color: "#fff", fontSize: 20, fontFamily: "Inter-Regular" },
  addIcon: { width: 30, height: 30 },
});

// ProfileSection Component
const ProfileSection = ({ title }) => (
  <View style={profileSectionStyles.sectionContainer}>
    <Text style={profileSectionStyles.sectionTitle}>{title}</Text>
    <View style={profileSectionStyles.inputContainer}>
      <Text style={profileSectionStyles.inputText}>Input Placeholder</Text>
    </View>
  </View>
);

const profileSectionStyles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-Regular",
    marginBottom: 8,
  },
  inputContainer: {
    height: 48,
    backgroundColor: "#000",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  inputText: {
    color: "#5a5858",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
});

// ActionButton Component
const ActionButton = ({ label, onPress }) => (
  <Pressable style={actionButtonStyles.button} onPress={onPress}>
    <Text style={actionButtonStyles.buttonText}>{label}</Text>
  </Pressable>
);

const actionButtonStyles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: "#000",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
});

// Main Component
const BlackThemeEditProfile = () => (
  <ScrollView style={mainStyles.container}>
    <Header />
    <ProfileSection title="Full Name" />
    <ProfileSection title="Username" />
    <ProfileSection title="Email" />
    <ProfileSection title="Password" />
    <ProfileSection title="Confirm Password" />
    <ActionButton label="Save" onPress={() => alert("Saved!")} />
    <ActionButton label="Cancel" onPress={() => alert("Cancelled!")} />
  </ScrollView>
);

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
});

export default BlackThemeEditProfile;
