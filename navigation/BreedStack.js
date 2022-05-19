import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Breeds from "../screens/Breeds";
import BreedsDetail from "../screens/BreedsDetail";

const Stack = createStackNavigator();

export default function BreedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Breeds" component={Breeds} />
      <Stack.Screen name="BreedsDetail" component={BreedsDetail} />
    </Stack.Navigator>
  );
}
