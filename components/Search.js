/*
    RowStopDetail.js
    Autore: Joël Moix
    Utilità: questa componente è stata sviluppata per ...
    Utilizzo: per utilizzare questa componente è necessario includerla ...., 
passarle in argomento (props, ...) n dati nel formato yyyy
*/
import { useEffect, useState } from "react";
import { ScrollView, Text, View, TextInput, Pressable } from "react-native";
import { stylesStops } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import StopDetail from "../components/StopDetail";
import { API_URL } from "../config/config";

const SearchStop = () => {
  const [query, setQuery] = useState("");
  const [stopData, setStopData] = useState([]);

  const navigation = useNavigation();
  const goto = (id) => {
    navigation.push("StopDetail", { id: id });
  };

  useEffect(() => {
    if (query !== "") {
      setStopData("");
      const fetchStopDetailData = async () => {
        const response = await fetch(`${API_URL}locations?query=${query}&type=all`);
        const data = await response.json();
        setStopData(data.stations);
      };
      fetchStopDetailData();
    }
  }, [query]);

  return (
    <ScrollView style={stylesStops.containerScroll}>
      <View style={stylesStops.containerDetail}>
        <TextInput
          style={stylesStops.searchField}
          onChangeText={(newText) => setQuery(newText)}
          placeholder="Cerca fermata"
        />
      </View>
      {stopData && (
        <View>
          {stopData.map((fermata, index) => (
            <View key={fermata.id}>
              <Pressable
                style={stylesStops.card}
                onPress={() => goto(fermata.id)}
              >
                <Text>{fermata.name}</Text>
              </Pressable>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default SearchStop;
