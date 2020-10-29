import * as React from "react";
import {
  StyleSheet,
  Image,
  Text,
  Button,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import { useFonts, Jost_600SemiBold } from "@expo-google-fonts/jost";
import EventCard from "./components/EventCard";
import ActiveCard from "./components/ActiveCard";

const EventsOverview = () => {
  const upcomingEvents = [
    {
      iconName: "ios-bicycle",
      type: "ion-icon",
      eventName: "Tour de drink",
      code: "ANP2C",
      date: "29 October 2020",
    },
    {
      iconName: "globe-americas",
      type: "FontAwesome5",
      eventName: "Around the world",
      code: "P82KC",
      date: "5 November 2020",
    },
  ];

  const oldEvents = [
    {
      iconName: "car-sports",
      type: "Material-Community-icons",
      eventName: "Partyball 3000",
      code: "",
      date: "24 August 2020",
    },
    {
      iconName: "ios-bicycle",
      type: "ion-icon",
      eventName: "Tour de drink",
      code: "",
      date: "24 October 2019",
    },
    {
      iconName: "globe-americas",
      type: "FontAwesome5",
      eventName: "Tour de drink",
      code: "",
      date: "9 November 2019",
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.contentWapper}>
          <View style={styles.goBackArrowContainer}>
            <AntDesign name="left" size={24} color="black" />
            <Text style={styles.goBackTxt}></Text>
          </View>
          <View style={styles.activeEventContainer}>
            <Text style={styles.title}>Active event</Text>
            <ActiveCard />
          </View>
          <View style={styles.upcomingEventsContainer}>
            <Text style={styles.title}>Upcoming events</Text>
            <View style={styles.eventCards}>
              <EventCard event={upcomingEvents[0]} />
              <EventCard event={upcomingEvents[1]} />
            </View>
          </View>
          <View style={styles.oldEventsContainer}>
            <Text style={styles.title}>Old events</Text>
            <EventCard event={oldEvents[0]} />
            <EventCard event={oldEvents[1]} />
            <EventCard event={oldEvents[2]} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    backgroundColor: "#FAFAFA",
  },
  contentWapper: {
    paddingHorizontal: 30,
  },
  goBackArrowContainer: {
    marginTop: 50,
    padding: 5,
    paddingBottom: 30,
    flexDirection: "row",
  },
  goBackTxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  activeEventContainer: {},
  title: {
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 15,
  },
  upcomingEventsContainer: {},
  oldEventsContainer: {},
});

export default EventsOverview;
