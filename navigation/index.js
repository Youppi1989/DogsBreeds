import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./TabNavigator";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
