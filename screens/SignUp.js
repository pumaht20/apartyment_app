import * as React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
const axios = require("axios").default;
import { AppLoading } from "expo";
import Buildings from "../resources/svg/buildings.js";
import { useFonts, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { APIRegisterUser } from "../services/APIService";

const SignUp = ({ navigation }) => {
  const [nameValue, onChangeTextName] = React.useState("");
  const [emailValue, onChangeTextEmail] = React.useState("");
  const [phonenumberValue, onChangeTextPhonenumber] = React.useState("");
  const [passwordValue, onChangeTextPassword] = React.useState("");
  const [passwordConfirmValue, onChangeTextPasswordConfirm] = React.useState(
    ""
  );
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
  });

  const [emailTitle, setEmailTitle] = React.useState("Email address");
  const [emailTitleColor, setEmailTitleColor] = React.useState("#000000");
  const [emailInputBorder, setEmailInputBorder] = React.useState("#EFEFEF");

  const onSubmitUser = () => {
    APIRegisterUser(
      emailValue,
      nameValue,
      phonenumberValue,
      passwordValue
    ).then((res) => {
      if (res.status === 201) {
        navigation.navigate("Hub");
      } else if (res.status === 409) {
        setEmailTitle("This email is already registered!");
        setEmailTitleColor("#FF3E3E");
        setEmailInputBorder("#FF3E3E");
      }
    });
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.signUpWrapper}>
      <ScrollView style={styles.signUpScrollView}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>SIGN UP</Text>
        </View>
        <View style={styles.imageView}>
          <Buildings />
        </View>
        <View style={styles.formView}>
          <Text style={styles.formTitle}>Name</Text>
          <TextInput
            placeholder="Name Lastname"
            selectionColor="#F72585"
            style={styles.formInputField}
            onChangeText={(text) => onChangeTextName(text)}
            value={nameValue}
          />
          <Text
            style={{ fontFamily: "Jost_600SemiBold", color: emailTitleColor }}
          >
            {emailTitle}
          </Text>
          <TextInput
            placeholder=" you@email.com"
            autoCapitalize="none"
            selectionColor="#F72585"
            underlineColorAndroid={emailInputBorder}
            style={styles.formInputField}
            onChangeText={(text) => onChangeTextEmail(text)}
            value={emailValue}
          />
          <Text style={styles.formTitle}>Phonenumber</Text>
          <TextInput
            placeholder="07X XXX XX XX"
            selectionColor="#F72585"
            keyboardType={"numeric"}
            style={styles.formInputField}
            onChangeText={(text) => onChangeTextPhonenumber(text)}
            value={phonenumberValue}
          />

          <Text style={styles.formTitle}>Password</Text>
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            selectionColor="#F72585"
            style={styles.formInputField}
            onChangeText={(text) => onChangeTextPassword(text)}
            value={passwordValue}
          />
          <Text style={styles.formTitle}>Confirm Password</Text>
          <TextInput
            placeholder=" Your Password"
            secureTextEntry={true}
            selectionColor="#F72585"
            style={styles.formInputField}
            onChangeText={(text) => onChangeTextPasswordConfirm(text)}
            value={passwordConfirmValue}
          />
          <View style={styles.buttonWrapper}>
            <Button
              title="Sign Up"
              color="#F72585"
              onPress={() => onSubmitUser()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
  },

  signUpScrollView: {
    flex: 1,
  },

  headerView: {
    flex: 1,
    paddingTop: 50,
  },
  imageView: {
    flex: 2,
  },
  formView: {
    flex: 3,
  },

  headerText: {
    color: "#F72585",
    fontFamily: "Jost_600SemiBold",
    fontSize: 36,
    alignSelf: "center",
    marginBottom: 50,
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
});

export default SignUp;
