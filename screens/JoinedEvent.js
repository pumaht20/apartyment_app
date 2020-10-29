import React, { setState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Clipboard,
} from "react-native";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_300Light,
  Jost_800ExtraBold,
} from "@expo-google-fonts/jost";
import Party from "../resources/svg/party";
import {
  APIGetEventGroups,
  APIGetEventInformation,
} from "../services/APIService";
import { AppLoading } from "expo";
import EventGroupCounter from "./counters/EventGroupCounter";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5, AntDesign, Entypo } from "@expo/vector-icons";

const JoinedEvent = ({ route }) => {
  const [groups, setGroups] = React.useState([]);
  const [eventInformation, setEventInformation] = React.useState({});
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_300Light,
    Jost_800ExtraBold,
  });
  const { eventCode } = route.params;

  const copyToClipboard = () => {
    Clipboard.setString(eventCode);
  };

  const storeEventCode = async (value) => {
    try {
      AsyncStorage.setItem("eventCode", value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    const rawGroups = await APIGetEventGroups(eventCode);
    setGroups(rawGroups.data.message);

    const rawEvent = await APIGetEventInformation(eventCode);
    setEventInformation(rawEvent.data.message);
  };
  useEffect(() => {
    getData();
    storeEventCode(eventCode);
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.joinedEventSafe}>
      <ScrollView style={styles.joinedEventScroll}>
        <View style={styles.imageView}>
          <Party style={styles.imageView} />
        </View>
        <Text style={styles.headerText}>Event name</Text>
        <Text style={styles.description}>{eventInformation.description}</Text>
        <View style={styles.eventInformation}>
          <View style={styles.iconTextContainer}>
            <FontAwesome5 name="clock" size={24} color="#4CC9F0" />
            <Text style={styles.informationText}></Text>
          </View>

          <View style={styles.iconTextContainer}>
            <Entypo name="calendar" size={24} color="#4CC9F0" />
            <Text style={styles.informationText}></Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <Text style={styles.codeText}>{eventCode}</Text>
          <TouchableOpacity onPress={() => copyToClipboard()}>
            <LinearGradient
              colors={["#6C63FF", "#4CC9F0"]}
              style={styles.copyButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.copyButtonContent}>
                <AntDesign name="copy1" size={24} color="#fafafa" />
                <Text style={styles.copyButtonText}>Copy</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.createGroupContainer}>
          <Text
            style={{
              fontFamily: "Jost_800ExtraBold",
              fontSize: 18,
              alignSelf: "flex-start",
              marginTop: 45,
            }}
          >
            Groups
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateGroup", { eventCode })}
            style={{ marginRight: 45, marginTop: 45 }}
          >
            <Text
              style={{
                fontFamily: "Jost_300Light",
                fontSize: 18,
                color: "#F72585",
              }}
            >
              Create group
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eventGroupCounterContainer}>
          <EventGroupCounter props={groups} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  joinedEventSafe: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
  },

  joinedEventScroll: {
    flex: 1,
  },

  imageView: {
    marginTop: 100,
    alignSelf: "center",
  },
  headerText: {
    marginTop: 25,
    marginLeft: 45,
    color: "#F72585",
    fontFamily: "Jost_600SemiBold",
    fontSize: 24,
  },

  description: {
    marginTop: 5,
    marginLeft: 45,
    fontFamily: "Jost_300Light",
    fontSize: 18,
  },
  eventInformation: {
    marginLeft: 45,
  },

  informationText: {
    fontFamily: "Jost_300Light",
    fontSize: 18,
    marginLeft: 25,
  },
  iconTextContainer: {
    marginTop: 25,
    flexDirection: "row",
  },

  codeText: {
    marginTop: 40,
    marginLeft: 45,
    fontFamily: "Jost_800ExtraBold",
    color: "#4CC9F0",
    fontSize: 24,
  },

  copyButton: {
    alignSelf: "center",
    marginLeft: 45,
    flexDirection: "row",
    height: 60,
    width: 110,
    borderRadius: 10,
    justifyContent: "center",
  },
  copyButtonContent: {
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  copyButtonText: {
    color: "#fafafa",
    fontFamily: "Jost_800ExtraBold",
    fontSize: 17,
  },

  createGroupContainer: {
    flex: 1,
    marginLeft: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  eventGroupCounterContainer: {
    marginTop: 10,
    marginLeft: 45,
    paddingBottom: 45,
  },
});

export default JoinedEvent;
