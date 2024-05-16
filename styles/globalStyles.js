/*
globalStyles.js
Autore: Joël Jon Moix && Lara Simonetti
Utilità: File di stile per le componenti
Utilizzo: chiamare la variabile e selezionare lo stile desiderato
*/
import { StyleSheet, Dimensions } from "react-native";


const stylesStops = StyleSheet.create({
    card: {
      flex: 1,
      borderRadius: 8,
      borderColor: '#000',
      borderWidth: 1,
      backgroundColor: '#fff',
      margin: 10,
      padding: 10,
    },containerScroll: {
      height: Dimensions.get('window').height,
    },
  });

  export { stylesStops };