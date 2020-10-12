import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { GET_REQUEST_all_application_users } from "../services/APIService";

const Hub = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const raw = await GET_REQUEST_all_application_users();
    setUserData(raw);
  };

  console.log("This is the data i got from route: ", userData);

  useEffect(() => {
    getData();
  }, []);
  return <Text>This is in the hub</Text>;
};

export default Hub;
