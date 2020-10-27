import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { AppLoading } from "expo";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import { useNavigation } from "@react-navigation/native";

const JoinedEvent = () => {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_300Light,
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>This is in JoinedEvent</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JoinedEvent;
