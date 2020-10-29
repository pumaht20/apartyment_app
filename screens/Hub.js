import React, { useState, useEffect } from "react";
import Buildings from "../resources/svg/buildings.js";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_800ExtraBold,
} from "@expo-google-fonts/jost";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AppLoading } from "expo";

const Hub = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Jost_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.hubWrapper}>
      <ScrollView style={styles.hubScrollWrapper}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>APARTYMENT</Text>
        </View>
        <Buildings />

        <View style={styles.createEventButtonWrapper}>
          <TouchableOpacity
            style={styles.hubButton}
            onPress={() => navigation.navigate("CreateEvent")}
          >
            <Text style={styles.hubButtonText}>Create event</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.joinEventButtonWrapper}>
          <TouchableOpacity
            style={styles.hubButton}
            onPress={() => navigation.navigate("JoinEvent")}
          >
            <Text style={styles.hubButtonText}>Join event</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eventsButtonWrapper}>
          <TouchableOpacity
            style={styles.hubButton}
            onPress={() => navigation.navigate("EventsOverview")}
          >
            <Text style={styles.hubButtonText}>Event</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hubWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
  },

  hubScrollWrapper: {
    flex: 1,
  },

  headerView: {
    flex: 1,
    paddingTop: 80,
    marginBottom: 50,
  },

  headerText: {
    color: "#F72585",
    fontFamily: "Jost_600SemiBold",
    fontSize: 36,
    alignSelf: "center",
  },

  createEventButtonWrapper: {
    marginTop: 100,
  },

  joinEventButtonWrapper: {
    marginTop: 20,
  },

  eventsButtonWrapper: {
    marginTop: 20,
  },

  hubButton: {
    alignSelf: "center",
    backgroundColor: "#F72585",
    width: 200,
    borderRadius: 15,
  },

  hubButtonText: {
    fontFamily: "Jost_800ExtraBold",
    fontSize: 17,
    color: "#fafafa",
    textAlign: "center",
    padding: 17,
  },
});

export default Hub;
