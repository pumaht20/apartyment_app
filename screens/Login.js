import * as React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { AppLoading } from "expo";
import Buildings from "../resources/svg/buildings.js";
import { useFonts, Jost_600SemiBold } from "@expo-google-fonts/jost";

const Login = ({ navigation }) => {
  const [emailValue, onChangeTextEmail] = React.useState("");
  const [passwordValue, onChangeTextPassword] = React.useState("");
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.loginWrapper}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>APARTYMENT</Text>
      </View>
      <View style={styles.imageView}>
        <Buildings />
      </View>
      <View style={styles.formView}>
        <Text style={styles.formTitle}>Email address</Text>
        <TextInput
          placeholder=" you@email.com"
          selectionColor="#F72585"
          style={styles.formInputField}
          onChangeText={(text) => onChangeTextEmail(text)}
          value={emailValue}
        />
        <Text style={styles.formTitle}>Password</Text>
        <TextInput
          placeholder=" Your Password"
          secureTextEntry={true}
          selectionColor="#F72585"
          style={styles.formInputField}
          onChangeText={(text) => onChangeTextPassword(text)}
          value={passwordValue}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title="Sign In"
            color="#F72585"
            onPress={() => navigation.navigate("Hub")}
          />
        </View>
        <View
          style={styles.signUpView}
          onStartShouldSetResponder={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
  },

  headerView: {
    flex: 1,
    paddingTop: 50,
  },
  imageView: {
    flex: 2,
  },
  formView: {
    flex: 2,
    flexDirection: "column",
  },

  headerText: {
    color: "#F72585",
    fontFamily: "Jost_600SemiBold",
    fontSize: 36,
  },

  formTitle: {
    fontFamily: "Jost_600SemiBold",
  },

  formInputField: {
    height: 50,
    width: 300,
    borderRadius: 5,
    backgroundColor: "#EFEFEF",
  },

  buttonWrapper: {
    marginTop: 10,
  },

  signUpView: {
    alignSelf: "flex-end",
    marginTop: 20,
  },

  signUpText: {
    color: "#F72585",
  },
});

export default Login;
