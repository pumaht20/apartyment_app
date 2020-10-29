import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  Button,
  View,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useFonts, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { useNavigation } from "@react-navigation/native";

import CampFireImg from "../../resources/images/campfire.png";

const ActiveCard = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
  });
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("Event")}
    >
      <ImageBackground
        source={CampFireImg}
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 15 }}
      >
        <View style={styles.layoutContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.eventTopContainer}>
              <Text style={styles.eventName}>Tent Party</Text>
              <Text style={styles.date}>27th October</Text>
            </View>
            <View style={styles.eventBottomContainer}>
              <Text style={styles.time}>18:00 - 22:00</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.topConatiner}>
              <Text style={styles.groupName}>Group 1</Text>
            </View>
            <View style={styles.middleConatiner}>
              <Ionicons name="ios-arrow-forward" size={35} color="white" />
            </View>
            <View style={styles.bottomConatiner}>
              <Text style={styles.codeTxt}>CODE:</Text>
              <Text style={styles.code}>AN19C</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: 200,
    borderRadius: 15,
    shadowColor: "#585757",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.27,
    shadowRadius: 2.5,
    marginVertical: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 15,
  },
  layoutContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  leftContainer: {
    justifyContent: "space-between",
    height: "100%",
  },
  eventTopContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  eventName: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 2,
  },
  groupName: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 18,
    color: "white",
    paddingBottom: 2,
  },
  date: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 18,
    color: "white",
  },
  eventBottomContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  time: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 20,
    color: "white",
  },
  rightContainer: {
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  topConatiner: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  hostName: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  middleConatiner: {
    justifyContent: "flex-end",
  },
  bottomConatiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  codeTxt: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 20,
    color: "white",
  },
  code: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
  },
});

export default ActiveCard;
