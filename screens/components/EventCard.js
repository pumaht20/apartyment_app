import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5
} from "@expo/vector-icons";
import { useFonts, Jost_600SemiBold } from "@expo-google-fonts/jost";

const EventCard = props => {
  const eventName = props.event.eventName;
  const date = props.event.date;
  const code = props.event.code;
  const iconName = props.event.iconName;
  const type = props.event.type;

  const renderIcon = icontype => {
    if (icontype === "ion-icon") {
      return <Ionicons name={iconName} size={35} style={styles.eventIcon} />;
    } else if (icontype === "FontAwesome5") {
      return (
        <FontAwesome5 name={iconName} size={30} style={styles.eventIcon} />
      );
    } else if (icontype === "Material-Community-icons") {
      return (
        <MaterialCommunityIcons
          name={iconName}
          size={35}
          style={styles.eventIcon}
        />
      );
    }
  };

  const showUpcomingEventsCode = givenCode => {
    if (givenCode !== "") {
      return (
        <View style={styles.eventCodeContainer}>
          <Text style={styles.description}>CODE:</Text>
          <Text style={styles.information}>{givenCode}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.layoutContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.eventNameContainer}>
            <View style={styles.iconContainer}>{renderIcon(type)}</View>
            <Text style={styles.eventName}>{eventName}</Text>
          </View>
          <View style={styles.infoContainer}>
            {showUpcomingEventsCode(code)}
            <View style={styles.eventDateContainer}>
              <Text style={styles.description}>DATE:</Text>
              <Text style={styles.information}>{date}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Ionicons name="ios-arrow-forward" size={35} color="#4CC9F0" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: 100,
    borderRadius: 15,
    shadowColor: "#585757",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.27,
    shadowRadius: 2.5,
    marginVertical: 8
  },
  layoutContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: "100%"
  },
  leftContainer: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  eventNameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  iconContainer: {},
  eventIcon: {
    color: "#4CC9F0",
    alignSelf: "stretch"
  },
  eventName: {
    fontSize: 20,
    paddingLeft: 15,
    fontWeight: "bold"
  },
  eventCodeContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 2,
    paddingHorizontal: 10
  },
  eventDateContainer: {
    flexDirection: "row",
    paddingTop: 2,
    paddingBottom: 6.5,
    paddingHorizontal: 10
  },
  description: {
    color: "#AFAFAF",
    fontSize: 15,
    paddingRight: 5
  },
  information: {
    fontSize: 15,
    fontWeight: "bold"
  },
  infoContainer: {
    justifyContent: "flex-end"
  },
  rightContainer: {
    justifyContent: "center",
    paddingRight: 10
  }
});

export default EventCard;
