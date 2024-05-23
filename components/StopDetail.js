/*
    StopDetail.js
    Autore: Lara Simonetti
    Utilità: questa componente è stata sviluppata per visualizzare le linee in partenza con direzione e orario di partenza
    Utilizzo: per utilizzare questa componente è necessario includerla in App.js,
    passarle in argomento (props, ...) n dati nel formato yyyy
*/

import moment from "moment";
import { useEffect, useState } from "react";
import { ScrollView, Text, View,  } from "react-native";
import { stylesStops } from "../styles/globalStyles";

import {API_URL} from "../config/config";

const StopDetail = ({ route }) => {
    //console.log(route)
    const [stopData, setStopData] = useState([]);
    const stationId = route.params.id

    useEffect(() => {
        const fetchStopDetailData = async () => {
            const response = await fetch(`${API_URL}/stationboard?id=${stationId}&limit=20`);
            const data = await response.json();
            data.stationboard.map((item) => {
                item.stop.departure = moment(item.stop.departure).format('HH:mm');
            })
            setStopData(data);
            //console.log(data)
        };
        fetchStopDetailData();
    }, []);

    return (
        <ScrollView style={stylesStops.containerScroll}>
            <View>
                {stopData.station && (
                    <View style={stylesStops.containerDetail}>
                        <Text style={stylesStops.stopName}>{stopData.station.name}</Text>
                    </View>
                )}
                {stopData.stationboard && (
                    <View>
                        {stopData.stationboard?.map((linee, index) => (
                            <View key={index} style={stylesStops.cardDetail}>
                                <Text style={stylesStops.lineeName}>Linea 1</Text>
                                <Text>Direzione: {linee.to}</Text>
                                <Text>Partenza: {linee.stop.departure}</Text>
                                {linee.stop.delay != 0 &&
                                    <Text style={stylesStops.late}>Ritardo: {linee.stop.delay}</Text>
                                }
                                
                            </View>
                        ))}
                    </View>
                )}
            </View>
        </ScrollView>
    )
}
export default StopDetail;