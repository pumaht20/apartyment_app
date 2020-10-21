import * as React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import { AppLoading } from "expo";

const ScheduleCard = (props) => {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View>
      <LinearGradient
        // Button Linear Gradient
        colors={["#6C63FF", "#4CC9F0"]}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.groupName}>{props.timeslot.host_group}</Text>
        <Text style={styles.address}>Adress</Text>
        <Text style={styles.time}>
          {props.timeslot.begins.substring(12, 17)} -{" "}
          {props.timeslot.ends.substring(12, 17)}
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: "auto",
    marginBottom: 20,
  },

  groupName: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
    fontFamily: "Jost_600SemiBold",
  },

  address: {
    color: "white",
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
    fontFamily: "Jost_300Light",
  },

  time: {
    color: "white",
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
    fontFamily: "Jost_300Light",
    paddingBottom: 15,
  },
});

export default ScheduleCard;
