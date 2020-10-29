import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { APIGetTimeslotHostDetails } from "../services/APIService";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import { AppLoading } from "expo";
import { FontAwesome5, FontAwesome, Entypo } from "@expo/vector-icons";
const TimeslotDetail = ({ route }) => {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_300Light,
  });

  const { host, begins, ends } = route.params;
  const [hostData, setHostData] = React.useState({});
  const getData = async () => {
    const raw = await APIGetTimeslotHostDetails("RJQNB", host);
    console.log(raw.data);
    setHostData(raw.data.message);
  };

  useEffect(() => {
    getData();
    console.log(hostData);
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.timeslotDetailSafe}>
      <View style={styles.groupScheduleScroll}>
        <Text style={styles.headerText}>{host}</Text>
        <Text style={styles.subHeader}>
          Event information for{" "}
          <Text style={styles.contactTextBold}>{host}</Text>
        </Text>
        <View style={styles.contactInformationWrapper}>
          <View style={styles.iconTextContainer}>
            <FontAwesome5 name="clock" size={24} color="#4CC9F0" />
            <Text style={styles.contactText}>070 732 71 84</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesome name="phone" size={24} color="#4CC9F0" />
            <Text style={styles.contactText}>
              {begins} - {ends}
            </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Entypo name="location" size={24} color="#4CC9F0" />
            <Text style={styles.contactText}>Tvistevägen 11b</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  timeslotDetailSafe: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
  },

  timeslotDetailWrapper: {
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

  contactInformationWrapper: {
    alignSelf: "center",
    marginTop: 50,
    width: "85%",
    height: "auto",
  },

  contactText: {
    marginLeft: 26,
    fontFamily: "Jost_300Light",
    fontSize: 18,
    marginBottom: 30,
  },

  contactTextBold: {
    fontFamily: "Jost_600SemiBold",
  },

  iconTextContainer: {
    flexDirection: "row",
  },
});

export default TimeslotDetail;
