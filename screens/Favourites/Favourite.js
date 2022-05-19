import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "f850d84a-058f-4883-a993-62278d1e664f";

export default function saveFavourite({ item }) {
  const favourite = item.id;
  const del = async () => {
    try {
      const result = axios.delete(
        `https://api.thedogapi.com/v1/favourites/${favourite}`
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.dogs}>
      <TouchableOpacity
        onPress={() => del()}
        style={{ position: "absolute", zIndex: 2, left: 50 }}
      >
        <Image source={require("../../assets/trash1.png")} />
      </TouchableOpacity>
      <Image source={{ uri: item?.image.url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  dogs: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 15,
    borderRadius: 12,
  },
});
