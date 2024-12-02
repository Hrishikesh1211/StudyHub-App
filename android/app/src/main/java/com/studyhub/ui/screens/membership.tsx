import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
const greenEllipse = require("../../../../../res/icons-mdpi/green_ellipse.png")
const whiteCheck = require("../../../../../res/icons-mdpi/white_check.png")

const BlackThemeMembership = () => {
  const handleBackPress = () => {
    console.log("Back button pressed");
  };

  const handleGetStartedPress = () => {
    console.log("Get Started button pressed");
  };

  return (
    <View style={styles.container}>
    {/*}
      <Pressable style={styles.backButton} onPress={handleBackPress}>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require("./assets/white-back-arrow.png")}
        />
      </Pressable>
      */}

      <Text style={styles.heading}>Choose Your Plan</Text>

      <View style={styles.planCard}>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.ellipseIcon}
            resizeMode="contain"
            source={greenEllipse}
          />
          <Text style={styles.iconText}>1</Text>
        </View>
        <View style={styles.planDetails}>
          <Text style={styles.planTitle}>Basic - $5/mo</Text>
          <Text style={styles.planDescription}>
            - Remove popup ads {"\n"}- More file space
          </Text>
        </View>
      </View>

      <View style={[styles.planCard, styles.selectedPlanCard]}>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.ellipseIcon}
            resizeMode="contain"
            source={greenEllipse}
          />
          <Text style={styles.iconText}>2</Text>
        </View>
        <View style={styles.planDetails}>
          <Text style={styles.planTitle}>Intermediate - $10/mo</Text>
          <Text style={styles.planDescription}>
            - Remove popup ads {"\n"}- Even more file space
          </Text>
        </View>
        <Image
          style={styles.checkIcon}
          resizeMode="contain"
          source={whiteCheck}
        />
      </View>

      <Pressable style={styles.getStartedButton} onPress={handleGetStartedPress}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  backButton: {
    width: 24,
    height: 24,
    marginVertical: 20,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
  planCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5a5858",
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
  },
  selectedPlanCard: {
    borderColor: "#0cca6e",
    borderWidth: 2,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginRight: 20,
  },
  ellipseIcon: {
    position: "absolute",
    width: 40,
    height: 40,
  },
  iconText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  planDetails: {
    flex: 1,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 5,
  },
  planDescription: {
    fontSize: 14,
    color: "#bdbdbd",
  },
  checkIcon: {
    width: 20,
    height: 20,
  },
  getStartedButton: {
    marginTop: 40,
    backgroundColor: "#0aa55a",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  getStartedText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default BlackThemeMembership;
