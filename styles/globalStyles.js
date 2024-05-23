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
        margin: 5,
        padding: 10,
    },
    cardDetail: {
        flex: 1,
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff',
        margin: 5,
        padding: 15,
    },
    containerScroll: {
        height: Dimensions.get('window').height,
    },
    stopName: {
        fontWeight: "bold",
        fontSize: "xx-large",
        alignContent: "center",
    },
    lineeName: {
        fontWeight: "bold",
        fontSize: "medium"
    },
    containerDetail: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    late: {
        color: "red",
    },
    searchField: {
      justifyContent: "center",
      alignItems: "center",
        borderRadius: 8,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'whitesmoke',
        margin: 5,
        padding: 10,
        fontWeight: "bold",
        alignContent: "center",
    }
});

export { stylesStops };