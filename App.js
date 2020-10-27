import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import Login from "./screens/Login";
import Hub from "./screens/Hub";
import SignUp from "./screens/SignUp";
import Maps from "./screens/Maps";
import CreateEvent from "./screens/CreateEvent";
import CreateEventConfirmation from "./screens/CreateEventConfirmation";
import CreateGroup from "./screens/CreateGroup";
import Event from "./screens/Event";
import EventsOverview from "./screens/EventsOverview";
import Group from "./screens/Group";
import GroupSchedule from "./screens/GroupSchedule";
import TimeslotDetail from "./screens/TimeslotDetail";
import JoinEvent from "./screens/JoinEvent";
import JoinedEvent from "./screens/JoinedEvent";

// https://reactnavigation.org/docs/stack-navigator/ for more
// information on how StackNavigator works.
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="EventsOverview" component={EventsOverview} />
        <Stack.Screen name="Login" component={Login} options={{ title: "" }} />
        <Stack.Screen name="Hub" component={Hub} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
        <Stack.Screen name="JoinEvent" component={JoinEvent} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen
          name="CreateEventConfirmation"
          component={CreateEventConfirmation}
        />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="EventsOverview" component={EventsOverview} />
        <Stack.Screen name="Group" component={Group} />
        <Stack.Screen name="GroupSchedule" component={GroupSchedule} />
        <Stack.Screen name="TimeslotDetail" component={TimeslotDetail} />
        <Stack.Screen name="JoinedEvent" component={JoinedEvent} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
