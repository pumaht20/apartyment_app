import * as React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.loginWrapper}>
      <Button
        style={styles.loginButton}
        title="LOGIN"
        onPress={() => navigation.navigate("Hub")}
      />
    </View>
  );
};

// Styling example. If an inline style takes more than
// one(1) parameters, use this instead:

const styles = StyleSheet.create({
  loginWrapper: {
    marginTop: 100,
  },

  loginButton: {
    width: 24,
    height: 16,
  },
});

export default Login;
