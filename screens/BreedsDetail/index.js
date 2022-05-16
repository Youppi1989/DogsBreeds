import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "c90630ec-2ce5-46b9-82fc-13c7a340f17f";

export default function BreedsDetail({ route }) {
  const { breed } = route.params;
  const [image, setImage] = useState(breed.image);
  const [name, setName] = useState(route.params.name);
  const [temperament, setTemperament] = useState(route.params.temperament);

  const loadData = async () => {
    // const image = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breed_id}&include_breeds=false`);

    const image = await axios.get(
      "https://api.thedogapi.com/v1/images/search",
      {
        params: {
          breed_id: breed.id,
        },
      }
    );
    const data = image.data;
    const i = data[0];
    console.log(i);
    console.log("image url", i.url);
    setImage(i);
  };

  useEffect(() => {
    loadData();
  }, []);

  const str = `Hello, guy`;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image?.url }} style={{ height: 300, width: 300 }} />
      <Button title="Следующее фото" onPress={() => loadData()} />
      <Button title="Добавить в избранное" onPress={() => saveToFavourites()} />
      <Text style={styles.paragraph}>
        {str}
        This is the best DoggApp in the World.
      </Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.temperament}>{temperament}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 60,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  temperament: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 46,
  },
});
