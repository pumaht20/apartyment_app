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
import {
  validateEmail,
  validateName,
  validatePasswordStrength,
} from "input-validators-js";
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
  const [emailBorderColor, setEmailBorderColor] = React.useState("#EFEFEF");

  const [nameTitle, setNameTitle] = React.useState("Name");
  const [nameTitleColor, setNameTitleColor] = React.useState("#000000");
  const [nameBorderColor, setNameBorderColor] = React.useState("#EFEFEF");

  const [passwordTitle, setPasswordTitle] = React.useState("Password");
  const [passwordTitleColor, setPasswordTitleColor] = React.useState("#000000");
  const [passwordBorderColor, setPasswordBorderColor] = React.useState(
    "#EFEFEF"
  );

  const [confirmPasswordTitle, setConfirmPasswordTitle] = React.useState(
    "Confirm Password"
  );
  const [
    confirmPasswordTitleColor,
    setConfirmPasswordTitleColor,
  ] = React.useState("#000000");
  const [
    confirmPasswordBorderColor,
    setConfirmPasswordBorderColor,
  ] = React.useState("#EFEFEF");

  const onSubmitUser = () => {
    APIRegisterUser(
      emailValue,
      nameValue,
      phonenumberValue,
      passwordValue
    ).then((res) => {
      if (res.status === 201) {
        console.log("res: ", res.status);
        navigation.navigate("Hub");
      } else if (res.status === 409) {
        setEmailTitle("This email is already registered!");
        setEmailTitleColor("#FF3E3E");
        setEmailBorderColor("#FF3E3E");
      }
    });
  };

  const inputValidation = (field) => {
    switch (field) {
      case 0:
        if (!validateName(nameValue)) {
          setNameTitle("You've submitted invalid characters.");
          setNameTitleColor("#FF3E3E");
          setNameBorderColor("#FF3E3E");
        } else {
          setNameTitle("Name");
          setNameTitleColor("#23F7BE");
          setNameBorderColor("#23F7BE");
        }
        break;
      case 1:
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
      case 2:
        break;
      case 3:
        if (
          validatePasswordStrength(passwordValue).passwordStrength === "weak"
        ) {
          setPasswordTitle("Weak password!");
          setPasswordTitleColor("#FF3E3E");
          setPasswordBorderColor("#FF3E3E");
        } else if (
          validatePasswordStrength(passwordValue).passwordStrength === "medium"
        ) {
          setPasswordTitle("Acceptable password, could be stronger");
          setPasswordTitleColor("#F7D725");
          setPasswordBorderColor("#F7D725");
        } else if (
          validatePasswordStrength(passwordValue).passwordStrength === "strong"
        ) {
          setPasswordTitle("Strong password");
          setPasswordTitleColor("#25F7BE");
          setPasswordBorderColor("#25F7BE");
        }
        break;
      case 4:
        if (passwordConfirmValue !== passwordValue) {
          setConfirmPasswordTitle("Please re-enter the same password.");
          setConfirmPasswordTitleColor("#FF3E3E");
          setConfirmPasswordBorderColor("#FF3E3E");
        } else {
          setConfirmPasswordTitle("Confirm Password");
          setConfirmPasswordTitleColor("#25F7BE");
          setConfirmPasswordBorderColor("#25F7BE");
        }
        break;
    }
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
          <Text
            style={{ fontFamily: "Jost_600SemiBold", color: nameTitleColor }}
          >
            {nameTitle}
          </Text>
          <TextInput
            placeholder="Name Lastname"
            selectionColor="#F72585"
            underlineColorAndroid={nameBorderColor}
            style={styles.formInputField}
            onChangeText={(text) => onChangeTextName(text)}
            onEndEditing={() => inputValidation(0)}
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
            underlineColorAndroid={emailBorderColor}
            style={styles.formInputField}
            onChangeText={(text) => onChangeTextEmail(text)}
            onEndEditing={() => inputValidation(1)}
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
            style={styles.formInputField}
            underlineColorAndroid={passwordBorderColor}
            onChangeText={(text) => onChangeTextPassword(text)}
            onEndEditing={() => inputValidation(3)}
            value={passwordValue}
          />
          <Text
            style={{
              fontFamily: "Jost_600SemiBold",
              color: confirmPasswordTitleColor,
            }}
          >
            {confirmPasswordTitle}
          </Text>
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            selectionColor="#F72585"
            style={styles.formInputField}
            underlineColorAndroid={confirmPasswordBorderColor}
            onChangeText={(text) => onChangeTextPasswordConfirm(text)}
            onEndEditing={() => inputValidation(4)}
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
