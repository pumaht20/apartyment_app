import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import { AppLoading } from "expo";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const ScheduleCard = (props) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TimeslotDetail", {
            host: props.timeslot.host_group,
            begins: props.timeslot.begins.substring(12, 17),
            ends: props.timeslot.ends.substring(12, 17),
          })
        }
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#6C63FF", "#4CC9F0"]}
          style={styles.card}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.cardRows}>
            <View style={styles.cardCols}>
              <Text style={styles.groupName}>{props.timeslot.host_group}</Text>
              <Text style={styles.address}>Adress</Text>
              <Text style={styles.time}>
                {props.timeslot.begins.substring(12, 17)} -{" "}
                {props.timeslot.ends.substring(12, 17)}
              </Text>
            </View>

            <View style={styles.arrowContainer}>
              <Ionicons
                style={styles.arrow}
                name="ios-arrow-forward"
                size={24}
                color="white"
              />
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
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
  cardRows: {
    flexDirection: "row",
  },
  cardCols: {
    flexDirection: "column",
  },
  arrowContainer: {
    alignSelf: "center",
    width: "70%",
  },
  arrow: {
    alignSelf: "flex-end",
    right: 0,
  },
});

export default ScheduleCard;
