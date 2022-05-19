import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import RootNavigator from "./navigation/index";

export default function DogApp() {
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    paddingTop: 20,
    marginLeft: 90,
  },
});
