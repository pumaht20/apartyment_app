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
import ScheduleCard from "./components/ScheduleCard";

const GroupSchedule = ({ navigation }) => {
  const getData = async () => {
    const raw = await APIGetGroupSchedule("RJQNB", "Grupp 2");
    console.log(raw.data);
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
        <Text style={styles.subHeader}>Schedule for "Gruppnamn"</Text>
        <ScrollView style={styles.scheduleView}>
          <Text>ScheduleCards goes here</Text>
          <ScheduleCard />
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
    marginTop: 25,
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
    backgroundColor: "blue",
    height: "auto",
    width: "85%",
  },
});

export default GroupSchedule;
