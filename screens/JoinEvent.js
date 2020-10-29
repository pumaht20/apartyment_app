import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

import { AppLoading } from "expo";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import { useNavigation } from "@react-navigation/native";
import { APIJoinEvent } from "../services/APIService";
import Dancer from "../resources/svg/dancer.js";
const JoinEvent = () => {
  const [pinValue, setPinValue] = React.useState("");
  const [displayEventNotFound, setDisplayEventNotFound] = React.useState(
    "none"
  );
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_300Light,
  });

  const joinEventHandler = () => {
    const eventCode = pinValue.toUpperCase();
    APIJoinEvent(
      "NyLA1q5SdxEIM358dKPG",
      "David Eriksson",
      "davideriksson96@outlook.com",
      "0707327184",
      eventCode
    ).then((res) => {
      if (res.status === 200) {
        navigation.navigate("JoinedEvent", { eventCode: eventCode });
      } else if (res.status === 404) {
        setDisplayEventNotFound("flex");
      }
    });
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.joinEventSafe}>
      <ScrollView style={styles.joinEventScroll}>
        <Text style={styles.headerText}>Join event</Text>
        <View style={styles.imageView}>
          <Dancer />
        </View>
        <Text style={styles.description}>
          Enter the <Text style={styles.descriptionHighlight}>event code</Text>{" "}
          for the event that you want to join!
        </Text>
        <View style={styles.pininput}>
          <SmoothPinCodeInput
            codeLength={5}
            cellStyle={{
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              height: 60,
            }}
            textStyle={{
              textTransform: "uppercase",
              color: "#F72585",
              fontFamily: "Jost_600SemiBold",
              fontSize: 22,
            }}
            cellStyleFocused={null}
            cellSpacing={12}
            keyboardType="default"
            value={pinValue}
            onTextChange={(pinValue) => setPinValue(pinValue)}
          />
        </View>
        <View style={styles.eventNotFoundWrapper}>
          <View style={{ display: displayEventNotFound }}>
            <Text style={styles.eventNotFoundText}>
              Event {pinValue.toUpperCase()} not found!
            </Text>
          </View>
        </View>
        <View style={styles.submitJoinEventButton}>
          <TouchableOpacity
            style={styles.joinEventButton}
            onPress={() => joinEventHandler()}
          >
            <Text style={styles.joinEventButtonText}>Join event</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  joinEventSafe: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
  },

  joinEventScroll: {
    flex: 1,
  },

  imageView: {
    marginTop: 50,
    alignSelf: "center",
  },

  headerText: {
    marginTop: 50,
    marginLeft: 25,
    color: "#F72585",
    fontFamily: "Jost_600SemiBold",
    fontSize: 24,
  },

  description: {
    width: "70%",
    alignSelf: "center",
    marginTop: 25,
    color: "black",
    fontFamily: "Jost_300Light",
    fontSize: 16,
  },

  descriptionHighlight: {
    color: "#F72585",
    fontFamily: "Jost_600SemiBold",
  },

  pininput: {
    marginTop: 25,
    alignSelf: "center",
    paddingBottom: 25,
  },

  submitJoinEventButton: {
    marginTop: 150,
  },

  joinEventButton: {
    alignSelf: "center",
    backgroundColor: "#F72585",
    width: 300,
    borderRadius: 15,
  },

  joinEventButtonText: {
    fontFamily: "Jost_800ExtraBold",
    fontSize: 17,
    color: "#fafafa",
    textAlign: "center",
    padding: 17,
  },

  eventNotFoundWrapper: {
    alignSelf: "center",
  },

  eventNotFoundText: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 14,
    color: "#FF3E3E",
  },
});

export default JoinEvent;
