import * as React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const Login = ({ navigation }) => {
  return <Button title="login" onPress={() => navigation.navigate("Hub")} />;
};

export default Login;
