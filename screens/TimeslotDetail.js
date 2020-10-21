import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { APIGetTimeslotHostDetails } from "../services/APIService";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import { AppLoading } from "expo";

const TimeslotDetail = ({ route }) => {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_300Light,
  });

  const { host, begins, ends } = route.params;
  const test = "Grupp 1";
  const [hostData, setHostData] = React.useState({});
  const getData = async () => {
    const raw = await APIGetTimeslotHostDetails("RJQNB", host);
    setHostData(raw.data.message);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.timeslotDetailSafe}>
      <View style={styles.groupScheduleScroll}>
        <Text style={styles.headerText}>{test}</Text>
        <Text style={styles.subHeader}>
          Event information for{" "}
          <Text style={styles.contactTextBold}>{host}</Text>
        </Text>
        <View style={styles.contactInformationWrapper}>
          <Text style={styles.contactText}>{hostData.user_phonenumber}</Text>
          <Text style={styles.contactText}>
            {begins} - {ends}
          </Text>
          <Text style={styles.contactText}>{hostData.group_address}</Text>
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
});

export default TimeslotDetail;
