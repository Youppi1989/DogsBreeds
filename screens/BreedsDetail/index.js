import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "c90630ec-2ce5-46b9-82fc-13c7a340f17f";

export default function BreedDetail() {
  const [image, setImage] = useState();

  const loadData = async () => {
    const breed_id = 222;
    // const image = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breed_id}&include_breeds=false`);

    const image = await axios.get(
      "https://api.thedogapi.com/v1/images/search",
      {
        params: {
          breed_id,
        },
      }
    );
    const data = image.data;
    const i = data[0];
    console.log(i);
    console.log("image url", i.url);
    setImage(i);
  };

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

  useEffect(() => {
    // component did mount
    loadData();
  }, []);

  const name = "dog lover";
  const str = `Hello ${name}!!!\n`;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image?.url }} style={{ height: 300, width: 300 }} />
      <Button title="Next photo" onPress={() => loadData()} />
      <Button title="Save to favourite" onPress={() => saveToFavourites()} />
      <Text style={styles.paragraph}>
        {str}
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
