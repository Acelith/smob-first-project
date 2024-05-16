/*
    StopDetail.js
    Autore: Lara Simonetti
    Utilità: questa componente è stata sviluppata per visualizzare le linee in partenza con direzione e orario di partenza
    Utilizzo: per utilizzare questa componente è necessario includerla in App.js,
    passarle in argomento (props, ...) n dati nel formato yyyy
*/

import moment from "moment";
import { useEffect } from "react";
import { Text, View } from "react-native";

const API_URL = "http://transport.opendata.ch/v1/stationboard";
const formattedDate = moment('').format('YYYY-MM-DD HH:mm:ss')

const StopDetail = (details) => {
    const [stopData, setStopData] = useState([]);

    useEffect(() => {
        const fetchStopDetailData = async () => {
            const response = await fetch(`${API_URL}?id=${details.station.id}&limit=20`);
            const data = await response.json();
            setStopData(data);
        };
        fetchStopDetailData();
    }, []);

    return (
        <View>
            <Text>Linea 1</Text>
            {stopData.stationboard && (
                <View>
                {stopData.stationboard.map((index) => (
                    <View>
                    <Text key={index}>{stopData.to}</Text>
                    <Text key={index}>{stopData.stop.departure}</Text>
                    </View>
                ))}
                </View>
            )}
        </View>
    )
}

export default StopDetail;