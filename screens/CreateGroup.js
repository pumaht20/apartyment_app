import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import { AppLoading } from "expo";
import { useFonts, Jost_600SemiBold } from "@expo-google-fonts/jost";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { APICreateGroup } from "../services/APIService";

const CreateGroup = ({ navigation, eventCode }) => {
  const [groupName, setGroupName] = useState(null);
  const [address, setAddress] = useState(null);
  const [description, setDescription] = useState(null);
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const getUserInfo = async () => {
    try {
      AsyncStorage.getItem("userInfo").then((res) => {
        const parsedData = res != null ? JSON.parse(res) : null;
        if (!parsedData) navigation.navigate("Login");
        console.log(parsedData);
        return parsedData;
      });
    } catch (e) {
      console.log(e);
      navigation.navigate("Login");
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.viewTitle}>Create group</Text>
      <Text style={styles.inputLabel}>Group name</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setGroupName(text)}
        value={groupName}
      />
      <Text style={styles.inputLabel}>Address to your station</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <Text style={styles.inputLabel}>Description</Text>
      <TextInput
        style={styles.textInputDescription}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <View style={styles.bottom}>
        <TouchableHighlight
          style={styles.buttonWrapper}
          underlayColor="#F85EA5"
          onPress={() => {
            getUserInfo().then((res) => {
              console.log("res: ", res);
              const { user_id, user_name, user_phonenumber, user_email } = res;
              APICreateGroup(
                user_id,
                user_name,
                user_phonenumber,
                user_email,
                groupName,
                address,
                "WWAMW"
              ).then(navigation.navigate("Hub"));
            });
            //Add data
          }}
        >
          <Text style={styles.buttonText}>Create group</Text>
        </TouchableHighlight>
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
  textInput: {
    height: 51,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 35,
    marginRight: 35,
    backgroundColor: "#EFEFEF",
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },

  textInputDescription: {
    height: 75,
    paddingBottom: 25,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 35,
    marginRight: 35,
    backgroundColor: "#EFEFEF",
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  inputLabel: {
    marginLeft: 35,
    marginTop: 20,
    fontFamily: "Jost_600SemiBold",
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
    // boxShadow: "0px 5px 10px rgba(247, 37, 133, 0.33)",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 43,
  },
});

export default CreateGroup;
