import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  Clipboard,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  useFonts,
  Jost_800ExtraBold,
  Jost_500Medium,
} from "@expo-google-fonts/jost";
import Goal from "../resources/svg/goal.js";
import { AppLoading } from "expo";
import { LinearGradient } from "expo-linear-gradient";

const CreateEventInformation = ({ navigation }) => {
  const eventCode = "RE3AC";

  const [fontsLoaded] = useFonts({
    Jost_800ExtraBold,
    Jost_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.createEventWrapper}>
      <View style={styles.createEventWrapper}>
        <Text style={styles.h1}>Wohooo!</Text>
        <Goal></Goal>
        <View style={styles.eventCodeContainer}>
          <View style={styles.hej}>
            <Text style={styles.eventCodeText}>{eventCode}</Text>
            <TouchableOpacity onPress={() => Clipboard.setString(eventCode)}>
              <LinearGradient
                // Button Linear Gradient
                colors={["#6C63FF", "#4CC9F0"]}
                style={styles.copyButton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.copyButtonContent}>
                  <AntDesign name="copy1" size={24} color="#fafafa" />
                  <Text style={styles.copyButtonText}>Copy</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewEventButton}
          onPress={() => navigation.navigate("Event")}
        >
          <Text style={styles.viewEventButtonText}>View event</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  createEventWrapper: {
    backgroundColor: "#fafafa",
    flex: 1,
    alignItems: "center",
  },

  h1: {
    fontWeight: "800",
    fontSize: 28,
    color: "#F72585",
    marginBottom: 5,
    textAlign: "center",
    marginTop: 100,
    fontFamily: "Jost_800ExtraBold",
  },

  p: {
    fontSize: 17,
    textAlign: "center",
    marginRight: 50,
    marginLeft: 50,
    fontFamily: "Jost_500Medium",
    marginTop: 25,
  },

  hej: {
    marginTop: 50,
    marginLeft: 100,
    flex: 1,
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  eventCodeContainer: {
    height: 50,
    padding: 50,
  },

  eventCodeText: {
    fontSize: 40,
    marginRight: 20,
    color: "#4CC9F0",
    fontFamily: "Jost_800ExtraBold",
  },

  copyButton: {
    alignSelf: "center",
    marginRight: 150,
    flexDirection: "row",
    height: 55,
    width: 110,
    borderRadius: 10,
    justifyContent: "center",
  },

  copyButtonText: {
    color: "#fafafa",
    textAlign: "center",
    fontFamily: "Jost_800ExtraBold",
    fontSize: 17,
    paddingTop: 1,
    paddingLeft: 5,
  },

  viewEventButton: {
    backgroundColor: "#F72585",
    width: 200,
    borderRadius: 15,
    marginTop: 250,
  },

  viewEventButtonText: {
    fontFamily: "Jost_800ExtraBold",
    fontSize: 17,
    color: "#fafafa",
    textAlign: "center",
    padding: 17,
  },
  copyButtonContent: {
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  copyButtonText: {
    color: "#fafafa",
    fontFamily: "Jost_800ExtraBold",
    fontSize: 17,
  },
});

export default CreateEventInformation;
