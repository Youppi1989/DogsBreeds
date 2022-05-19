import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import { getAllBreeds } from "../../api/breeds";

export default function Breeds({ navigation }) {
  const [url, setUrl] = useState();
  const [name, setName] = useState();
  const [breeds, setBreeds] = useState();

  const loadData = async () => {
    const breeds = await axios.get("https://api.thedogapi.com/v1/breeds");

    const data = breeds.data;
    setBreeds(data);
    const dog = data[4];
    console.log(dog.name);
    console.log(dog.image.url);
    setUrl(dog.image?.url);
    setName(dog.name);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onBreedsPress = (breed) => {
    console.log("onBreedsPress");
    console.log(breed);
    navigation.navigate("BreedsDetail", { breed });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={breeds}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onBreedsPress(item)}>
            <Image
              source={{ uri: item.image?.url }}
              style={{ height: 300, width: 300, borderRadius: 12 }}
            />
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    marginTop: 40,
    margin: 19,
    marginBottom: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
  },
  item: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});
