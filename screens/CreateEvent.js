import * as React from "react";
import { StyleSheet, Text, TextInput, Button, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Jost_800ExtraBold, Jost_500Medium, } from "@expo-google-fonts/jost";
import { AppLoading } from "expo";
import { validateDateFormatDayMonthYear } from "input-validators-js";





const CreateEvent = ({ navigation }) => {
  const [eventTitle, onChangeEventTitle] = React.useState("");
  const [time, onChangeTime] = React.useState("");
  const [groupSize, onChangeGroupSize] = React.useState("");
  const [dateValue, onChangeDate] = React.useState("");

  const [DateTitle, setdateTitle] = React.useState("Date of party");
  const [DateTitleColor, setDateTitleColor] = React.useState("#000000");
  const [DateBorderColor, setDateBorderColor] = React.useState(
    "#EFEFEF"
  );

  const [fontsLoaded] = useFonts({
    Jost_800ExtraBold,
    Jost_500Medium,
  });

  const inputValidation = () => {
    console.log("hello");
    if (!validateDateFormatDayMonthYear(dateValue)) {
      setdateTitle("Date of party: Enter a correct date format you idiot");
      setDateTitleColor("#FF3E3E");
      setDateBorderColor("#FF3E3E");
    } else {
      setdateTitle("Date of partys");
      setDateTitleColor("#25F7BE");
      setDateBorderColor("#25F7BE");
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.createEventWrapper}>
      <View style={styles.createEventWrapper}>
        <View>
          <TouchableOpacity style={styles.back}>
            <Ionicons name="ios-arrow-back" size={24} color="black" />
            <Text style={styles.backLink} onPress={navigation.goBack}>Back</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.h1}>Create event</Text>
        <Text style={styles.p}>Fill out the fields below to create your event!</Text>
        <View>
          <Text style={styles.formLabel}>Event title</Text>
          <TextInput name="eventTitle" style={styles.formInput} placeholder="e.g. Bike Party" required></TextInput>

          <Text style={{
            fontFamily: "Jost_500Medium",
            fontSize: 15,
            marginBottom: 10,
            marginLeft: 5,
            color: DateTitleColor,
          }}>{DateTitle}</Text>

          <TextInput name="date" style={{
            borderRadius: 15,
            height: 45,
            backgroundColor: '#EFEFEF',
            marginBottom: 15,
            padding: 15,
            fontFamily: "Jost_500Medium",
            borderColor: DateBorderColor,
          }}
            placeholder="DD/MM/YY"
            onChangeText={(text) => onChangeDate(text)}
            onEndEditing={() => inputValidation()}
            value={dateValue}
          ></TextInput>

          <Text style={styles.formLabel}>Time</Text>
          <TextInput name="time"
            placeholder="HH:MM/HH:MM"
            style={styles.formInput} required></TextInput>

          <Text style={styles.formLabel}>Description</Text>
          <TextInput name="desc" style={styles.formInputDesc} multiline={true} required></TextInput>

          <Text style={styles.formLabel}>Max group size</Text>
          <TextInput
            name="groupSize"
            style={styles.formInput}
            placeholder=""
            keyboardType='numeric'
            required />

          <TouchableOpacity style={styles.viewEventButton} onPress={() => navigation.navigate("CreateEventConfirmation")}>
            <Text style={styles.viewEventButtonText}>View event</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  createEventWrapper: {
    padding: 20,
    backgroundColor: '#fafafa',
    flex: 1,
  },

  back: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },

  backLink: {
    fontFamily: "Jost_500Medium",
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
  },

  h1: {
    fontFamily: "Jost_800ExtraBold",
    fontSize: 25,
    color: '#F72585',
    marginBottom: 5,
  },

  p: {
    color: "#454545",
    fontSize: 15,
    marginBottom: 20,
    fontFamily: "Jost_500Medium",
  },

  formLabel: {
    fontFamily: "Jost_500Medium",
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 5,
  },

  formInput: {
    borderRadius: 15,
    height: 45,
    backgroundColor: '#EFEFEF',
    marginBottom: 15,
    padding: 15,
    fontFamily: "Jost_500Medium",
  },

  formInputDesc: {
    fontFamily: "Jost_500Medium",
    borderRadius: 15,
    textAlignVertical: "top",
    backgroundColor: '#EFEFEF',
    marginBottom: 15,
    padding: 15,
    lineHeight: 23,
    height: 100,
  },

  viewEventButton: {
    backgroundColor: '#F72585',
    width: 200,
    borderRadius: 15,
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",

  },

  viewEventButtonText: {
    fontFamily: "Jost_800ExtraBold",
    fontSize: 17,
    color: "#fafafa",
    textAlign: "center",
    padding: 17,
  },

});

export default CreateEvent;
