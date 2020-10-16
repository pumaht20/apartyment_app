import * as React from "react";
import Buildings from "../resources/svg/buildings.js";
import { useFonts, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

const Hub = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.hubWrapper}>
      <ScrollView style={styles.hubScrollWrapper}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>APARTYMENT</Text>
        </View>
        <Buildings />

        <View style={styles.createEventButtonWrapper}>
          <Button
            color="#F72585"
            title="Create Event"
            onPress={() => navigation.navigate("CreateEvent")}
          />
        </View>
        <View style={styles.joinEventButtonWrapper}>
          <Button
            color="#F72585"
            title="Join Event"
            onPress={() => navigation.navigate("CreateEvent")}
          />
        </View>
        <View style={styles.eventsButtonWrapper}>
          <Button
            color="#F72585"
            title="Events"
            onPress={() => navigation.navigate("CreateEvent")}
          />
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
    paddingTop: 100,
  },

  headerText: {
    color: "#F72585",
    fontFamily: "Jost_600SemiBold",
    fontSize: 36,
    alignSelf: "center",
  },

  createEventButtonWrapper: {
    marginTop: 20,
  },

  joinEventButtonWrapper: {
    marginTop: 20,
  },

  eventsButtonWrapper: {
    marginTop: 20,
  },
});

export default Hub;
