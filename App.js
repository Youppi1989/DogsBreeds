import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Breeds from "./screens/Breeds";
import BreedsDetail from "./screens/BreedsDetail";
import Favourites from "./screens/Favourites/Index";

const Stack = createStackNavigator();
function BreedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Breeds" component={Breeds} />
      <Stack.Screen name="BreedsDetail" component={BreedsDetail} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Домой" component={BreedStack} />
      <Tab.Screen name="Избранные" component={Favourites} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
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
