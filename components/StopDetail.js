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


const StopDetail = ({route}) => {
    const [stopData, setStopData] = useState([]);
    const stationId = route.station.id

    useEffect(() => {
        const fetchStopDetailData = async () => {
            const response = await fetch(`${API_URL}?id=${stationId}&limit=20`);
            const data = await response.json();
            data.map((item) => {
                item.stop.departure = moment(item.stop.departure).format('HH:mm');
            })
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