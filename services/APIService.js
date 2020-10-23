import axios from "axios";

const FIREBASE_ADDRESS =
  "https://us-central1-apartyment-d511d.cloudfunctions.net/app/";

export const APIRegisterUser = async (email, name, phonenumber, password) => {
  const response = await axios
    .post(FIREBASE_ADDRESS + "register_user", {
      email: email,
      name: name,
      phonenumber: phonenumber,
      password: password,
    })
    .then((res) => res)
    .catch((err) => {
      return err.response;
    });
  return response;
};

export const APILoginUser = async (email, password) => {
  const response = await axios
    .post(FIREBASE_ADDRESS + "login_user", {
      email: email,
      password: password,
    })
    .then((res) => res)
    .catch((err) => {
      return err.response;
    });
  return response;
};

export const APIGetGroupSchedule = async (eventCode, groupName) => {
  const response = await axios
    .get(FIREBASE_ADDRESS + "get_group_schedule", {
      params: {
        event_code: eventCode,
        group_name: groupName,
      },
    })
    .then((res) => res)
    .catch((err) => {
      return err.response;
    });
  return response;
};

export const APIGetTimeslotHostDetails = async (eventCode, hostGroup) => {
  const response = await axios
    .get(FIREBASE_ADDRESS + "get_host_station", {
      params: {
        event_code: eventCode,
        host_group: hostGroup,
      },
    })
    .then((res) => res)
    .catch((err) => {
      return err.response;
    });
  return response;
};

export const APIGetGroup = async () => {
  try {
    // let response = await axios.get(FIREBASE_ADDRESS + "get_event_groups");
    //  return response.data;
    return {
      group_name: "Group 1",
      group_address: "Tvistevägen 1",
      group_members: ["Alfred Persson", "Adam Bylund", "Dardan Dauti"],
      group_description: "portkod 1234",
    };
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const APICreateGroup = async (
  user_id,
  user_name,
  user_phonenumber,
  user_email,
  group_name,
  group_address,
  event_code
) => {
  try {
    console.log("DATAAaaaaaaa");
    console.log(user_id);
    console.log(user_name);
    console.log(user_phonenumber);
    console.log(user_email);
    console.log(group_name);
    console.log(group_address);
    console.log(event_code);

    const response = await axios.post(FIREBASE_ADDRESS + "create_group", {
      user_id,
      user_name,
      user_phonenumber,
      user_email,
      group_name,
      group_address,
      event_code,
    });
    console.log(response);
    console.log("message: ");
    console.log(response.message);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
