import React from "react";
import { ScrollView, StyleSheet, View, Text, Image, TextInput, Pressable } from "react-native";

const ProfileHeader = () => (
  <View style={styles.headerContainer}>
    <Pressable style={styles.backButton}>
      <Image style={styles.icon} source={require("arrow_back.png")} />
    </Pressable>
    <Image style={styles.profileImage} source={require("Ellipse4.png")} />
    <Text style={styles.profileName}>Profile Name</Text>
    <Image style={styles.addImageButton} source={require("Plus.png")} />
  </View>
);

const ProfileSection = ({ icon, placeholder }) => (
  <View style={styles.inputContainer}>
    <Image style={styles.inputIcon} source={icon} />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#5a5858"
    />
  </View>
);

const ActionButton = ({ label, onPress, style }) => (
  <Pressable style={[styles.actionButton, style]} onPress={onPress}>
    <Text style={styles.actionButtonText}>{label}</Text>
  </Pressable>
);

const SocialMediaLink = ({ platformIcon }) => (
  <Pressable style={styles.socialButton}>
    <Image style={styles.socialIcon} source={platformIcon} />
  </Pressable>
);

const BlackThemeEditProfile = () => (
  <ScrollView style={styles.container}>
    <ProfileHeader />
    <Text style={styles.sectionHeading}>Profile Settings</Text>
    <Text style={styles.subHeading}>Profile Info</Text>

    {/* Profile Info Sections */}
    <ProfileSection icon={require("person.png")} placeholder="Full Name" />
    <ProfileSection icon={require("At sign.png")} placeholder="Username" />
    <View style={[styles.inputContainer, styles.bioContainer]}>
      <TextInput
        style={[styles.input, styles.bioInput]}
        placeholder="Profile Bio"
        placeholderTextColor="#5a5858"
        multiline
      />
    </View>

    {/* Social Media Links */}
    <Text style={styles.subHeading}>Link Social Media</Text>
    <View style={styles.socialMediaContainer}>
      <SocialMediaLink platformIcon={require("Facebook.png")} />
      <SocialMediaLink platformIcon={require("X.png")} />
      <SocialMediaLink platformIcon={require("Apple.png")} />
      <SocialMediaLink platformIcon={require("Google.png")} />
    </View>

    {/* Membership Section */}
    <Text style={styles.subHeading}>Membership</Text>
    <View style={styles.membershipContainer}>
      <ActionButton label="Buy" style={styles.buyButton} onPress={() => alert("Buy")} />
      <ActionButton label="Change" style={styles.changeButton} onPress={() => alert("Change")} />
      <ActionButton label="Cancel" style={styles.cancelButton} onPress={() => alert("Cancel")} />
    </View>

    {/* Security Section */}
    <Text style={styles.subHeading}>Security</Text>
    <ProfileSection icon={require("mail.png")} placeholder="Email" />
    <ProfileSection icon={require("Phone.png")} placeholder="Phone Number" />
    <ProfileSection icon={require("Lock.png")} placeholder="Password" />
    <ProfileSection icon={require("Lock.png")} placeholder="Confirm Password" />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202c2a",
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  profileName: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
  },
  addImageButton: {
    width: 30,
    height: 30,
  },
  sectionHeading: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 16,
  },
  subHeading: {
    fontSize: 15,
    color: "#5a5858",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 15,
  },
  bioContainer: {
    height: 96,
  },
  bioInput: {
    textAlignVertical: "top",
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  socialButton: {
    backgroundColor: "#000",
    width: 56,
    height: 56,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  membershipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  actionButton: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buyButton: {
    backgroundColor: "#0aa55a",
  },
  changeButton: {
    backgroundColor: "#f0ad4e",
  },
  cancelButton: {
    backgroundColor: "#d9534f",
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 15,
  },
});

export default BlackThemeEditProfile;
