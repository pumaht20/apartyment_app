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

export const APIJoinEvent = async (
  userId,
  userName,
  userEmail,
  userPhonenumber,
  eventCode
) => {
  const response = await axios
    .post(FIREBASE_ADDRESS + "join_event", {
      user_id: userId,
      user_name: userName,
      user_email: userEmail,
      user_phonenumber: userPhonenumber,
      event_code: eventCode,
    })
    .then((res) => res)
    .catch((err) => {
      return err.response;
    });
  return response;
};

export const APIGetEventGroups = async (eventCode) => {
  const response = await axios
    .get(FIREBASE_ADDRESS + "get_event_groups", {
      params: {
        event_code: eventCode,
      },
    })
    .then((res) => res)
    .catch((err) => {
      return err.response;
    });
  return response;
};
