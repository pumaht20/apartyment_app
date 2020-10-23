import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";

import Login from "./screens/Login";
import Hub from "./screens/Hub";
import CreateGroup from "./screens/CreateGroup";
import Group from "./screens/Group";

// https://reactnavigation.org/docs/stack-navigator/ for more
// information on how StackNavigator works.
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen name="Login" component={Login} options={{ title: "" }} />
        <Stack.Screen name="Hub" component={Hub} />
        <Stack.Screen name="Group" component={Group} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
