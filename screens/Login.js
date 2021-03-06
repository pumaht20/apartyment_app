import * as React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { validateEmail } from "input-validators-js";
import { AppLoading } from "expo";
import Buildings from "../resources/svg/buildings.js";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_800ExtraBold,
} from "@expo-google-fonts/jost";
import { APILoginUser } from "../services/APIService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [emailValue, onChangeTextEmail] = React.useState("");
  const [passwordValue, onChangeTextPassword] = React.useState("");
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_800ExtraBold,
  });
  const [emailBorderColor, setEmailBorderColor] = React.useState("#EFEFEF");
  const [emailTitle, setEmailTitle] = React.useState("Email");
  const [emailTitleColor, setEmailTitleColor] = React.useState("#000000");

  const [passwordTitle, setPasswordTitle] = React.useState("Password");
  const [passwordTitleColor, setPasswordTitleColor] = React.useState("#000000");
  const [passwordBorderColor, setPasswordBorderColor] = React.useState(
    "#EFEFEF"
  );

  const [loading, setLoading] = React.useState(false);

  const storeUserData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      AsyncStorage.setItem("userInfo", jsonValue).then((res) => {
        navigation.navigate("Hub");
      });
    } catch (e) {
      // saving error
    }
  };


  const handleLogin = () => {
    setLoading(true);
    APILoginUser(emailValue, passwordValue).then((res) => {
      if (res.status === 200) {

        setLoading(false);
        navigation.navigate("Hub");
        storeUserData(res.data.message);

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
      <ScrollView style={{ flex: 1 }}>
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
            style={{
              fontFamily: "Jost_600SemiBold",
              color: passwordTitleColor,
            }}
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
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleLogin()}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.signUpView}
            onStartShouldSetResponder={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </View>
        </View>
      </ScrollView>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            size="large"
            animating={loading}
            //Text with the Spinner
            textContent={"Skickar in feedback..."}
            //Text style of the Spinner Text
            textStyle={{ color: "blue", opacity: "1.0" }}
          />
        </View>
      )}
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
    marginTop: 100,
    flex: 2,
  },
  formView: {
    marginTop: 100,
    flex: 2,
    flexDirection: "column",
  },

  headerText: {
    color: "#F72585",
    fontFamily: "Jost_600SemiBold",
    alignSelf: "center",
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

  loginButton: {
    alignSelf: "center",
    backgroundColor: "#F72585",
    width: 300,
    borderRadius: 15,
  },

  loginButtonText: {
    fontFamily: "Jost_800ExtraBold",
    fontSize: 17,
    color: "#fafafa",
    textAlign: "center",
    padding: 17,
  },
  loading: {
    position: "absolute",
    alignItems: "center",
    padding: 50,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderColor: "black",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default Login;
