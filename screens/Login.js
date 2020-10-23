import * as React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { validateEmail } from "input-validators-js";
import { AppLoading } from "expo";
import Buildings from "../resources/svg/buildings.js";
import { useFonts, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { APILoginUser } from "../services/APIService";

const Login = ({ navigation }) => {
  const [emailValue, onChangeTextEmail] = React.useState("");
  const [passwordValue, onChangeTextPassword] = React.useState("");
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
  });
  const [emailBorderColor, setEmailBorderColor] = React.useState("#EFEFEF");
  const [emailTitle, setEmailTitle] = React.useState("Email");
  const [emailTitleColor, setEmailTitleColor] = React.useState("#000000");

  const [passwordTitle, setPasswordTitle] = React.useState("Password");
  const [passwordTitleColor, setPasswordTitleColor] = React.useState("#000000");
  const [passwordBorderColor, setPasswordBorderColor] = React.useState(
    "#EFEFEF"
  );

  const handleLogin = () => {
    APILoginUser(emailValue, passwordValue).then((res) => {
      if (res.status === 200) {
        navigation.navigate("Hub");
      } else if (res.status === 401) {
        setPasswordBorderColor("#FF3E3E");
        setPasswordTitleColor("#FF3E3E");
        setPasswordTitle("Wrong Password!");
        onChangeTextPassword("");
      } else if (res.status === 404) {
        setEmailBorderColor("#FF3E3E");
        setEmailTitleColor("#FF3E3E");
        setEmailTitle("Email not found!");
      }
    });
  };

  const inputValidation = (field) => {
    switch (field) {
      case 0:
        if (!validateEmail(emailValue)) {
          setEmailTitle("Please enter a correct email address.");
          setEmailTitleColor("#FF3E3E");
          setEmailBorderColor("#FF3E3E");
        } else {
          setEmailTitle("Email address");
          setEmailTitleColor("#25F7BE");
          setEmailBorderColor("#25F7BE");
        }
        break;
      case 1:
        if (!passwordValue.trim()) {
          setPasswordTitle("Please enter password");
          setPasswordTitleColor("#FF3E3E");
          setPasswordBorderColor("#FF3E3E");
        } else {
          setPasswordTitle("Password");
          setPasswordTitleColor("#25F7BE");
          setPasswordBorderColor("#25F7BE");
        }
        break;
      default:
        break;
    }
  };

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
        <Text
          style={{ fontFamily: "Jost_600SemiBold", color: emailTitleColor }}
        >
          {emailTitle}
        </Text>
        <TextInput
          placeholder="elon.musk@tesla.com"
          selectionColor="#F72585"
          textContentType="emailAddress"
          autoCapitalize="none"
          style={{
            height: 50,
            width: 300,
            borderRadius: 5,
            backgroundColor: "#EFEFEF",
            borderColor: emailBorderColor,
          }}
          onChangeText={(text) => onChangeTextEmail(text)}
          onEndEditing={() => inputValidation(0)}
          value={emailValue}
        />
        <Text
          style={{ fontFamily: "Jost_600SemiBold", color: passwordTitleColor }}
        >
          {passwordTitle}
        </Text>
        <TextInput
          placeholder="Your Password"
          secureTextEntry={true}
          selectionColor="#F72585"
          textContentType="password"
          underlineColorAndroid={passwordBorderColor}
          style={{
            height: 50,
            width: 300,
            borderRadius: 5,
            backgroundColor: "#EFEFEF",
            borderColor: passwordBorderColor,
          }}
          onChangeText={(text) => onChangeTextPassword(text)}
          onEndEditing={() => inputValidation(1)}
          value={passwordValue}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title="Sign In"
            color="#F72585"
            onPress={() => handleLogin()}
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
