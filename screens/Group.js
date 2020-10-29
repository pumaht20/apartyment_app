import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
} from "@expo-google-fonts/jost";
import { FontAwesome } from "@expo/vector-icons";

import { APIGetGroup } from "../services/APIService";

const Group = ({ navigation }) => {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([]);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  const getGroup = async () => {
    const {
      group_name,
      group_address,
      group_members,
      group_description,
    } = await APIGetGroup();
    setGroupName(group_name);
    setMembers(group_members);
    setAddress(group_address);
    setDescription(group_description);
  };

  useEffect(() => {
    getGroup();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.viewTitle}>{groupName}</Text>
      <FontAwesome name="user" size={24} color="#4CC9F0" style={styles.icon} />
      <Text style={styles.textContent}>
        {members.map((member) => member + "\n")}
      </Text>

      <FontAwesome
        name="location-arrow"
        size={24}
        color="#4CC9F0"
        style={styles.icon}
      />
      <Text style={styles.textContent}>{address}</Text>

      <Text style={styles.textContent}>{description}</Text>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {
            //Add data
          }}
        >
          <Text style={styles.buttonText}>Join group</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#FAFAFA",
    height: "100%",
  },
  viewTitle: {
    marginLeft: 35,
    marginTop: 61,
    marginBottom: 61,
    color: "#F72585",
    fontSize: 25,
    fontFamily: "Jost_600SemiBold",
  },

  textContent: {
    marginLeft: 80,
    marginTop: -25,
    marginBottom: 45,
    fontSize: 17,
    fontFamily: "Jost_400Regular",
  },

  icon: {
    marginLeft: 38,
  },
  buttonText: {
    color: "#FAFAFA",
    fontSize: 20,
    fontFamily: "Jost_600SemiBold",
  },
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 62,
    marginRight: 62,
    height: 61,
    borderRadius: 10,
    backgroundColor: "#F72585",
    //  boxShadow: "0px 5px 10px rgba(247, 37, 133, 0.33)",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 43,
  },
});

export default Group;
