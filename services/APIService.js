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
