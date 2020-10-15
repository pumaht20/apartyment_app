const axios = require("axios").default;

const FIREBASE_ADDRESS =
  "https://us-central1-apartyment-d511d.cloudfunctions.net/app/";

export const GET_REQUEST_root = () => {
  return fetch(FIREBASE_ADDRESS + "root")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};

export const GET_REQUEST_all_application_users = async () => {
  try {
    let response = await fetch(FIREBASE_ADDRESS + "get_users");
    let json = await response.json();
    return json.message;
  } catch (error) {
    console.error(error);
  }
};

export const PUT_REQUEST_sign_up_new_user = async (
  email,
  name,
  phonenumber,
  password
) => {
  console.log("hello");
  axios
    .post(FIREBASE_ADDRESS + "register_user", {
      email: email,
      name: name,
      phonenumber: phonenumber,
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
