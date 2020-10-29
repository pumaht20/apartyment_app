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

const GroupCard = (props) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity
      style={styles.groupCard}
      onPress={() =>
        navigation.navigate("Group", { group_id: props.group.group_id })
      }
    >
      <Text style={styles.groupName}>{props.group.group_name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  groupCard: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    height: 60,
    borderRadius: 10,
    width: "85%",
    backgroundColor: "#EFEFEF",
  },

  groupName: {
    marginLeft: 15,
    alignSelf: "center",
    fontSize: 18,
    fontFamily: "Jost_600SemiBold",
  },
});

export default GroupCard;
