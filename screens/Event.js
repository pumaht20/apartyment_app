import * as React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
import CampFireImg from "../resources/images/campfire.png";

const Event = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.contentWapper}>
          <View style={styles.goBackArrowContainer}>
            <AntDesign name="left" size={24} color="black" />
            <Text style={styles.goBackTxt}>Events</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={CampFireImg} style={styles.image} />
          </View>
          <View style={styles.eventNameContainer}>
            <Text style={styles.eventName}>Tent Party</Text>
          </View>
          <View style={styles.eventContainer}>
            <Text style={styles.eventDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
          <View style={styles.timeContainer}>
            <FontAwesome5 name="clock" size={24} color="#4CC9F0" />
            <Text style={styles.information}>18:00 - 22:00</Text>
          </View>
          <View style={styles.dateContainer}>
            <Entypo name="calendar" size={24} color="#4CC9F0" />
            <Text style={styles.information}>27th September</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    backgroundColor: "#FAFAFA"
  },
  contentWapper: {
    paddingHorizontal: 30,
    width: "100%"
  },
  goBackArrowContainer: {
    padding: 5,
    paddingBottom: 30,
    flexDirection: "row"
  },
  goBackTxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15
  },
  imageContainer: {
    width: "100%",
    height: 180,
    borderRadius: 15
  },
  image: {
    flex: 1,
    width: "100%",
    height: 180
  },
  eventNameContainer: {
    marginTop: 30,
    marginBottom: 10,
    width: "80%"
  },
  eventContainer: {
    marginTop: 10,
    marginBottom: 30,
    width: "80%"
  },
  eventName: {
    color: "#F72585",
    fontSize: 30,
    fontWeight: "bold"
  },
  timeContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 20
  },
  information: {
    paddingLeft: 20
  },
  dateContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 30
  }
});

export default Event;
