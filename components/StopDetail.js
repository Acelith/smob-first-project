/*
    StopDetail.js
    Autore: Lara Simonetti
    Utilità: questa componente è stata sviluppata per ...
    Utilizzo: per utilizzare questa componente è necessario includerla ...., 
passarle in argomento (props, ...) n dati nel formato yyyy
*/

/*
data.station?.slice(1).map(...)
*/

import { useEffect } from "react";
import { View } from "react-native";

const API_URL = "http://transport.opendata.ch/v1/stationboard";



const StopDetail = (details) => {
    const [stopData, setStopData] = useState();

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
            <text>Linea 1</text>
            {stopData.stationboard && (
                <text>{details.stationboard.to}</text>
                <text>{details.stationboard.TimeStamp}</text>
            )}
        </View>
    )
}

export default StopDetail;