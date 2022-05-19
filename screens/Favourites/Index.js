import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";
import Favourite from "./Favourite";

axios.defaults.headers.common["x-api-key"] =
  "f850d84a-058f-4883-a993-62278d1e664f";

export default function Favourites() {
  const [favourites, setFavourites] = useState();

  const loadFavourites = async () => {
    try {
      const favourites = await axios.get(
        "https://api.thedogapi.com/v1/favourites"
      );
      setFavourites(favourites.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadFavourites();
  }, [favourites]);

  const renderItem = ({ item }) => <Favourite item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
