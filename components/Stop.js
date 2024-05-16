/*
Stop.js
Autore: Joël Jon Moix
Utilità: Questa è la schermta principale di selezione per le fermate dell'autobus
Utilizzo: 
*/
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { stylesStops } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
// Importo hook per posizione
import usePosition from "../hooks/usePosition";

// Importo stopDetail
import StopDetail from "../components/StopDetail";
import { ScrollView } from "react-native-web";

const Fermate = () => {
  const navigation = useNavigation();
  const goto = (id) => {
    navigation.push("StopDetail", { id: id });
  };
  //utilizzo l'hook personalizzato, che ritorna posizione e un eventuale errore
  const { location, errorMessage } = usePosition();
  const [stopsData, setStopsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //Faccio la richiesta API
      const API_URL = "https://transport.opendata.ch/v1/";
      const API_URI = `locations?x=${location.coords.latitude}&y=${location.coords.logitude}&type=all`;

      const response = await fetch(`${API_URL}${API_URI}`);

      const data = await response.json();
      setStopsData(data);
    };
    if (location?.coords) {
      fetchData();
    }
  }, [location]);
  return (
    <ScrollView style={stylesStops.containerScroll}>
      {stopsData.stations &&
        stopsData.stations?.slice(1).map((fermata) => (
          <View key={fermata.id}>
            <Pressable
              style={stylesStops.card}
              onPress={() => goto(fermata.id)}
            >
              <Text>{fermata.name}</Text>
            </Pressable>
          </View>
        ))}
    </ScrollView>
  );
};
export default Fermate;
