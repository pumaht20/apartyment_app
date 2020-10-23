import * as React from "react";
import { StyleSheet, Text, TextInput, Button, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Jost_800ExtraBold, Jost_500Medium, } from "@expo-google-fonts/jost";
import { AppLoading } from "expo";



const CreateEvent = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const [fontsLoaded] = useFonts({
    Jost_800ExtraBold,
    Jost_500Medium,
  });

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
          <Text style={styles.formLabel}>Date of party</Text>
          <TextInput name="date" style={styles.formInput} required></TextInput>
          <Text style={styles.formLabel}>Time</Text>
          <TextInput name="time" style={styles.formInput} required></TextInput>
          <Text style={styles.formLabel}>Description</Text>
          <TextInput name="desc" style={styles.formInputDesc} required></TextInput>

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
    marginLeft: 5
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
    borderRadius: 15,
    height: 80,
    backgroundColor: '#EFEFEF',
    marginBottom: 15,
  },

  viewEventButton: {
    backgroundColor: '#F72585',
    width: 200,
    borderRadius: 15,
    marginTop: 60,
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
