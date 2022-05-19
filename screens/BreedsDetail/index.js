import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "c90630ec-2ce5-46b9-82fc-13c7a340f17f";

export default function BreedsDetail({ route, navigation }) {
  const { breed } = route.params;
  const [image, setImage] = useState(breed.image);
  const [url, setUrl] = useState(breed.url);
  const [name, setName] = useState(breed.name);
  const [temperament, setTemperament] = useState(breed.temperament);

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
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../../assets/back.png")} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Image
          source={{ uri: image?.url }}
          style={{ height: 300, width: 300, borderRadius: 20 }}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Следующее фото" onPress={() => loadData()} />
        <Button
          title="Добавить в избранное"
          onPress={() => saveToFavourites()}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.temperament}>{temperament}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -10,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 60,
  },
  buttonBack: {
    paddingTop: 10,
    paddingBottom: 11,
    paddingLeft: 15,
    paddingRight: 17,
    marginRight: 14,
  },
  buttons: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },

  name: {
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 20,
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 50,
  },

  temperament: {
    fontWeight: "500",
    fontSize: 25,
    lineHeight: 40,
    textAlign: "center",
    marginBottom: 90,
  },
});
