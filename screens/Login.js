import * as React from "react";
import { StyleSheet, Text, Button, View, SafeAreaView } from "react-native";
import Buildings from "../resources/svg/buildings.js";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.loginWrapper}>
      <Text style={styles.headerText}>APARTYMENT</Text>
      <Buildings style={styles.buildings} />
      <View style={styles.loginForm}>
        <Button
          style={styles.loginButton}
          title="LOGIN"
          onPress={() => navigation.navigate("Hub")}
        />
      </View>
    </SafeAreaView>
  );
};

// Styling example. If an inline style takes more than
// one(1) parameters, use this instead:

const styles = StyleSheet.create({
  loginWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
  },

  headerText: {
    color: "#F72585",
  },

  buildings: {
    padding: 50,
  },

  loginForm: { height: 50, color: "#2119AB" },

  loginButton: { color: "#F72585" },
});

export default Login;
