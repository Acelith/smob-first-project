/*
Stop.js
Autore: Joël Jon Moix
Utilità: Questa è la schermta principale di selezione per le fermate dell'autobus
Utilizzo: 
*/
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

// Importo hook per posizione
import usePosition from "../hooks/usePosition";

const Fermate = () => {
  //const navigation = useNavigation();
  //utilizzo l'hook personalizzato, che ritorna posizione e un eventuale errore
  const { location, errorMessage } = usePosition();
  const [stopsData, setStopsData] = useState([]);
  /*
  //Se l'hook va in errore fermo l'esecuzione a faccio vedere l'errore
  if (errorMessage) {
    return <Text>{errorMessage}</Text>;
  }

  //Aspetto che l'hook abbia finito di caricare la posizione
  if (!location) {
    return <Text>Caricamento fermate...</Text>;
  }
*/

  useEffect(() => {
    const fetchData = async () => {
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
    <View>
      {stopsData.name && (
        <View>
          <Text>${stopsData.station.name}</Text>
        </View>
      )}
    </View>
  );
};
export default Fermate;
