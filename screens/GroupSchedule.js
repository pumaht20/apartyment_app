import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { APIGetGroupSchedule } from "../services/APIService";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import { AppLoading } from "expo";
import ScheduleCounter from "./counters/ScheduleCounter";

const GroupSchedule = ({ navigation }) => {
  const [timeslots, setTimeslots] = React.useState([]);
  const getData = async () => {
    const raw = await APIGetGroupSchedule("RJQNB", "Grupp 2");
    setTimeslots(
      raw.data.message.sort((a, b) => a.begins.localeCompare(b.begins))
    );
  };
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_300Light,
  });

  useEffect(() => {
    getData();
  }, []);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.groupScheduleSafe}>
      <View style={styles.groupScheduleScroll}>
        <Text style={styles.headerText}>Schedule</Text>
        <Text style={styles.subHeader}>Schedule for Group 1</Text>
        <ScrollView style={styles.scheduleView}>
          <ScheduleCounter props={timeslots} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  groupScheduleSafe: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
  },

  groupScheduleScroll: {
    flex: 1,
  },

  headerText: {
    marginTop: 50,
    marginLeft: 25,
    color: "#F72585",
    fontFamily: "Jost_600SemiBold",
    fontSize: 24,
  },

  subHeader: {
    marginTop: 5,
    marginLeft: 26,
    fontFamily: "Jost_300Light",
    fontSize: 18,
  },

  scheduleView: {
    marginTop: 25,
    alignSelf: "center",
    height: "auto",
    width: "85%",
  },
});

export default GroupSchedule;
