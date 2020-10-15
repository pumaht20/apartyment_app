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
import { POST_REQUEST_sign_up_new_user } from "../services/APIService";

const SignUp = () => {
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

	async function onSubmit(
		nameValue,
		emailValue,
		phonenumberValue,
		passwordValue,
		passwordConfirmValue
	) {
		console.log(
			"Name: ",
			nameValue,
			" Email: ",
			emailValue,
			" Phonenumber: ",
			phonenumberValue,
			" Password: ",
			passwordValue,
			" PasswordConfirm: ",
			passwordConfirmValue
		);

		const FIREBASE_ADDRESS =
			"https://us-central1-apartyment-d511d.cloudfunctions.net/app/";

		await axios
			.post(FIREBASE_ADDRESS + "register_user", {
				email: emailValue,
				name: nameValue,
				phonenumber: phonenumberValue,
				password: passwordValue,
			})
			.then(function (response) {
				console.log("RESPONSE STATUS: ", response.status);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<SafeAreaView style={styles.loginWrapper}>
			<ScrollView style={styles.loginScrollView}>
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
					<Text style={styles.formTitle}>Email address</Text>
					<TextInput
						placeholder=" you@email.com"
						autoCapitalize="none"
						selectionColor="#F72585"
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
							onPress={() =>
								onSubmit(
									nameValue,
									emailValue,
									phonenumberValue,
									passwordValue,
									passwordConfirmValue
								)
							}
						/>
					</View>
				</View>
			</ScrollView>
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

	loginScrollView: {
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
