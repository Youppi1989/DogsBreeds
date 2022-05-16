import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";

export default function Favourites() {
  const [favourites, setFavourites] = useState();

  const saveToFavourites = async () => {
    try {
      const result = await axios.post(
        "https://api.thedogapi.com/v1/favourites",
        {
          image_id: image.id,
        }
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => <Favourites item={item} />;

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="Добавить в избранное" onPress={() => saveToFavourites()} />
      s
    </SafeAreaView>
  );
}
